// The primitives: string, number, boolean
const name: string = "ram";
const age: number = 20;
const isMale: boolean = true;

// Object types
const address: {
  city: string;
  province: string;
  country: string;
  postalCode: number;
  street: string;
} = {
  street: "Birat chowk",
  city: "Itahari",
  province: "Koshi",
  country: "Nepal",
  postalCode: 50100,
};

// array types
const phoneNumbers: number[] = [9789709879, 780979079008, 9079867];

// array of object type
const students: {
  name: string;
  class: number;
  roll: number;
  phone: number[];
}[] = [
  {
    name: "ram",
    class: 10,
    roll: 1,
    phone: [980, 234],
  },
  {
    name: "hari",
    class: 10,
    roll: 2,
    phone: [980, 234],
  },
  {
    name: "sita",
    class: 10,
    roll: 3,
    phone: [980, 234],
  },
];

// any -> dynamic (not recommended)
const myVar: any = true;

// multiple types
const phone: string | number = 97829879342;

// enum (fixed) types
const role: "USER" | "ADMIN" | "MERCHANT" = "USER";

/**
 * 1. Function type: ()=>void
 * 2. Function's params type
 * 3. Function's return type
 */

function sum(a: number, b: number): number {
  return a + b;
}

sum(234, 234);

const greet = (name: string): string => {
  return `Hello ${name}`;
};

greet("ram");

function hello() {
  //   console.log("hello");
}

const getUser = async (): Promise<string> => {
  return await "User";
};

type Address = {
  city: string;
  province: string;
  country: string;
  postalCode: number;
  street: string;
};

// Interface
interface User {
  name: string;
  age: number;
  email?: string | number;
  phone?: number;
  roles: string[];
  address?: Address;
}

interface Student extends User {
  class: number;
  roll: number;
  section: string;
}

type Teacher = User & {
  subject: string[];
  faculty: string;
};

const student: Student = {};

const teacher: Teacher = {};

const user1: User = {
  name: "Ram",
  age: 30,
  roles: ["user"],
};

const user2: User = {
  name: "Ram",
  age: 30,
  email: "sam@gmail.com",
  roles: ["admin"],
};

// Type

const address2: Address = {
  street: "Birat chowk",
  city: "Itahari",
  province: "Koshi",
  country: "Nepal",
  postalCode: 50100,
};

const address3: Address = {
  street: "Birat chowk",
  city: "Itahari",
  province: "Koshi",
  country: "Nepal",
  postalCode: 50100,
};
