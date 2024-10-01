/*

!TODO: Create a function that returns a license badge based on which license is passed in

!TODO: Create a function that returns the license link

!TODO: Create a function that returns the license section of README

!TODO: Create a function to generate markdown for README
*/

const renderLicenseBadge = (data) => {
  let apple = "";
  switch (data) {
  case 'MIT':
    apple = `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
    break;
  case 'GPLv3':
    apple = `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    break;
  case 'GPL':
    apple = `(https://img.shields.io/badge/License-GPL-blue.svg)`
    break;
  case'Apache 2.0':
    apple = `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    break;
  case 'Boost':
    apple = `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    break;
  case 'Perl':
    apple = `(https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    break;
  case '':
    apple =  ""
    break;
  }
  return apple;
};
const renderLicenseLink = function(data) {
  let orange = "";
  switch (data) {
  case 'MIT':
    orange = "TBA";
    break;
  case 'GPLv3':
    orange = "TBA";
    break;
  case 'GPL':
    orange = "TBA";
    break;
  case'Apache 2.0':
    orange = "TBA";
    break;
  case 'Boost':
    orange = "TBA";
    break;
  case 'Perl':
    orange = "TBA";
    break;
  case '':
    orange = "";
    break;
  }
};
const renderLicenseSection = (data) => {
  let banana = "";
  switch (data) {
  case 'MIT':
    banana = "TBW";
    break;
  case 'GPLv3':
    banana = "TBW";
    break;
  case 'GPL':
    banana = "TBW";
    break;
  case'Apache 2.0':
    banana = "TBW";
    break;
  case 'Boost':
    banana = "TBW";
    break;
  case 'Perl':
    banana = "TBW";
    break;
  case '':
    banana = "";
    break;
  }
  console.log(banana);
  return (banana);
};
const renderCopyrightString = (data) => {
  const currentYear = new Date().getFullYear();
return `Copyright (c) ${currentYear} ${data.authors}`};

// TODO: Create a function to generate markdown for README
const generateMarkdown = function(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let copyrightString = renderCopyrightString(data);
  return `
  # ${data.title}
  ## Authors
  ${data.authors}
  ## Description
  ${data.description}
  ## License
  ${licenseBadge}
  ${licenseLink}
  ${copyrightString}
  ${licenseSection}
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

export default generateMarkdown;
