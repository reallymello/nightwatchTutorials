"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleCommands = {
    clickSearch() {
        return this.waitForElementVisible('@submit', 10000)
            .click('@submit')
            .waitForElementNotPresent('@submit');
    },
};
const googlePage = {
    url: 'http://www.google.com',
    commands: [googleCommands],
    elements: {
        searchBar: {
            selector: 'input[type=text]',
        },
        submit: {
            selector: 'input[name=btnK]',
        },
    },
};
exports.default = googlePage;
