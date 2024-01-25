const username = 'thiago';

function myFunction(num: number): number {
  return num + 1;
}

const myArr = ['1', '2', '3'];

// ['thiago', 'lari', 'raionara', 'giovani']

const students: string[] = ['thiago', 'lari', 'raionara', 'giovani'];
const studentsAge: number[] = [10, 11, 12, 13]

const myStudentsAge: (string | number)[] = ['thiago', 10, 'lari', 11, 'raionara', 12, 'giovani', 13]
// Array<(string | number)>

type Usertype = {
  id: number
  name: string,
  age: number
}

// const user: Usertype = {
//   name: 'lari',
//   age: 11,
// }

const studentsDb: Usertype[] = [{ id: 1, name: 'thiago', age: 10 }]

// studentsDb.find((s) => s.id == '1')




type RegisterUser = {
  name: string,
  age: unknown,
  isActive: boolean,
  role: 'admin' | 'user'
}

const newRegisteredUser: RegisterUser = {
  age: 'batatinha',
  isActive: true,
  name: 'thiago',
  role: 'user'
}