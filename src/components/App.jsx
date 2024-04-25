// Теперь самое главное — Toolkit в действии. Здесь мы опираемся на работу хуков.

// Чтобы изменить состояние в хранилище, передаем действие в функцию dispatch()
// Чтобы получить объект dispatch в компоненте, используем функцию useDispatch()
// Чтобы извлечь данные из стора, используем хук useSelector(). 
// Он принимает функцию, в которую все состояние передается через параметр.
// Возвращаемое значение из этой функции станет результатом выполнения useSelector()

import React from 'react';
// Хуки находятся в react-redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment, incrementByAmount } from '../slices/counterSlice.js';

export default () => {
  // Вытаскиваем данные из хранилища
  // Здесь state — это все состояние
  const count = useSelector((state) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
      </div>
    </div>
  );
};


// В компоненте может быть несколько вызовов useSelector, 
// причем каждый вызов создаст подписку на изменение состояния. 
// Срабатывание нескольких подписок одновременно приведет только к одной перерисовке компонента.

// Обратите внимание, что переданная в useSelector функция принимает все состояние целиком.
// Если у нас несколько редьюсеров и слайсов, состояние содержит все состояния этих слайсов. 
// Состояние хранится в объекте, где каждый ключ — 
// это то, что мы указали в reducer при создании стора. В нашем случае это свойство counter