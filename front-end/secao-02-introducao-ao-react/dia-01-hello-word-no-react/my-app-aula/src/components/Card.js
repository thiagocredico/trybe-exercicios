import React, { Component } from 'react'
import "./Card.css"

class Card extends Component {


  render() {


    return (
      <section className='card'>
        <img
          src="https://avatars.githubusercontent.com/u/4885094?s=400&u=ddb8b9749e797c5080b328b90793dbcc8a09bf23&v=4"
          alt="Avatar"
          className="card__img"
        />
        <h1>Henrique Jensen</h1>
        <p>Especialista Front</p>
      </section>
    )
  }


}

export default Card;