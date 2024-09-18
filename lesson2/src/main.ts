let myName = 'Fílip';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'Madara';
meaningOfLife = 42;
isLoading = true;
album = 42;

const sum = (a: number, b: number): number => {
    return a + b;  
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

let person: {
    name: string,
    location: string,
    isDev?: true
};

person = {
    name: 'Naruto',
    location: 'Konohakagure',
};

console.log('PERSON ', person);



// tsc src/main.ts --outDir ./build/js