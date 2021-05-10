import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('The TodoForm', () => {
  test('should render a form', () => {
    render(<TodoForm />);
    const form = screen.getByRole('group');
    expect(form).toBeInTheDocument();
  });
})