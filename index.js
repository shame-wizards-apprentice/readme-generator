// Import Inquirer and fs
const inqiurer = require(`./node_modules/inquirer`);
const fs = require(`fs`);

// Create user questions to generate readme sections
inqiurer
    .prompt([
        {
            type: `input`,
            name: `projectTitle`,
            message: `What is the title of your project?`
        },
        {
            type: `input`,
            name: `projectDescription`,
            message: `Please describe your project.`
        },
        {
            type: `input`,
            name: `projectInstallation`,
            message: `What are the installation instructions for your project?`
        },
        {
            type: `input`,
            name: `projectUsage`,
            message: `Please describe how to use your project.`
        },
        {
            type: `checkbox`,
            name: `projectLicense`,
            message: `Please select your project's license.`,
            choices: [
                { name: `MIT` }
            ]
        },
        {
            type: `input`,
            name: `projectContribution`,
            message: `What are the contribution guidelines for your project?`
        },
        {
            type: `input`,
            name: `projectTest`,
            message: `Please describe how to test your project.`
        },
        {
            type: `input`,
            name: `userGithub`,
            message: `What is your Github Username?`
        },
        {
            type: `input`,
            name: `userEmail`,
            message: `What is your email address?`
        }

    
    ]).then((response) => {
// String of markdown to create readme file
let readmeString = 
`# ${response.projectTitle}

[![License: ${response.projectLicense}](https://img.shields.io/badge/License-${response.projectLicense}-yellow.svg)](https://opensource.org/licenses/${response.projectLicense})

## Description

${response.projectDescription}

## Table of Contents

[Installation](##Installation)

[Usage](##Usage)

[License](##License)

[Contributing](##Contributing)

[Tests](##Tests)

[Questions/Contact](##Questions)

## Installation

${response.projectInstallation}

## Usage

${response.projectUsage}

## License

This application is covered under a(n) ${response.projectLicense} License.

## Contributing

${response.projectContribution}

## Tests

${response.projectTest}

## Questions

[Github Profile](https://github.com/${response.userGithub})

Or, email me with addition questions at ${response.userEmail}.`

        // Create readme file based on user input
        fs.writeFile("README1.md", readmeString, (err) =>
            err ? console.error(err) : console.log("Success!"))

    // If there is an error, log it to the console
    }).catch(function (err) {
        err ? console.error(err) : console.log("Success!")
    })
