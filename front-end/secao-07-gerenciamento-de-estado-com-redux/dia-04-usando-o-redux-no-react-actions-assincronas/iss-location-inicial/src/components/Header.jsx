import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coordinates from './Coordinates';

class Header extends Component {
  render() {
    const { latitude = 0, longitude = 0 } = this.props;
    console.log(this.props);

    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </header>
    );
  }
}

// Se voce precisa ler do Redux, voce cria o mapStateToProps
const mapStateToProps = (globalState) => ({
  latitude: globalState.issLocation.latitude,
  longitude: globalState.issLocation.longitude,
});

export default connect(mapStateToProps)(Header);
