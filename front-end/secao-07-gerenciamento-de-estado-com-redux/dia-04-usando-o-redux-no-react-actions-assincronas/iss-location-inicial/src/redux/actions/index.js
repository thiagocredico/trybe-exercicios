import getCurrentISSLocation from '../../services/issAPI';

export const REQUEST_ISS_LOCATION_LOADING = 'REQUEST_ISS_LOCATION_LOADING';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION_ERROR = 'REQUEST_ISS_LOCATION_ERROR';

// Boas praticas LOADING, SUCCESS e FAILED

// Regras da action
// 1 - ela precisa retornar um objeto
// 2 - ela precisa ter um type dentro do objeto
// se eu preciso consumir API dentro da promise eu preciso do redux-thunk
// uma action Thunk é uma funcao que retorna uma funcao

// action normal
const requestISSLocationLoading = () => ({
  type: REQUEST_ISS_LOCATION_LOADING,
});

// action normal
const requestISSLocationError = () => ({
  type: REQUEST_ISS_LOCATION_ERROR,
});

// action normal
const requestISSLocationSuccess = (latitude, longitude) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  payload: {
    latitude,
    longitude,
  },
});

// action thunk
export const actionFetchISSLocation = () => {
  console.log('actionFetchISSLocation');
  return async (dispatch) => {
    try {
      dispatch(requestISSLocationLoading());

      const dataApi = await getCurrentISSLocation();
      const { iss_position: issPosition } = dataApi;

      dispatch(
        requestISSLocationSuccess(
          Number(issPosition.latitude),
          Number(issPosition.longitude),
        ),
      );
    } catch (error) {
      console.log(error);
      dispatch(requestISSLocationError());
    }
  };
};

// export const actionGetProducts = () => {
//   return () => {
//     fetch()
//   }
// }
