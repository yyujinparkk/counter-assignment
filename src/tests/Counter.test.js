// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter'; // Update the path as necessary


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterHeader = screen.getByText(/counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' }); // increment first to avoid negative count, assuming that's not allowed
  fireEvent.click(incrementButton); // count is now 1
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton); // decrement back to 0
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});
