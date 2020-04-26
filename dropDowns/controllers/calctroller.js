const calculatorValues = require('../models/values');

let numberOptions1 = calculatorValues.numberOptions1;
let numberOptions2 = calculatorValues.numberOptions2;
let operators = calculatorValues.operators;

const home = (req, res) => {
    res.render('index', {
        title: 'reallyMello calculator',
        numbersList1: numberOptions1,
        numbersList2: numberOptions2,
        operators: operators
    });
}

const calculate = (req, res) => {
    let n1 = parseInt(req.body.num1);
    let n2 = parseInt(req.body.num2);
    let theResult = calculateResult(req.body.operators, n1, n2);

    console.log(req.body);

    res.render('index', {
        title: 'reallyMello calculator',
        numbersList1: numberOptions1,
        numbersList2: numberOptions2,
        result: theResult,
        operators: operators,
        firstSelectedNumber: req.body.firstNumberIndex,
        secondSelectedNumber: req.body.secondNumberIndex,
        selectedOperator: req.body.operatorIndex
    });
}

const calculateResult = (operator, n1, n2) => {
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
    }
    return null;
}

module.exports = {
    home,
    calculate
}
