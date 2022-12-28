import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoute } from './routes'
import './index.css'

import { store } from './utilities/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
)
