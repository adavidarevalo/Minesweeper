import { render, screen } from '@testing-library/react';
import Cell from '.';
import { Coords } from '@/utils/field';

jest.mock('react-lottie');

const coords: Coords = [1, 1];

describe('Cell component check', () => {
  it('Show the button in the dom', () => {
    const props = {
      coords,
      onClick: jest.fn(),
      onContextMenu: jest.fn(),
    };

    render(<Cell children={1} {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
