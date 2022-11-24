//we could use inteface, inteface extentions and implement them in class
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EvaluatedEmployee = Employee & Admin; //intersection object types => both properties/combination of two object types

const employee1: EvaluatedEmployee = {//all 3 props should be
  name: 'Manu',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combine = string | number; //union type
type Numeric = number | boolean;
type Universal = Combine & Numeric; //intersection union types=> only what they have in common
// number is intersection of two types, therefore only the number accepted
//const x: Universal=true; //error
