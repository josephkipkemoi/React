import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// Error monitoring and reporting
if(process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://4150ddd424ed4502a6afc5ae937851aa@o1227796.ingest.sentry.io/6373454',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.2
  })
}

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
