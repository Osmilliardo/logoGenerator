class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }


    render() {
        return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    setText(message, color) {
        if (message.length > 3) {
            throw new Error('Text must not be more than 3 characters');
        }
        this.textElement = `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;