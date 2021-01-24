const values = require('../models/values');

const home = (req, res) => {

    let user = process.env.DEVELOPMENT ?
        values.devUser : values.prodUser;

    res.render('profile', {
        title: `${user.siteTitle} | User Profile`,
        firstName: user.firstName,
        lastName: user.lastName,
        shirtSize: user.shirtSize
    });
}

module.exports = {
    home
}
