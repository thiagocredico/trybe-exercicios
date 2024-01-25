import React from 'react';
import MyLink from './MyLink';
import Title from './Title';

function LoginNotFound() {
  return (
    <section>
      <Title title="Login não efetuado!" />
      <MyLink to="/login">
        Login
      </MyLink>
    </section>
  );
}

export default LoginNotFound;
