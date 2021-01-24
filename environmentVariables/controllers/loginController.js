const values = require('../models/values');

// dotenv package let's us set environment variables using the .env file in the main application folder.
let envValue = process.env.DEVELOPMENT ?
    values.devUser : values.prodUser;

const home = (req, res) => {
    res.render('login', {
        title: `${envValue.siteTitle} Login`,
        errorVisibility: false
    });
}

const authenticate = (req, res) => {
    let password = envValue.password;

    if (req.body.username == 'nightwatch' &&
        req.body.password == password) {
        res.redirect('/profile');
    } else {
        res.render('login', {
            title: `${envValue.siteTitle} Login`,
            message: '⚠️ Invalid username or password',
            errorVisibility: true
        });
    }
}

module.exports = {
    home,
    authenticate
}
