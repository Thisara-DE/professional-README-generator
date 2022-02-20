// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if(license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if(license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None' || license === '') {
    return '';
  }

  return`
  This project is licensed under ${renderLicenseBadge(license)}
  For more information [visit here.](https://opensource.org/licenses)
  `;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.projectName}
  ## Description
  ${data.description}

  <br>

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)  
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  <br>

  ## Installation
  To install necessary dependencies, run the following command: <br><br>
  ${data.installation}

  <br>

  ## Usage
  This project is using following technologies: <br><br>
  ${data.usage.join(',  ')}

  <br>

  ## License
  ${renderLicenseSection(data.license)}
  
  <br>

  ## Contributing
  ${data.contributing}  

  <br>

  ## Tests <br>
  ${data.test}

  <br>

  ## Questions
  If you have any questions, email me: ${data.email}

  <br>

  ## &copy; ${new Date().getFullYear()} by [${data.title}](https://github.com/${data.title})
`;
}

module.exports = generateMarkdown;
