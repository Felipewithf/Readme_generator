const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({title,description,usage,install,reportIssues,collaborate})=> 
`# ${title}

${Keywords}

## Table of Content

- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Test](#test)
- [Questions](#questions)
- [Issues](#issues)
- [License](#license)
- [Contribute](#contribute)

## Description 

${description}

## Usage

${usage}

## Installation

Load <pre><code>npm i</code></pre> to install all the dependencis then run <pre><code>node index.js</code></pre> and follow all the prompts

${install}

## Test

To test it you need to run <pre><code>npm run test</code></pre>

${test}

## Questions

For any questions please check my [Github profile](https://github.com/${github}/)

or you can [email me](mailto:${email}) for more pressing questions.

## Issues

Users can raise an issue ticket by: ${reportIssues}

## License

<img src="https://img.shields.io/static/v1?label=License&message=${license}&color=GREEN"/>

## Contribute

If you want to collaborate please fork the repository and tag me on [Twitter](https://twitter.com/${twitter}) where I am more active, then request a pull request and I will review it
`;


inquirer.prompt([
    {
        type: "input",
        message: " What is your project title?",
        name:"title"
    },
    {
        type: "input",
        message: " Project keyword",
        name:"keyword"
    },
    {
        type: "input",
        message: "Describe what it does",
        name:"description"
    },
    {
        type: "input",
        message: "Describe how users use it",
        name:"usage"
    },
    {
        type: "input",
        message: "Besides generic installation (npm i ) do you want to add something else?",
        name:"install"
    },
    {
        input: "list",
        message: "How do users report issues?",
        name:"reportIssues",
        choice: ["GitHub Issues Tabs","Private Message"]
    },
    {
        type: "input",
        message: "Besides generic test ( npm run test ) do you want to add something else?",
        name:"test"
    },
    {
        type: "input",
        message: "Add your twitter username for future collaborators to reach out",
        name:"twitter"
    },
    {
        type: "input",
        message: "What is your github Username?",
        name:"github"
    },
    {
        type: "input",
        message: "What is your email?",
        name:"email"
    },
    {
        type: "list",
        message: "What type of license?",
        name:"license",
        choice: ["MIT","ISC","Apache"]
    }

])
.then((response)=>{
    const complete_Readme_Content = generateHTML(response);

    fs.writeFile('readme.md',complete_Readme_Content, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );

});
