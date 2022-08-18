/*
Cambiar el estado de los datos, donde se crea uno nuevo, no se muta el mismo
Bibliotecas: Mori, inmutable.js, underscore, lodash, ramda, etc.
*/

//Not pure
const namePerson = "Noith";

function greetOne() {
    console.log(`Hi, I'm ${namePerson}`);
}

greetOne();

//Functional
function greet(name) {
    return `Hi, I'm ${name}`;
}

console.log(greet("Leosh"));

//Funciones de orden superior, funciones que retornan otra funcion
function makeAbjectifier(adjective) {
    return function (string) {
        return `${adjective} ${string}`;
    };
}

const coolifier = makeAbjectifier("cool");
console.log(coolifier("video"));

//Map
const rooms = ["H1", "H2", "H3"];
const newRooms = rooms.map((room) => {
    if (room === "H3") {
        return "H4";
    } else {
        return room;
    }
});

console.log(newRooms);
console.log(rooms);

function solution1(array) {
	return array.map(item => item.name);
}; 

console.log(solution1([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
]));

function solution2(array) {
 	return array.map(item => ({
        ...item,
        taces: Math.trunc(item.price * .19)
    }));
}; 

console.log(solution2([
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
]));

//Sort, No esta pensado para velocidad
const numbers = [2, 4, 6, 8, 25, 1, 50, 10];
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

const numbersTwo = [2, 4, 6, 8, 25, 1, 50, 10];
numbersTwo.sort((a, b) => a - b);
console.log(numbersTwo);

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

console.log(items);

// sort by name
items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

console.log(items);

/*
 Menor a 0 -> a esta en un indice menor que b. (descendente)
 0 -> a esta en un indice menor que b.
 Mayor a 0 -> a esta en un indice mayor que b. (ascendente)
*/

function solutionSort(array) {
	return array
        .sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime())
        .map((item) => item.name);
}; 

console.log(
    solutionSort([
        {
            name: "Nicolas",
            dateOfBirth: new Date(1993, 6, 9),
        },
        {
            name: "Santiago",
            dateOfBirth: new Date(2018, 6, 11),
        },
        {
            name: "Zulema",
            dateOfBirth: new Date(1994, 10, 7),
        },
    ])
);

//Filter
function solution3(array) {
	return array.filter(item => item.length >= 4);
}; 

console.log(solution3(['amor', 'sol', 'piedra', 'día']));

function solution4(array) {
	return array.filter(item => item.total >= 100 && item.delivered === true);
}; 

console.log(solution4([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
]));

function solution5(words, query) {
  return words.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

console.log(solution5(["ana", "santi", "nico", "anastasia"], "an"));
console.log(solution5(["ana", "santi", "nico", "anastasia"], "xyz"));

//Reduce
function solution6(numbers) {
  return numbers.reduce((count, item) => count + item, 0);
}

console.log(solution6([1, 1, 1]));
console.log(solution6([2, 4, 8]));

function solution7(orders) {
 	return orders.reduce((count, item) => count + item.total, 0);
}; 

console.log(
    solution7([
        {
            customerName: "Nicolas",
            total: 100,
            delivered: true,
        },
        {
            customerName: "Zulema",
            total: 120,
            delivered: false,
        },
    ])
);

//Set, no repetir los valores dentro de un arreglo
const numbersSet = [2, 4, 6, 8, 2, 2, 4, 6, 8];
const newNumbers = [...new Set(numbersSet)]; //Array.from(new Set(numbersSet)) || [... new Set(numbersSet)]
console.log(newNumbers);

//Callbacks, es una funcion pasada como argumento dentro de otra función, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
function modify1(array, callback) {
    array.push("Noith");
    callback();
}

const names = ["Johan", "Peter", "Alberto"];
modify1(names, function () {
    console.log("Se ha modificado el array!");
});

function modify(array, callback) {
    array.push("Camila");
    callback(array);
}

modify(names, function (array) {
    console.log(
        `Se ha modificado el array y ahora es de ${array.length} elementos!`
    );
});

names.forEach((name) => console.log(name)); //Esto es un callback

//Diferencia entre parametro y argumento
function sayHi(parameter) {}
sayHi("argument");

//some
function solution8(numbers){
 	return numbers.some(item => item % 2 === 0);
}; 

console.log(solution8([1, 3, 5, 7, 10, 11]));
console.log(solution8([1, 3, 5]));

//every
function solution9(numbers) {
 	return numbers.every(item => item % 2 === 0);
}; 

console.log(solution9([2, 4, 6, 8, 10]));
console.log(solution9([1, 3, 5, 7, 10, 11]));
console.log(solution9([1, 3, 5]));

//find
function solutionFind(cards){
	const search = cards.find(item => item === 'AS');
	return search || false
}; 

console.log(solutionFind(["diamonds", "hearts", "spades", "AS"]));
console.log(solutionFind(["diamonds", "hearts", "spades"]));

//findIndex
function solutionFind2(words) {
	const index = words.findIndex((item) => item === "myKey");
  return index !== -1 ? index : false;
}; 

console.log(solutionFind2(["diamonds", "myKey", "spades", "AS"]));
console.log(solutionFind2(["diamonds", "hearts", "spades"]));
console.log(solutionFind2(["myKey", "hearts", "spades"]));

//includes
function solution(word, query){
	return word.toLowerCase().includes(query.toLowerCase());
}; 

console.log(solution("Ana lava la tina", "ana")); // Suelta un true o false
console.log(solution("Santiago", "tiago"));
console.log(solution("Nicolas", "ana"));

//split
function solutionSplit(title) {
  return title.split(' ').join('-').toLowerCase();
}

console.log(solutionSplit("La forma de correr Python"));
console.log(solutionSplit("La API para nunca parar de aprender"));
console.log(solutionSplit("Curso de arrays"));

//flat: Quita un nivel de corchetes
function solutionFlat(array) {
    return array.flat();
}; 

console.log(solutionFlat([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));

//flatMap
function solutionFlatMap(lines) {
	return lines.flatMap(line => line.split(' ')).length;
}; 

console.log(solutionFlatMap([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));