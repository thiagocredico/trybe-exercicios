import getCurrentISSLocation from '../../services/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const RECEIVE_ISS_LOCATION_FAILED = 'RECEIVE_ISS_LOCATION_FAILED';

const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

const receiveISSLocationSuccess = (latitude, longitude) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  payload: {
    latitude,
    longitude,
  },
});

const requestISSLocationFailed = () => ({
  type: RECEIVE_ISS_LOCATION_FAILED,
});

export const actionFetchISSLocation = () => {
  console.log('Redux thunk');

  return async (dispatch) => {
    dispatch(requestISSLocation());

    try {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();

      dispatch(
        receiveISSLocationSuccess(Number(latitude), Number(longitude)),
      );
    } catch (error) {
      console.log(error);
      dispatch(requestISSLocationFailed());
    }
  };
};
