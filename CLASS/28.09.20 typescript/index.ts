console.log('Hi');
async function newAnswer() {
  return 'This is return';
}

// let x: number = 0;
// x = 44;

// let x: string = '';

// x = 'hi';
// let w: number;
// w = 22;
// let q = 10;
// type: Food = 'Apple' | 'Banana' | ['Hi', 'Hey'];
// let eat: Food = 'Apple';

interface Car {
  model: string;
  year: number;
  [key: string]: any;
}

const Ferrari: Car = {
  model: '448',
  year: 2020,
};

const Bugatti: Car = {
  model: 'divo',
  year: 2019,
  color: 'red',
  price: 100000,
};

function sum(x: number, y: number): string {
  return 'hi';
}

function add(x: number, y: number): void {
  'hi';
}

let newArray: number[];
newArray = [234, 45, 323];
newArray.push(22);
let carArr: Car[] = [];
type ListOfMany = [number?, string?, boolean?];
const arr: ListOfMany = [];
arr.push(33);
arr.push('hi');
