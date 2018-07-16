import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import i18n from './i18n';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
let elLocaleData = require('react-intl/locale-data/el');

addLocaleData(elLocaleData);

/* Define your translations */
let i18nConfig = {
  locale: 'el',
  messages: i18n
};

ReactDOM.render(
  <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
