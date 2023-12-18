class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="75" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="35" y="40" width="130" height="130" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 20 180, 150 20, 150" fill="${this.color}" />`
    }
}

module.exports = { Circle, Square, Triangle };