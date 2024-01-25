import React, { Component } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { connect } from 'react-redux';
import { actionFetchISSLocation } from '../redux/actions';

class ISSLocation extends Component {
  // evento do React que acontece quando o componente é criado
  componentDidMount() {
    const { dispatch } = this.props;
    const TIMER = 2000;

    this.timer = setInterval(() => {
      dispatch(actionFetchISSLocation());
    }, TIMER);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // -9.3773106,-38.25455 -> posicao da cidade de Paulo Afonso BA
  render() {
    const { latitude = 0, longitude = 0, isLoading = false } = this.props;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <ZoomControl />
            {!isLoading && <Marker anchor={ [latitude, longitude] } />}
          </Map>
        </div>
      </main>
    );
  }
}

// lendo da store do Redux
const mapStateToProps = ({ issLocation }) => ({
  latitude: issLocation.latitude,
  longitude: issLocation.longitude,
  isLoading: issLocation.isLoading,
});

export default connect(mapStateToProps)(ISSLocation);
