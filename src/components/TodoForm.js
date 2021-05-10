import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState({ title: '', desc: '' });

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value.title, value.desc);
    setValue({ title: '', desc: '' });
  };

  const handleChange = e => {
    const input = e.target.value;
    const { name } = e.target;

    if (name === 'title') {
      setValue({ title: input, desc: value.desc });
    } else {
      setValue({ title: value.title, desc: input });
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className='todo-form'>
       <fieldset className="todo-form__fieldset">
        <legend>Register New ToDo</legend>
        <label htmlFor="title-input">Title</label><br></br>
        <input
          required
          id="title-input"
          name="title"
          type="text"
          value={value.title}
          onChange={e => handleChange(e)}/><br></br>
        <label htmlFor="desc-input">Description</label><br></br>
        <input
          required
          id="desc-input"
          name="description"
          type="text"
          value={value.desc}
          onChange={e => handleChange(e)}/><br></br><br></br>
        <button id="form-submit" type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default TodoForm;
