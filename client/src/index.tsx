import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './pages/App/App';
import "./styles.scss";
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App name="John Alicastro😳" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
