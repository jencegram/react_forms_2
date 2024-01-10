import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo without crashing', () => {
  render(<Todo task="Test Task" />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Todo task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});

test('calls removeTodo on button click', () => {
  const mockRemoveTodo = jest.fn();
  render(<Todo task="Test Task" removeTodo={mockRemoveTodo} id={1} />);
  const button = screen.getByText('X');
  fireEvent.click(button);
  expect(mockRemoveTodo).toHaveBeenCalledWith(1);
});
