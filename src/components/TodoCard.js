import { useEffect, useState } from 'react';

const TodoCard = ({
  idx, todo, updateTodo, deleteTodo,
}) => {
  const [cardClass, setCardClass] = useState(todo.done ? 'todo-card todo-card--done' : 'todo-card');
  const toggle = (event, done) => {
    event.preventDefault();
    if (event.target.className === 'delete-todo') {
      deleteTodo(idx);
    } else if (!todo.done) {
      setCardClass('todo-card todo-card--done');
      let isDone = done;
      isDone = true;
      updateTodo(idx, isDone);
    } else {
      setCardClass('todo-card');
      let isDone = done;
      isDone = false;
      updateTodo(idx, isDone);
    }
  };

  useEffect(() => {});

  return (
    <div onClick={e => toggle(e, todo.done)} data-testid='todo-card' className={cardClass}>
      <h1 className="todo-title">{todo.title}</h1>
      <p className="todo-desc">{todo.desc}</p>
      {todo.done && <button className="delete-todo" type="button">Delete</button>}
    </div>
  );
};

export default TodoCard;
