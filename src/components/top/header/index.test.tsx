import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Check', () => {
  it('Validate the default headerTitle', () => {
    render(<Header />);
    expect(screen.getByText('Minesweeper')).toBeInTheDocument();
  });
  it('Validate the headerTitle prop', () => {
    const heading = "Test"
    render(<Header headerTitle={heading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
  });
});
