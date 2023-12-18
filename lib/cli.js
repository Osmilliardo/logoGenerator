const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    name: 'text',
                    type: 'input',
                    message: 'Enter logo text of no more than 3 characters.',
                    validate: (text) =>
                    text.length <= 3 || 'The logo cannot contain more than 3 characters',
                },
                {
                    name: 'textColor',
                    type: 'input',
                    message: 'Enter a color for the TEXT',
                },
                {
                    name: 'shapeChoice',
                    type: 'list',
                    message: 'Choose a shape for the logo',
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    name: 'shapeColor',
                    type: 'input',
                    message: 'Enter a color for the SHAPE',
                },
            ])
            .then(({ text, textColor, shapeChoice, shapeColor}) => {
                let shape;
                switch (shapeChoice) {
                    case 'circle':
                        shape = new Circle();
                        break;

                    case 'square':
                        shape = new Square();
                        break;

                    default:
                        shape = new Triangle();
                        break;
                }
                shape.setColor(shapeColor);

                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile('logo.svg', svg.render());
            })
            .then(() => {
                console.log('logo.svg has been generated!');
            })
            .catch((error) => {
                console.log(error);
                console.log('Something has gone wrong!');
            });
    }
}

module.exports = CLI