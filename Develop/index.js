// // TODO: Include packages needed for this application

import fs from 'fs';
import inquirer from 'inquirer';
import renderLicense from './utils/generateMarkdown.js';
import generateMarkdown from './utils/generateMarkdown.js';

// // TODO: Create an array of questions for user input
const promptsForTheAuthors = function() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please name your project",
      },
      // {
      //   type: "input",
      //   name: "authors",
      //   message: "Who are the authors of this project?",
      // },  
      // {
      //   type: "input",
      //   name: "description",
      //   message: "Please take a moment to describe your project",
      // },
      // {
      //   type: "input",
      //   name: "installation",
      //   message: "How should a user install your project?",
      // },
      // {
      //   type: "input",
      //   name: "support",
      //   message: "Do you have specific guidance for users to support your project?",
      // },
      // {
      //   type: "input",
      //   name: "acknowledgments",
      //   message: "Please take a moment to acknowledge supporters of your project",
      // },
      // {
      //   type: "list",
      //   name: "status",
      //   message: "what is the current status of your project",
      //   choices: 
      //    [
      //     "Story Development",
      //     "MVP",
      //     "Feature Addition",
      //     "Soliciting Feedback",
      //     "Complete",
      //   ],
      // },
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
    .then((answers) => {
      console.log(answers)
    return answers })
  };
  /*
inquirer-prompt(questions)
•then ((answers) =>
{
const filename = '${answers.name.toLowerCase()•split(' ').join('')}-json'
fs. writeFile(filename, JSON.stringify(answers, null, '(t'), (err) => err ? console.error(colors.red(err)) : console.10g(colors green('Success!')))
  */
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
  const readmePageContent = ({ ...answers, ...licenseData }); 
  fs.writeFile('README.md', readmePageContent, (err) => {
    err ? console.log(err) : console.log('Successfully generated README!')
  })

};

// TODO: Create a function to initialize app
async function init() {
  const answers = await promptsForTheAuthors();
  const licenseData = await renderLicense(answers);
  // writeToFile(markdownContent);
  // return answers;
};
// console.log(answers);

// const markdownContent = generateMarkdown({...answers});
// console.log(markdownContent);

init();