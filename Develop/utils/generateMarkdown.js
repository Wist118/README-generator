//function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  let userLicense = '';

  if (license == 'ISC') {
    userLicense = `[<img src="https://img.shields.io/badge/License-ISC-blue.svg">](https://www.isc.org/licenses/)`
  } 
  else if (license == 'MIT') {
    userLicense = `[<img src="https://img.shields.io/badge/License-MIT-yellow.svg">](https://www.mit.edu/~amini/LICENSE.md)`
  }
  else if (license == 'Perl') {
    userLicense = `[<img src="https://img.shields.io/badge/License-Perl-0298c3.svg">](https://dev.perl.org/licenses/)`
  }
  else if (license == 'IBM') {
    userLicense = `[<img src="https://img.shields.io/badge/License-IPL_1.0-blue.svg">](https://www-40.ibm.com/software/sla/sladb.nsf)`
  }
  else {
    userLicense = ''
  }
  return userLicense; 
};

//function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license == 'ISC') {
    licenseLink = `[ISC](https://www.isc.org/licenses/)`
  } 
  else if (license == 'MIT') {
    licenseLink = `[MIT](https://www.mit.edu/~amini/LICENSE.md)`
  }
  else if (license == 'Perl') {
    licenseLink = `[Perl](https://dev.perl.org/licenses/)`
  }
  else if (license == 'IBM') {
    licenseLink = `[IBM](https://www-40.ibm.com/software/sla/sladb.nsf)`
  }
  else {
    licenseLink = ''
  }
  return licenseLink; 
}

// function to generate user's contributors array and add more contributors to the array if chosen
const generateCredit = creditArr => {
  const creditData = creditArr.filter(contributors => {
    if (contributors.confirmCollab) {
      return true;
    } else {
      return false;
    }
  });

  const gitCredit = creditData.map(({ collabGithub, collab }) => {
    return `[${collab}](https://github.com/${collabGithub})  
    `
  });

  return `
  ${gitCredit.join('')}
  `;
};

//function to generate markdown for README
module.exports = generateMarkdown => {;
const { contributor, ...data } = generateMarkdown;

  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of contents  
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contributing](#contributing)  
  [ContactMe](#contactme)  
  [License](#license)  

  ## Description  
  ${data.description}

  ## Installation  
  ${data.install}

  ## Usage  
  ${data.usage}

  ## Contributing
  ${generateCredit(contributor)}  


  ## ContactMe
  Contact me for additional questions or for ways you can contribute to this project!  
  **${data.name}**  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  

  ## Tests
  ${data.tests}

  ## License
  Licensed by the ${renderLicenseLink(data.license)} license.

`;
}


