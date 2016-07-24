import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers/todoApp.js'
import TodoApp from './components/TodoApp.js'

import Test from './tests/'
Test();

render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
