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
        message: " Project keyword",
        name:"keyword"
    },
    {
        type: "input",
        message: "Describe how to use it",
        name:"description"
    },
    {
        type: "input",
        message: "Describe how to install it",
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
        message: "How do users test it?",
        name:"test"
    },
    {
        type: "input",
        message: "Add your twitter for future collaborators",
        name:"collaborate"
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

module.exports = inquirer;