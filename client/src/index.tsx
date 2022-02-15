import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import App from './pages/HelloWorld/HelloWorld';
import App from './App/App'
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider, getInitialTheme } from './Theme/ThemeContext';


import { Background } from './Theme/Background/Background';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider initialTheme={getInitialTheme()} >
        <Background>
          <App/>
        </Background>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
