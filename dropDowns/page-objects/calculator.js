const calculatorCommands = {
    add: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, '+');
    },
    subtract: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, '-');
    },
    multiply: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, '*');
    },
    divide: function (n1, n2) {
        return this.fillAndSubmit(n1, n2, '/');
    },
    fillAndSubmit: function (n1, n2, op) {
        return this
            .setValue('@operator', op)
            .setValue('@firstNumber', n1)
            .setValue('@secondNumber', n2)
            .click('@submit');
    },
    adding: function (n1) {
        return this
            .setValue('@operator', '+')
            .setValue('@firstNumber', n1)
    },
    plus: function (n2) {
        return this.setValue('@secondNumber', n2);
    },
    equals: function (expectedValue) {
        return this.click('@submit')
            .expect.element('@result')
            .text.to.equal(expectedValue.toString());
    }
}

module.exports = {
    url: 'http://localhost:3000',
    commands: [calculatorCommands],
    elements: {
        firstNumber: '#numList1',
        secondNumber: '#numList2',
        operator: '#operatorList',
        firstNumberSelected: '#numList1 option:checked',
        secondNumberSelected: '#numList1 option:checked',
        operatorSelected: '#operatorList option:checked',
        result: '#result',
        submit: '#submit'
    }
}
