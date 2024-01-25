import {
  REQUEST_ISS_LOCATION,
  RECEIVE_ISS_LOCATION_SUCCESS,
  RECEIVE_ISS_LOCATION_FAILED,
} from '../actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  isLoading: false,
};

const issLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_ISS_LOCATION: {
    return {
      ...state,
      isLoading: true,
    };
  }

  case RECEIVE_ISS_LOCATION_SUCCESS: {
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
      isLoading: false,
    };
  }

  case RECEIVE_ISS_LOCATION_FAILED: {
    return {
      ...state,
      isLoading: false,
    };
  }

  default:
    return state;
  }
};

export default issLocation;
