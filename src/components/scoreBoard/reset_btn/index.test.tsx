import { render, screen, fireEvent } from '@testing-library/react';
import ResetBtn from '.';
import { FC } from 'react';

const ResetWithDummyHandlerOnReset: FC = () => <ResetBtn onReset={() => null} />;

describe('Rest button check', () => {
  it('Should render elements with default state', () => {
    render(<ResetBtn onReset={() => null} />);

    expect(screen.getByText('🙂')).toBeInTheDocument();
  });
  it('onReset handler should be called', () => {
    const onReset = jest.fn();

    render(<ResetBtn onReset={onReset} />);

    fireEvent.click(screen.getByText('🙂'));

    expect(onReset).toHaveBeenCalled();
  });
  it('Should change state when onMouseDown and onMouseUp event happened', () => {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByText('🙂'));

    expect(screen.getByText('😞')).toBeInTheDocument();

    fireEvent.mouseUp(screen.getByText('😞'));

    expect(screen.getByText('🙂')).toBeInTheDocument();
  });
});
