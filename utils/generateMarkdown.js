const badges = {
  'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'BSD 2-Clause "Simplified" License': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause',
  'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let doc = '';
  for(const section of Object.keys(data).slice(0,-2)) {
    if(section === 'Title') {
      doc = `# ${data[section]}\n\n`;
    } else {
      doc += `## ${section}\n\n${data[section]}\n\n`;
      
      if(section === 'Description') {
        // Add License badge
        doc += badges[data['License']] + '\n\n';
        // Add Table of Contents after Description
        doc += '## Table of Contents\n\n';
        doc += '- [Installation](#installation)\n\n';
        doc += '- [Usage](#usage)\n\n';
        doc += '- [License](#license)\n\n';
        doc += '- [Contributing](#contributing)\n\n';
        doc += '- [Tests](#tests)\n\n';
        doc += '- [Questions](#questions)\n\n';
      }
    }
  }

  doc += `## Questions\n\n`;
  doc += `https://github.com/${data['githubUsername']}\n\n`;
  doc += `For additional questions contact ${data['email']}`;
  
  return doc;
}

export default generateMarkdown;
