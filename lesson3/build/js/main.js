var stringArr = ['Linkin Park', 'Iron Maiden', 'Soundgarden', false];
var guitars = ['Strat', 'Les Paul', 4000];
var mixData = ['EVH', 1984, true];
stringArr[0] = 'Korn';
stringArr.push('Linkin Park');
guitars[0] = 2010;
guitars.unshift('Jim');
var test = [];
var bands = [];
console.log(bands);
//Tupla
var myTuple = ['Dave', 30, false];
var mixed = ['Fílip', 1, false];
myTuple[1] = 42;
//Objectos
var myObj;
myObj = {
    nome: 'Luffy',
    idade: 30,
    afilicao: 'Chapéus de Palha',
    temHaki: true
};
var myObj1 = {
    tecnologia: 'Vue',
    linguagemProgramacao: 'Html, Css, JS',
    versao: 3
};
var newObj = {
    prop1: 'Dave',
    prop2: 'Uzumaki'
};
newObj.prop1 = 'Kushina';
var arrObj = [];
arrObj.push(myObj);
arrObj.push(myObj1);
console.log(typeof myObj);
console.log(arrObj);
;
var game1 = {
    name: 'Doom',
    genre: 'Ação,Fps',
    release_date: 1996
};
var game2 = {
    name: 'Far Cry 6',
    genre: 'Ação, Fps, RPG',
    release_date: 2022
};
var greetJogo = function (jogo) {
    if (jogo.name) {
        return "Hello ".concat(jogo.name.toUpperCase());
    }
    return 'Hello';
};
console.log(greetJogo(game2));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 6] = "F";
    Grade[Grade["D"] = 7] = "D";
    Grade[Grade["C"] = 8] = "C";
    Grade[Grade["B"] = 9] = "B";
    Grade[Grade["A"] = 10] = "A";
})(Grade || (Grade = {}));
;
console.log(Grade);
