import { render, screen, fireEvent } from '@testing-library/react';
import DifficultySelect from '.';
import { difficultyOptions } from './const';

describe('Difficulty Select', () => {
  it('Should render element with default state', () => {
    render(<DifficultySelect options={difficultyOptions} onDifficultyChange={() => null}/>);
    expect(screen.getByText(difficultyOptions[0])).toBeInTheDocument();
  });
  it("Validate the value", () => {
    render(
      <DifficultySelect
        options={difficultyOptions}
        levelSelected={difficultyOptions[1]}
        onDifficultyChange={() => null}
      />,
    );
    expect(screen.getByText(difficultyOptions[1])).toBeInTheDocument();
  })
  it('Validate the onDifficultyChange called', () => {
    const fn = jest.fn()
    render(
      <DifficultySelect
        options={difficultyOptions}
        levelSelected={difficultyOptions[0]}
        onDifficultyChange={fn}
      />,
    );

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: difficultyOptions[1] },
      });


    expect(fn).toHaveBeenCalled();
  });


});
