// function to generate markdown for README
// npm install node?
//open index.js in terminal then type node index.js to start

function generateMarkdown(data) {
  return `
  #  ${data.file_name} ![License](https://img.shields.io/badge/License-${data.license}-purple.svg)
  ---
  ## Table of Contents
  - Sections:
    - [Installation](#installation) 
    - [Usage](#usage)
    - [License](#license) 
    - [Contributing](#contributing) 
    - [Tests](#tests) 
    - [Questions](#questions)
  ---
  ## Description
   ${data.description}

  ## Installation[](#installation)
  The following dependencies must be installed to run the app      
  
    ${data.installation} 
     
  ## Usage[](#usage)
   ${data.usage}    

  ## License[](#license)
   The project is licenced under the following license [${data.license}](https://opensource.org/licenses/${data.license})

  ## Contributing[](#contributing)
   ${data.contributing}

  ## Tests[](#tests)
   The app can be tested by running the following command in your terminal:
   
    ${data.tests}


  ## Questions[](#questions)
  If you have any queries or suggestions, here is how you can reach me:
  - Please send me your questions via email: ${data.email}
  - Visit my gitHub: [${data.username}](https://github.com/${data.username})  

`
};

module.exports = generateMarkdown;
