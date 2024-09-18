let stringArr: (string|boolean)[] = ['Linkin Park', 'Iron Maiden', 'Soundgarden', false];
let guitars = ['Strat', 'Les Paul', 4000];
let mixData = ['EVH', 1984, true];

stringArr[0] = 'Korn';
stringArr.push('Linkin Park');
guitars[0] = 2010;
guitars.unshift('Jim');

let test = [];
let bands: string[] = [];
console.log(bands);

//Tupla
let myTuple: [string, number, boolean] = ['Dave', 30, false];
let mixed = ['Fílip', 1, false];

myTuple[1] = 42;

//Objectos
let myObj: object;
myObj = {
    nome: 'Luffy',
    idade: 30,
    afilicao: 'Chapéus de Palha',
    temHaki: true
};

let myObj1 = {
    tecnologia: 'Vue',
    linguagemProgramacao: 'Html, Css, JS',
    versao: 3
};

const newObj = {
    prop1: 'Dave',
    prop2: 'Uzumaki'
};

newObj.prop1 = 'Kushina';


let arrObj: object[] = [];
arrObj.push(myObj)
arrObj.push(myObj1);

console.log(typeof myObj);

console.log(arrObj);

//interface
//type Jogo = {}
interface Jogo {
    name: string,
    genre: string,
    release_date: number
};

let game1: Jogo = {
    name: 'Doom',
    genre: 'Ação,Fps',
    release_date: 1996
};

let game2: Jogo = {
    name: 'Far Cry 6',
    genre: 'Ação, Fps, RPG',
    release_date: 2022
};

const greetJogo = (jogo: Jogo) => {
    if (jogo.name) {
        return `Hello ${jogo.name.toUpperCase()}`;
    }

    return 'Hello';
};

console.log(greetJogo(game2));

//Enums

enum Grade {
    F = 6,
    D,
    C,
    B,
    A
};

console.log(Grade);