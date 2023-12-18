const SVG = require('./svg');

//tests that the svg renders at all
test('Should render an svg element', () => {
    const expected = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expected);
});

//tests that the text is added to the svg
test('Should add the text element', () => {
    const expected = 
    '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><text x="100" y="115" font-size="60" text-anchor="middle" fill="white">TSG</text></svg>';
    const svg = new SVG();
    svg.setText('TSG', 'white');
    expect(svg.render()).toEqual(expected);
});

//tests to make sure that the input is within defined parameters
test('Should throw an error if the text input is more than 3 characters', () => {
    const expectedErr = new Error('Text must not be more than 3 characters');
    const svg = new SVG();
    expect(() => svg.setText('three')).toThrow(expectedErr);
});