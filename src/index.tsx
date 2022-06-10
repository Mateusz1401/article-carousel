import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Loader from 'components/loader';
import reportWebVitals from 'reportWebVitals';
import Router from 'routes';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
