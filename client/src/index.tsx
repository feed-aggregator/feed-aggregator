import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './pages/HelloWorld/HelloWorld';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider, getInitialTheme } from './Theme/ThemeContext';

import {Background} from './Theme/Background/Background'
import './Theme/Background/Background.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider initialTheme={getInitialTheme()} >
        <Background>
          <App name='hello!' />
        </Background>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
