#!/usr/bin/env node

import inquirer from "inquirer"

const currencyRate: any = {
    USD: 1,    //Base Currency
    PKR: 278,
    INR: 83,
    GBP: 0.80,
    IRR: 42062
}

let userAnswers = await inquirer.prompt([{
    name: "fromCurrency",
    type: "list",
    message: "Converting from",
    choices: ["USD", "PKR", "INR", "GBP", "IRR"]
},
{
    name: "toCurrency",
    type: "list",
    message: "Converting to",
    choices: ["USD", "PKR", "INR", "GBP", "IRR"]
},
{
    name: "amount",
    type: "number",
    message: "Please enter amount",
}])

let userAnswersFromCur = userAnswers.fromCurrency
let userAnswersToCur = userAnswers.toCurrency
let fromCurAmount = currencyRate[userAnswersFromCur]
let toCurAmount = currencyRate[userAnswersToCur]
let amount = userAnswers.amount

let conversion = (amount / fromCurAmount) * toCurAmount
console.log(conversion);