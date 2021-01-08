const inqiurer = require(`./node_modules/inquirer`);
const fs = require(`fs`);

inquirer
    .prompt([
        {
            type: `input`,
            name: `projectTitle`,
            message: `What is the title of your project?`
        }
    ])
