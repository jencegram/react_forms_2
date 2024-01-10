import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm without crashing', () => {
  render(<NewTodoForm />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('uses input to add todo', () => {
  const mockAddTodo = jest.fn();
  render(<NewTodoForm addTodo={mockAddTodo} />);
  const input = screen.getByPlaceholderText('Add Todo');
  const button = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);
  expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
});
