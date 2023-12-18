const { Square, Triangle, Circle } = require('./shapes');

describe('Circle', () => {
    test('Should render a gray circle svg', () => {
        //sets a hardcoded expected line
        const expected = '<circle cx="100" cy="100" r="75" fill="gray" />';
        //creates a new circle using a hardcoded color and the method in shapes.js then renders the code
        const circle = new Circle();
        circle.setColor('gray');
        const actual = circle.render();
        //compares the hardcoded test to the dynamic generated to see if they're the same and everything works
        expect(actual).toEqual(expected);
    });
    //similar test check that a different color can be used
    test('Should accept a different color', () => {
        const expected = '<circle cx="100" cy="100" r="75" fill="yellow" />'
        const circle = new Circle();
        circle.setColor('yellow');
        const actual = circle.render();
        expect(actual).toEqual(expected);
    });
});

describe('Square', () => {
    test('Should render a red square svg', () => {
        const expected = '<rect x="35" y="40" width="130" height="130" fill="red" />';
        const square = new Square();
        square.setColor('red');
        const actual = square.render();
        expect(actual).toEqual(expected);
    });
    test('Should accept a different color', () => {
        const expected = '<rect x="35" y="40" width="130" height="130" fill="yellow" />'
        const square = new Square();
        square.setColor('yellow');
        const actual = square.render();
        expect(actual).toEqual(expected);
    });
});

describe('Triangle', () => {
    test('Should render a green triangle svg', () => {
        const expected = '<polygon points="100, 20 180, 150 20, 150" fill="green" />';
        const triangle = new Triangle();
        triangle.setColor('green');
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
    test('Should accept a different color', () => {
        const expected = '<polygon points="100, 20 180, 150 20, 150" fill="yellow" />';
        const triangle = new Triangle();
        triangle.setColor('yellow');
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
});