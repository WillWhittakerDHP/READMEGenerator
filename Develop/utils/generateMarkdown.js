/*
!TODO: Create a function that returns a license badge based on which license is passed in

!TODO: Create a function that returns the license link

!TODO: Create a function that returns the license section of README

!TODO: Create a function to generate markdown for README
*/

export const renderLicense = function(answers) {
  let licenseBadge = "";
  let licenseLink = "";
  let licenseSection = "";
  switch (answers.license) {
  case 'MIT':
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    licenseLink = "";
    licenseSection = "";
    break;
  case 'GPLv3':
    licenseBadge = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    licenseLink = "";
    licenseSection = "";
    break;
  case 'GPL':
    licenseBadge = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    licenseLink = "";
    licenseSection = "";
    break;
  case'Apache 2.0':
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    licenseLink = "";
    licenseSection = "";
    break;
  case 'Boost':
    licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    licenseLink = "";
    licenseSection = "";
    break;
  case 'Perl':
    licenseBadge = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    licenseLink = "";
    licenseSection = "";
    break;
  case '':
    licenseBadge =  ""
    licenseLink = "";
    licenseSection = "";
    break;
  }
  console.log(licenseBadge,licenseLink,licenseSection);
  return licenseBadge, licenseLink, licenseSection;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = function(data) {
  return `
  # ${data.title}
  ## Authors
  ${data.authors}
  ## Description
  ${data.description}
  ## License
  ${data.licenseBadge}
  ${data.licenseLink = ""}
  ${data.licenseSection = ""}
  ## Installation
  ${data.installation}
  ## Support
  ${data.support}
  ## Acknowledgments
  ${data.acknowledgements}
  ## Status
  ${data.status}
  `;
};

renderLicense();
// generateMarkdown()

export default generateMarkdown;
// export let renderLicense;


/*
Make sure you are sending in the right data.

Does the variable license exist already in the generateMarkdown function?
If not, how do I access it through the data argument?
ex: 'data.license'? etc... Once you send in the right data to the renderLicense function there should be no need to do license.license, unless it is an object.
I suggest using console.log(data) -- in generateMarkdown -- and console.log(answers.license) -- in renderLicense -- to keep track of the data types and structures you are sending to each function.

Also, you can return licenseSelection inside each if else code block.
*/
