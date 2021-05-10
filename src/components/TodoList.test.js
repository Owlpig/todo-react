import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const mockList = [{title: 'Buy milk', desc: 'Buy some milk', done: false}, {title: 'Feed cats', desc: 'Feed the cats', done: false}, {title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ac turpis ut placerat. Maecenas ac ligula ac est posuere venenatis in id mi. Sed vel nulla at nisi condimentum tristique. Integer purus augue, blandit ac mauris ut, iaculis tempor nisl. Maecenas luctus lacinia velit eget lobortis. Maecenas vehicula nisl eu pretium posuere. Nullam diam nisi, feugiat ut arcu non, mattis tempus ligula.', done: false}]

describe('The TodoList', () => {
  test('should render list container', () => {
    render(<TodoList todoState={mockList}/>);
    const listContainer = screen.getByTestId('todo-list');
    expect(listContainer).toBeInTheDocument();
  });
  test('should render all items in list', () => {
    render(<TodoList todoState={mockList}/>);
    const cardList = screen.getAllByTestId('todo-card');
    expect(cardList).toHaveLength(3);
  });
})
