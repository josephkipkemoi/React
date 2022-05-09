import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { Container, ThemeProvider } from 'react-bootstrap';
import { store } from './Services/Store/Store';
import { Provider } from 'react-redux';
// Error monitoring and reporting
if(process.env.NODE_ENV === 'production') {
  Sentry.init({
    // dsn: process.env.production.local.REACT_APP_SENTRY_URL,
    dsn :'https://o1227796.ingest.sentry.io/api/6373454/security/?sentry_key=4150ddd424ed4502a6afc5ae937851aa',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0.2
  })
}

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);

root.render(
  <React.StrictMode>
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <Container>
        <Provider store={store}>
          <App/>
        </Provider>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
