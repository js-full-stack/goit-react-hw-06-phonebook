Основные концепции: store, state, actions, action creators, reducers
Feature based структура файлов и папок
Создаём и настраиваем хранилище (store)
Готовим экшены (действия, actions) и фабрики
Пишем редюсер
Связываем компоненты и хранилище.
Пакет react-redux.
Компонент Provider
Функция connect(mapStateToProps, mapDispatchToProps)
Redux DevTools
Композиция редюсеров с combineReducers

1. Установить пакеты `npm i redux` и `npm install react-redux`
2. Создать в `src` папку redux, а в ней файлы `store.js` и `action.js`
3. Сделать в `store.js` импорт `import { createStore } from "redux";`
4. Сделать в `index.js` импорт

- `import { Provider } from "react-redux";`
- `import store from "./redux/store";`

5. Обернуть App в Provider и передать store как проп

```
    <Provider store={store}>
        <App />
    </Provider>
```

6. Импортировать в компонент, который нужно отрендерить функцию `connect` из `react-redux`

7. Вместо экспорта компонента сделать экспорт вызова функции connect, и следом сделать еще 1 вызов с компонентом (карирование)

`export default connect()(ComponentX)`

8. Создать в компоненте функцию `makeStateToProps`, которая принимает параметром state, хранящийся в store и возвращает объект со свойствами, которые будут пропсами компонента. Передать эту функцию как аргумент для connect

```
const mapStateToProps = (state) => {
  return {
    a: 5,
    b: 10,
    c: 15,
  };
};

```

`export default connect(mapStateToProps)(ComponentX)`

![Пример]('./src/Img/example-1.jpg')

9. 2-м аргументом для коннект можно передать функцию `mapDispatchToProps` для отправки `actions`

```
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement())
};
};
```

dispatch принимает actions, поэтому их нужно импортировать в компонент

`import * as actions from "../redux/actions";`

`export default connect(mapStateToProps, mapDispatchToProps)(Counter);`
