

const echo = <C>(arg: C): C => arg;

const isObj = <T>(arg: T): boolean => {
    return (
        typeof arg === 'object' && !Array.isArray(arg)
    )
};

interface BoolCheck<T> {
    value: T,
    isBoolean: boolean
};

interface HasId {
    id: number
};

const processUser = <T extends HasId>(user: T): T => {
    return user;
};


class StateObj<T> {
    private data: T;

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data;
    }

    setData(value: T): void {
        this.data = value
    }
}

const store = new StateObj('Fílip');


interface Pessoa {
    nome: string
    cpf: string
    email: string
}

let pessoas: Pessoa[] = [];

const addPessoa = (pessoa: Pessoa): void => {
    pessoas.push(pessoa);
}

const pessoa1: Pessoa = {
    nome: 'Fílip Anselmo',
    cpf: '1111.999.00-11',
    email: 'filipanselmo@email.com'
};

const pessoa2: Pessoa = {
    nome: 'Naruto Uzumaki',
    cpf: '1111.999.00-12',
    email: 'naruto@email.com'
};

const pessoa3: Pessoa = {
    nome: 'Monkey D Garp',
    cpf: '1111.999.00-14',
    email: 'garp@email.com'
};

addPessoa(pessoa1);
addPessoa(pessoa2);
addPessoa(pessoa3);

pessoas.forEach((pessoa) => {
    console.log('Pessoas', pessoa);
});
