// criar um componente React com classes
import React from "react";

class Hello extends React.Component {


  render() {

    // Aqui fica o codigo JS
    const names = ['Procópio', 'Satu', 'Will', 'Ander', 'Jensen']

    return (
      <>
        <h1 className="title">Hello World</h1>
        <h2>Olá Turma 29</h2>
        <p>O professor da turma é o </p>
        {names.map((person) => (
        <li key={person} >Hello {person}</li>
      ))}
      </>
    )
  }

}

export default Hello;

// extends é conceito de Orientacao Objetos (nao irei, vcs vao ver em Backend)
