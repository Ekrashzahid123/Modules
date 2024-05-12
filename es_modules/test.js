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
        //  Choices:["+","-","*","/","%"],
    }
]);
console.log(questions);
