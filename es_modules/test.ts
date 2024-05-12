import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
const questions= await inquirer.prompt([
{
  type : "number",
  name :"num1",
  message :"Enter your First number",


},
{
  type : "number",
  name :"num2",
  message :"Enter your Second number",


},
{
  type : "number",
  name :"num1",
  message :"Enter your First number",


},
{
  type : "List",
  name :"Operator",
  Choices:["+","-","*","/","%"],
 message :"Select your Operator",



},

]);
function sum(num1:number,num2:number)
{

}
function subtract()
{

}
function multiply()
{


}
function Division()
{

}

console.log(questions);


