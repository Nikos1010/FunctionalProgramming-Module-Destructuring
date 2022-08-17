/*
Cambiar el estado de los datos, donde se crea uno nuevo, no se muta el mismo
Bibliotecas: Mori, inmutable.js, underscore, lodash, ramda, etc.
*/

//Not pure
const namePerson = 'Noith';

function greetOne() {
    console.log(`Hi, I'm ${namePerson}`);
}

greetOne();

//Functional
function greet(name) {
    return `Hi, I'm ${name}`;
}

console.log(greet('Leosh'));

//Funciones de orden superior, funciones que retornan otra funcion
function makeAbjectifier(adjective) {
    return function (string) {
        return `${adjective} ${string}`;
    }
}

const coolifier = makeAbjectifier('cool');
console.log(coolifier('video'));

//Map
const rooms = ['H1', 'H2', 'H3'];
const newRooms = rooms.map((room) => {
    if(room === 'H3') {return 'H4'}
    else {return room}
});

console.log(newRooms);
console.log(rooms);

//Sort, No esta pensado para velocidad
const numbers = [2,4,6,8,25,1,50,10];
numbers.sort(() => Math.random() -0.5 );
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

//Filter

//Reduce

//Set, no repetir los valores dentro de un arreglo
const numbersSet = [2,4,6,8,2,2,4,6,8];
const newNumbers = [...new Set(numbersSet)]; //Array.from(new Set(numbersSet)) || [... new Set(numbersSet)]
console.log(newNumbers);

//Callbacks, es una funcion pasada como argumento dentro de otra función, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
function modify1(array, callback) {
    array.push('Noith');
    callback();
}

const names = ['Johan', 'Peter', 'Alberto']; 
modify1(names, function() {
    console.log('Se ha modificado el array!');
});

function modify(array, callback) {
    array.push("Camila");
    callback(array);
}

modify(names, function (array) {
    console.log(`Se ha modificado el array y ahora es de ${array.length} elementos!`);
});

names.forEach(name => console.log(name)); //Esto es un callback

//Diferencia entre parametro y argumento
function sayHi(parameter){}
sayHi('argument');