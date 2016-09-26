# Jail Sessions

### Objective
Build an app that leverages [https://www.npmjs.com/package/client-sessions](client-sessions) to create **sessions** for users to login. Then use those **sessions** with **middleware** to protect certain routes in the app.

### Resources

- [https://github.com/RefactorU/exercise-starters/tree/master/week8/passport-jail/starter-code](Starter Code)
- [https://www.npmjs.com/package/client-sessions](client-sessions [npm])

### Requirements

#### Part I - Setup
- Copy the jail starter code into your own project folder and install dependencies
- Run a `mongorestore` command on the dump folder. This will seed your database with the appropriate users. Make sure you check the database name in `app.js`!

#### Part II - Sessions
- Look at the **client-sessions** documentation to learn how to initialize sessions (place the initialization code in `app.js`)
- When a user logs in by submitting the login form, store the **session** (`req.body`) in `req.session`.
- For all future requests, the session can be read by the server from that user's cookies (until that user erases his/her cookies, or that session expires).

#### Part III - Lockdown
- Not everyone in the jail can go everywhere. To limit access, fill in the `protected` middleware function and **mount** it to the appropriate routes to make sure only logged in users can access the jail.
- Let's take it a little further. Certain users should only be able to access specific rooms in the jail. Write some more middleware that obeys the following rules:
    * Alice (warden) can go anywhere.
    * Bob (guard) can go anywhere, except the warden's office.
    * Carlos (visitor) can go to the lobby and the visitor's lounge.
    * Eve (prisoner) can go to the cafeteria or Eve's jail cell.
    * Mallory (prisoner) can go to the cafeteria or Mallory's cell.
