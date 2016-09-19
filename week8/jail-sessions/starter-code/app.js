require('colors');

const SALTY_BITS = 11;
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const sessions = require("client-sessions");

const fileServer = express.static('public');

// app.use(sessions()); // uncomment and finish initializing sessions!

var app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

/** Database setup **/
mongoose.connect('mongodb://localhost/jail', (err) => {
    if( err ) {
        console.error('Could not connect to the Mongo Jailhouse!'.bold.red);
    } else {
        console.info("Connected to the Jailhouse!".bold.green);
    }
});

var User = mongoose.model('user', mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role     : { type: String, required: true }
}));

// hash passwords before saving a new user
UserSchema.pre('save', hashPassword);

function hashPassword(next) { // don't use an arrow function here, we need the scope!
    var user = this; // this is why we can't use an arrow function here, again we need the scope

    // only hash the password if it has been modified (for updating users)
    if( !user.isModified('password') ) {
        return next();
    }
    // generate a salt value to encrypt our password
    bcrypt.genSalt(SALTY_BITS, (saltErr, salt) => { // used to guarentee uniqueness
        if(saltErr) {
            return next(saltErr);
        }
        console.info('SALT generated!'.bold.yellow, salt);

        // now let's hash this bad boy!
        bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                return next(hashErr);
            }
            // over-ride the plain text password with the hashed one
            user.password = hashedPassword;
            next();
        });
    });
}

app.post('/signup', (req, res) => {
    var newUser = new User(req.body);

    newUser.save((saveErr, user) => {
        if ( saveErr ) {
            // @TODO: send down an error response
            res.end();
        } else {
            // @TODO: add the user to the session object
            res.end();
        }
    });
});

/*
    app.get('/example', protected, (req, res) => { res.end(); });

    function protected(req, res, next) {
        if( req.session.user.role === 'someRole' ) {
            // do something and call next()
        } else {
            // send down a forbidden response (status code 403)
        }
    }
*/

app.get('/', (req, res) => {
    res.redirect('/html/login.html');
});
app.get('/jail', (req, res, next) => {
    next();
});
app.get('/lobby', (req, res, next) => {
    next();
});
app.get('/visitors-lounge', (req, res, next) => {
    next();
});
app.get('/cafeteria', (req, res, next) => {
    next();
});
app.get('/wardens-office', (req, res, next) => {
    next();
});
app.get('/cell-e', (req, res, next) => {
    next();
});
app.get('/cell-m', (req, res, next) => {
    next();
});

// intentionally mounting the static middleware down here so that
// you can horizontally mount middleware on a per route basis above...
app.use(fileServer);

app.listen(PORT, () => { console.info('Jailhouse up! PORT:', PORT); });
