import ScoreBoard from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { difficultyOptions } from './difficulty_select/const';

const minesFoundCount = '23';
const timeCount = '3';
const levelSelected = difficultyOptions[0];

describe('Score Board check', () => {
  it('Validate Render', () => {
    render(
      <ScoreBoard
        minesFoundCount={minesFoundCount}
        timeCount={timeCount}
        levelSelected={levelSelected}
        onDifficultyChange={() => null}
        onReset={() => null}
      />,
    );

    expect(screen.getByText(minesFoundCount)).toBeInTheDocument();
    expect(screen.getByText(timeCount)).toBeInTheDocument();
    expect(screen.getByText(levelSelected)).toBeInTheDocument();
  });

  it('Validate the functionality', () => {
    const fn = jest.fn();
    const resetFn = jest.fn();

    render(
      <ScoreBoard
        minesFoundCount={minesFoundCount}
        timeCount={timeCount}
        levelSelected={levelSelected}
        onDifficultyChange={fn}
        onReset={resetFn}
      />,
    );

    fireEvent.click(screen.getByText('🙂'));

    expect(resetFn).toHaveBeenCalled();

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: difficultyOptions[1] },
    });

    expect(fn).toHaveBeenCalled();
  });
});
