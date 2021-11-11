import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
 
const App = () => {
  (...)
 
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id != = id));
    },
    [todos],
  );
 
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};
 
export default App;