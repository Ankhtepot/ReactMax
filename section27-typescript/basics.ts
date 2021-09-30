// Primitives
// noinspection JSUnusedGlobalSymbols,JSUnusedAssignment

let age: number = 13.5;

age = 12.1;

let userName: string | string[] = 'name';

userName = 'Petr';

let isInstructor: boolean = false;

isInstructor = true;

// More Complex types

let hobbies: string[];

hobbies = [
    'Aikido',
    'GameDev',
]

type Person = {
    name: 'Petr';
    age: 32;
};

let person: Person;

person = {
    name: 'Petr',
    age: 32
}

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function add(a: number, b: number): number {
    return a + b;
}

function printToConsole(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T): T[] {
    return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);