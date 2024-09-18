class Coder {

    secondLang!: string;

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TS'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge(): string {
        return `Hello, I am ${this.age}`;
    }

    public getLang(): string {
        return ` I use this lang: ${this.lang}`;
    }

};


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }
};

interface Musico {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarrista implements Musico {
    nameOf!: string
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}