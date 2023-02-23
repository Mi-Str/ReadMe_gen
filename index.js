//npm init
//npm install inquirer



const path = require('path');
const first = path.resolve(__dirname, 'utils')
const second = path.join(first,'userPrompt.js')
const prompts = require(second);


// function to initialize program
function init() {
    prompts.cyclePrompt();
}
init();
