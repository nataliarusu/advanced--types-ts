//we could use inteface, inteface extentions and implement them in class
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EvaluatedEmployee = Employee & Admin; //both properties

const employee1: EvaluatedEmployee = {
  name: 'Manu',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combine = string | number; //union type
type Numeric = number | boolean;
type Universal = Combine & Numeric; //number is intersection of two types, therefore only the number accepted
//const x: Universal=true; //error
