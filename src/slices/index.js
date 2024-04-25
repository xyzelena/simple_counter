// В файле index.js мы будем инициализировать хранилище и объединять все редьюсеры.
// Сами редьюсеры разбиваются по отдельным файлам — слайсам или срезам.
// Каждый слайс отвечает за определенную сущность в приложении.

// Например, в приложении со списком товаров и покупателей можно выделить два слайса:
// один для товаров, другой для покупателей.

// Здесь мы вызываем функцию configureStore() и передаем в нее объект со свойством reducer.
// А вот уже в reducer мы указываем объект с нашими редьюсерами.
// В нашем примере есть единственный редьюсер counterReducer,
// который мы импортируем по умолчанию из counterSlice.js.

// Если бы у нас было несколько слайсов, можно было бы указать их под разными ключами.

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    // редьюесер с ключем counter
    counter: counterReducer,
    // tasks: tasksReducer,
  },
});


// Мидлвары подключаются через свойство middleware.
// В это свойство мы записываем функцию, которая в свою очередь принимает другую функцию getDefaultMiddleware(). 
// Вызвав ее, мы получаем список текущих мидлвар. 
// К этим мидлварам добавляем наши мидлвары и возвращаем новый список.

// const logger = (store) => (next) => (action) => {
//   // ...
// };

// const api = (store) => (next) => (action) => {
//   // ...
// };

// export const store = configureStore({
//   reducer: {
//     // ...
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat([logger, api]),
// })
