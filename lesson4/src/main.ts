//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarrist = {
    name?: string,
    active: boolean,
    albums: stringOrNumber
};

type UserId = stringOrNumber | Guitarrist;

//Literal types

let userName: 'Dave' | 'John' | 'Amy';

//Functions
const add = (a: number, b: number): number => {
    return a + b;
};

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }

    return a + b;
};

const addAll2= (a: number, b: number, c: number = 30): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }

    return a + b;
};

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};

const logMsg = (message: any): void => {
    console.log(message);
};

const createError = (errorMsg: string): never => {
    throw new Error(errorMsg);
};

const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
};

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen');
};