import TodoCard from './TodoCard';

const TodoList = ({ todoState, updateTodo, deleteTodo }) => (
    <section data-testid='todo-list' className='todo-list'>
      {todoState.map((todo, index) => <TodoCard
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        key={index}
        idx={index}
        todo={todo}/>)}
    </section>
);

export default TodoList;
