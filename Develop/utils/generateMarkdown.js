// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  let userLicense = '';

  if (license == 'ISC') {
    userLicense = `ISC1`
  } 
  else if (license == 'MIT') {
    userLicense = `MIT1`
  }
  else if (license == '0BSD') {
    userLicense = `0BSD1`
  }
  else if (license == 'Fair') {
    userLicense = `Fair1`
  }
  else {
    userLicense = ''
  }
  return userLicense; 
};

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license == 'ISC') {
    licenseLink = `ISC2`
  } 
  else if (license == 'MIT') {
    licenseLink = `MIT2`
  }
  else if (license == '0BSD') {
    licenseLink = `0BSD2`
  }
  else if (license == 'Fair') {
    licenseLink = `Fair2`
  }
  else {
    licenseLink = ''
  }
  return licenseLink; 
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [ContactMe](#contactme)
  [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.collab}
  ${data.collabGithub}

  ## ContactMe
  ${data.github}
  ${data.email}
  ${data.name}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
