import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


test('renders TodoList without crashing', () => {
  render(<TodoList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add Todo');
  const button = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

