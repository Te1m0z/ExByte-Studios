import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SettingsProvider } from './context/SettingsContext.js';
import './global.sass';
import i18n from './i18n.js';
import { RecoilRoot } from 'recoil';

const defaultSettings = {
  theme: localStorage.getItem('theme') || 'light'
};

document.body.classList.add(defaultSettings.theme);
window.addEventListener('storage', e => {

  console.log(e.key);

  if (e.key === 'data') {
    window.localStorage.removeItem('data');
    document.location.reload();
  }

});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SettingsProvider settings={defaultSettings}>
        <App />
      </SettingsProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
