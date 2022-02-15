// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeName = license.split(" ")[0];
  if (license === "None") {
    return "";
  } else {
    return `
![license badge](https://img.shields.io/badge/license-${badgeName}-brightgreen)
    `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`;
    case "Apache License 2.0":
      return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)`;
    case "GNU GPLv3":
      return `[GNU GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)`;
    case "Mozilla Public License 2.0":
      return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `<a name="license"></a>
    
## License
This project is covered under the following license:
    
${renderLicenseLink(license)}
    `;
  }
}

function tableOfContents(license) {
  if (license === "None") {
    return `
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
  } else {
    return `
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
${tableOfContents(data.license)}
<a name="installation"></a>
## Installation
${data.installation}
<a name="usage"></a>
## Usage
${data.usage}
${renderLicenseSection(data.license)}
<a name="contributing"></a>
## Contributing
${data.contributing}
<a name="tests"></a>
## Tests
${data.test}
<a name="questions"></a>
## Questions
If you wish to view more of my work, feel free to visit my GitHub account. Additionally, if you have any questions, you can contact me at the email address below. Thanks!
[GitHub](https://github.com/${data.github})
<${data.email}>
`;
}

module.exports = generateMarkdown;