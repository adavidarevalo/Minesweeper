import { render, screen } from '@testing-library/react';
import Counter from '.';

describe('Counter Check', () => {
  it('Should render element with default state', () => {
    render(<Counter />);
    expect(screen.getByText(0)).toBeInTheDocument();
  });
  it('Should render with count value', () => {
    const count = "23";
    render(<Counter count={count} />);
    expect(screen.getByText(count)).toBeInTheDocument();
  });
});
