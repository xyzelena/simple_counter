// приложение с верхнего уровня
// компонент <Provider>, который содержит хранилище 
//и прокидывает его вглубь дерева компонентов через контекст


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
// Оборачиваем приложение в Provider и передаем хранилище в него
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);