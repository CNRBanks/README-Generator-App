// function for generating markdown for the readme input
// TO DO - add license badge functionality
function MarkDown(data) {
  return `

## ${data.Title}
    https://github.com/${data.Username}/${data.Title}

## Description
    ${data.Description} 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    ${data.Installation}

## Usage
    ${data.Usage}

## License
    ${data.License}

## Tests
    ${data.Tests}

## Questions
    Please contact ${data.Username} directly at : ${data.Email} if you have any questions!
    `;
}

module.exports = MarkDown;
