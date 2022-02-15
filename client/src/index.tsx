import * as React from 'react';
import * as ReactDOM from 'react-dom';


import App from './pages/App/App';
import './styles.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from './Theme/ThemeContext';


import { Background } from './Theme/Background/Background';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider initialTheme='dark'>
        <Background>
          {/* <App name='hello!' /> */}
          <App />
        </Background>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
