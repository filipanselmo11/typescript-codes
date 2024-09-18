var echo = function (arg) { return arg; };
var isObj = function (arg) {
    return (typeof arg === 'object' && !Array.isArray(arg));
};
;
;
var processUser = function (user) {
    return user;
};
var pessoas = [];
var addPessoa = function (pessoa) {
    pessoas.push(pessoa);
};
var pessoa1 = {
    nome: 'Fílip Anselmo',
    cpf: '1111.999.00-11',
    email: 'filipanselmo@email.com'
};
var pessoa2 = {
    nome: 'Naruto Uzumaki',
    cpf: '1111.999.00-12',
    email: 'naruto@email.com'
};
var pessoa3 = {
    nome: 'Monkey D Garp',
    cpf: '1111.999.00-14',
    email: 'garp@email.com'
};
addPessoa(pessoa1);
addPessoa(pessoa2);
addPessoa(pessoa3);
pessoas.forEach(function (pessoa) {
    console.log(pessoa);
});
