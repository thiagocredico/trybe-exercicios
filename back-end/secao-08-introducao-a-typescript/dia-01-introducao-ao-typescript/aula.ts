type Contact = {
  email: string,
  phoneNumber: string
}

type Student = {
  name: string,
  lastName: string
  email: string,
  age: number,
  isActive: boolean,
  id: number,
  contact: Contact
}

const student: Student = {
  id: 300,
  isActive: true,
  name: 'Renato',
  lastName: 'Oliveira',
  email: 'Renatinhovidaloka@hotmail.com',
  age: 13,
  contact: {
    email: 'soakdoa',
    phoneNumber: '1234'
  }
}


function hello(name: string, age: number): boolean | string {
  if (age < 18) {
    return false
  }

  console.log('boas vindas', name)
  return `vc e dimaior`
};


type User = {
  name: string,
  role: 'admin' | 'user'
}

interface user {
  name: string,
  age: number
}

const cabrito = { grito: 'beeh', cabecada: () => { return '1' } }
const bode = { ...cabrito, acessorio: 'chifre' }
// isso quer dizer que typode bode = { cabrito, acessorio: string } ?

type hi = 'oi' | 'tchau'

const variavel: hi = 'oi';

type objeto = { nome: string, saudação: string };
const objetoNovo: objeto = { nome: 'carlos', saudação: variavel } 