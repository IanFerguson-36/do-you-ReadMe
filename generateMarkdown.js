// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`;
  }
  if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license === "None") {
    return `No license listed`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.Title}
  # Table of Contents
  Description
  Install
  Title
  Usage
  # Description
   ${data.Description}
  # Installation Process
   ${data.Install}
  # License
   ${renderLicenseBadge(data.License)}
  # Usage 
   ${data.Usage}
  # Email Address
  ${data.Email}
  # Github Profile
  ${data.Github}

`;
}

module.exports = generateMarkdown;
