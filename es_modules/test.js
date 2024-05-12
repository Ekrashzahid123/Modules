import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your First number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your Second number",
    },
    {
        type: "number",
        name: "num1",
        message: "Enter your First number",
    },
    {
        type: "List",
        name: "Operator",
        Choices: ["+", "-", "*", "/", "%"],
        message: "Select your Operator",
    },
]);
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(`This is Sum of ${num1} and ${num2}=${result}`);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log(`This is subtraction of ${num1} and ${num2}=${result}`);
}
function Division(num1, num2) {
    const result = num1 / num2;
    console.log(`This is Division of ${num1} and ${num2}=${result}`);
}
function Multiply(num1, num2) {
    const result = num1 * num2;
    console.log(`This is Multilpy of ${num1} and ${num2}=${result}`);
}
console.log(questions);
console.log(questions.choices);
if (questions.Operator == "+") {
    console.log("this is sum:");
    sum(questions.num1, questions.num2);
}
else if (questions.Operator == "-") {
    subtract(questions.num1, questions.num2);
}
else if (questions.Operator == "/") {
    Division(questions.num1, questions.num2);
}
else if (questions.Operator == "*") {
    Multiply(questions.num1, questions.num2);
}
else {
    console.log("INValid Opreator ");
}
export { sum };
