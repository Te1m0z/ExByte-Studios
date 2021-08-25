import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './context/SettingsContext.js';
import './global.sass';
import i18n from './i18n.js';

const defaultSettings = {
  theme: localStorage.getItem('theme') || 'light'
};

document.body.classList.add(defaultSettings.theme)

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider settings={defaultSettings}>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
