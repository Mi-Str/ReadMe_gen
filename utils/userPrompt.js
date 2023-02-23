const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require(path.join(__dirname, 'generateMarkdown.js'));
const fs = require('fs').promises

// array of questions for user
const questions = [
  
    {
        type: 'input',  
        name: 'file_name',
        message: 'Please add the title of your project',
        validate: (value) => {if(value) {return true} else{
            return 'Please add your response to continue'
        
        }}},
    {
        type: 'input',  
        name: 'description',
        message: 'Please describe your app',
        
    },
    {
        type: 'input',  
        name: 'installation',
        message: 'What are the dependencies the user needs to install to run the app?',
        default: 'Inquirer'
        
    },
    {
        type: 'input',  
        name: 'usage',
        message: 'How can you use the app?',
        default: 'The app runs in Terminal'
        
    },
    {
        type: 'rawlist',  
        name: 'license',
        message: ' What is the license used for this app?',
        choices:['MIT', 'GPL', 'Apache', 'N/A'],
        validate: (value) => {if(value) {return true} else{
            return 'Please select a value to continue'
       }   
    }},
    {
        type: 'input',  
        name: 'contributing',
        message: 'Who are the contributors to this app?',
        default: 'n/a'        
        
    },
    {
        type: 'input',  
        name: 'tests',
        message: 'How was this app tested?',
        default: 'node index.js'       
        
    },
    {
        type: 'input',  
        name: 'username',
        message: 'Please add your github username',
        default: 'n/a'       
        
    },
    {
        type: 'input',  
        name: 'email',
        message: 'Please add your email',   
        default: 'n/a'     
        
    }  
    
]

function continuePrompt(){
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'Would you like to continue?'
        }
    ]).then(data => {
        if (data.choice) {
            return cyclePrompt()
        }
        console.log('Thank you for using the app');
    })

}
function cyclePrompt() {

    console.log('Welcome');
    inquirer.prompt([
        {
            type: 'confirm', 
            name: 'choice',
            message: 'Would you like to generate a README file?'
        }
    ]).then(data => {
        if (data.choice) {
            return userPrompt()
        }
        console.log('Thank you for using the app');
    })

}

function userPrompt (){
    inquirer.prompt(questions)       
    .then ( data => {
                 
        return fs.writeFile(data.file_name + '.md', generateMarkdown(data))
        .then ( () => {
            console.log(`You have successfully reated the ${data.file_name} file`)            
        
        }).catch(err => console.log(err));
         
    })    
    
    .then(continuePrompt)

};


module.exports = { 
    cyclePrompt : cyclePrompt, 
    userPrompt: userPrompt,
};

