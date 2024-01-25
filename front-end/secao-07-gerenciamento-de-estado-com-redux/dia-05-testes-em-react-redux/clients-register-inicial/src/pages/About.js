import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyLink from '../components/MyLink';
import Title from '../components/Title';
import LoginNotFound from '../components/LoginNotFound';

class About extends React.Component {
  render() {
    const { userLogin } = this.props;
    if (!userLogin.email) return <LoginNotFound />;
    return (
      <section>
        <Title title={ `Bem vindo ${userLogin.email}` } />
        <MyLink to="/register">Cadastre outros</MyLink>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  userLogin: state.login,
});

About.propTypes = {
  userLogin: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(About);
