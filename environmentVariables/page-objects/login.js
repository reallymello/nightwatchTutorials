const loginCommands = {
    loginAs: function (username, password) {
        return this
            .setValue('@username', username)
            .setValue('@password', password)
            .click('@loginButton');
    }
}

module.exports = {
    url: 'http://localhost:3000',
    commands: [loginCommands],
    elements: {
        pageTitle: "h1",
        username: '#username',
        password: '#password',
        loginButton: '#login',
        loginError: '#loginError'
    }
}
