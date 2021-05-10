import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todoState, setTodoState] = useState(localStorage.state
    ? JSON.parse(localStorage.state)
    : []);

  localStorage.state = JSON.stringify(todoState);

  const addTodo = (title, desc) => {
    const newTodo = {
      title,
      desc,
      done: false,
    };

    setTodoState(prevState => [...prevState, newTodo]);
  };

  const updateTodo = (index, isDone) => {
    const todo = todoState[index];
    todo.done = isDone;
    setTodoState(todoState);
  };

  const deleteTodo = idx => {
    const updatedArray = todoState.filter((todo, index) => index !== idx);
    setTodoState(updatedArray);
  };

  useEffect(() => {});

  return (
    <main className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todoState={todoState} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </main>
  );
};

export default App;
