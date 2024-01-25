import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from 'pigeon-maps';
import { actionFetchISSLocation } from '../redux/actions';

const MAX_INTERVAL = 2000;

class ISSLocation extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    this.timer = setInterval(() => {
      dispatch(actionFetchISSLocation());
    }, MAX_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { latitude, longitude, isLoading } = this.props;

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
            { !isLoading && <Marker anchor={ [latitude, longitude] } />}
          </Map>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
  isLoading: state.issLocation.isLoading,
});

export default connect(mapStateToProps)(ISSLocation);
