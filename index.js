const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({title,description,howto,install,reportIssues,collaborate})=> 
`# ${title}

What the app is for

## Description

${description}

## How to use it

${howto}

## Install it

${install}

## How to Report Issues

${reportIssues}

## How to Contribute

${collaborate}
`;


inquirer.prompt([
    {
        type: "input",
        message: " What is your project title?",
        name:"title"
    },
    {
        type: "input",
        message: " Project description",
        name:"description"
    },
    {
        type: "input",
        message: "Describe how to use it",
        name:"howto"
    },
    {
        type: "input",
        message: "Describe how to install it",
        name:"install"
    },
    {
        type: "input",
        message: "How do users report issues?",
        name:"reportIssues"
    },
    {
        type: "input",
        message: "How do people collaborate?",
        name:"collaborate"
    }
])
.then((response)=>{
    const complete_Readme_Content = generateHTML(response);

    fs.writeFile('readme.md',complete_Readme_Content, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );

});

