// // TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// // TODO: Create an array of questions for user input
async function promptsForTheAuthors() {
  
  // // function generateReadmePageContent(data) {
  // //   let readmePageContent = generateMarkdown(data);
  // //   return readmePageContent;
  // // };
  
  // function writeToFile(fileName, data) {
  //   // console.log(typeof data, data);
  //   fs.writeFile('../README.md', data, (err) => {
  //       err ? console.log(err) : console.log('Successfully generated README!')
  //       })    
  //     };

  await inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Please name your project",
    },
    {
      type: "input",
      name: "authors",
      message: "Who are the authors of this project?",
    },  
    {
      type: "input",
      name: "description",
      message: "Please take a moment to describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "How should a user install your project?",
    },
    {
      type: "input",
      name: "support",
      message: "Do you have specific guidance for users to support your project?",
    },
    {
      type: "input",
      name: "acknowledgments",
      message: "Please take a moment to acknowledge supporters of your project",
    },
    {
      type: "list",
      name: "status",
      message: "what is the current status of your project",
      choices: 
      [
        "Story Development",
        "MVP",
        "Feature Addition",
        "Soliciting Feedback",
        "Complete",
      ],
    },
    {
      type: "list",
      name: "license",
      message: "Which of the following licenses will you use for this project?",
      choices: 
      [
        "Apache 2.0",
        "Boost",
        'GPL',
        'GPLv3',
        "MIT",
        "Perl",
        "other",
      ],
    },
  ])
  .then((answers) => {let readmePageContent = generateMarkdown(answers)
    fs.writeFile('../README.md', `${readmePageContent}`, (err) => {
    err ? console.log(err) : console.log('Successfully generated README!')})})};

function init() {
  promptsForTheAuthors();
};

init();
