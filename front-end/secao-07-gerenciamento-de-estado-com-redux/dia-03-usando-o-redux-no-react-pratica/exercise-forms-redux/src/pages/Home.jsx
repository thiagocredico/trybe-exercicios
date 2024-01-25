import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <section className="box column is-half is-offset-one-quarter">
        <Button
          onClick={ () => history.push('/personal-form') }
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="button"
        />
      </section>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Home;
