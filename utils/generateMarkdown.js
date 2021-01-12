// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'BSD 2-Clause':
      return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
    case 'BSD 3-Clause':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
    case 'Eclipse 1.0':
      return 'https://img.shields.io/badge/License-EPL%201.0-red.svg';
    case 'GPL v2':
      return 'https://img.shields.io/badge/License-GPL%20v2-blue.svg';
    case 'GPL v3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'LGPL v3':
      return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD 2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Eclipse 1.0':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'GPL v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'LGPL v3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'none':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return '';
  } else {
    return `This project and all of its source code are subject to the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

[![License](${licenseBadge})](${licenseLink})

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
Please reach out to me with any questions!

Email: ${data.email}

GitHub: [${data.github}](http://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
