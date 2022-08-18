const circle = require('./circle.js'); // import
const Square = require('./square.js');
const mySquare = new Square(2);

exports.getAreaCircle = (req, res) => {
    res.send(`The area of a circle of radius 4 is ${circle.area(4)}`);
};

exports.getAreaSquare = (req, res) => {
    res.send(`The area of mySquare is ${mySquare.area()}`);
}
