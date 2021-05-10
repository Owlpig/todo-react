import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoCard from './TodoCard';

const mockTodo = {title: 'Buy milk', desc: 'Buy some milk', done: false}

const updateTodo =  (index, isDone) => {
  const todo = mockTodo
  todo.done = isDone
}

describe('The TodoCard', () => {
  test('should render card div', () => {
    render(<TodoCard todo={mockTodo}/>);
    const cardDiv = screen.getByTestId('todo-card');
    expect(cardDiv).toBeInTheDocument();
  });
  test('should add delete button on done card', async () => {
    render(<TodoCard updateTodo={updateTodo} todo={mockTodo}/>);
    const cardDiv = screen.getByTestId('todo-card');
    await userEvent.click(cardDiv)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
  });
})

