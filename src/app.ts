// In code examples below are (adv. types) intersection types, type guards,
// discrimnated unions, type casting, index properties, 
// function-overloads, optional chaining, nullish coalescing.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overload example below stating that result 
//in parameters should result in number 
//with : number after parameters statement

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


const result = add('max', 'shwartz');
result.split(' ');

//optional chaining using the question mark (like a if statement)

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'Software Engineer', description: 'my own company' }
};

console.log(fetchedUserData?.job?.title);

//nullish coalescing is the double ??
 const userInput = undefined;

 const storedData = userInput ?? 'DEFAULT';
 console.log(storedData);



// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // discriminated unions because one common property in every object
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

//exclamation mark means it will never be null
//below are two examples of type casting
//const userInputElement = <HTMLInputElement>document.getElementById('userInput')!;
// const userInputElement = document.getElementById('userInput')!  as HTMLInputElement;
// userInputElement.value = 'Hi there';

//below is alternative way without exclamation mark
//const userInputElement = document.getElementById('userInput');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there';
// }

//index properties 
//interface ErrorContainer {
  //this protects in case you use a number instead of a string
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'not a valid email',
//   username: 'must start with a letter',
// };


