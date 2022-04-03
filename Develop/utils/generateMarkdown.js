// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = () => {
  return `
  # ${data.title}

  ## Description:
  ${data.motivation}

  ${data.build}

  ${data.problem}

  ${data.learnAbout}

  ## Table of contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)

  ## Instalation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.collab}

  ${data.party}

  ${data.tutorial}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
