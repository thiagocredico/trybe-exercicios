import React from 'react';
import MyLink from '../components/MyLink';
import Title from '../components/Title';

class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Title title="Cadastro de Clientes" />
        <MyLink to="/login">Faça seu Login</MyLink>
      </main>
    );
  }
}

export default Home;
