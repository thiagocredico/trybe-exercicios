import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../../redux/reducers';

const renderWithRedux = (
  component,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
  } = {},
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});

export default renderWithRedux;
