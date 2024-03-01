import { Flex } from '@chakra-ui/react';
import Counter from './counter';
import DifficultySelect, { difficultySelectProps } from './difficulty_select';
import ResetBtn, { resetBtnProps } from './reset_btn';
import { difficultyOptions } from './difficulty_select/const';

interface ScoreBoardProps extends resetBtnProps {
  timeCount: string;
  minesFoundCount: string;
  levelSelected?: string;
  onDifficultyChange: difficultySelectProps['onDifficultyChange'];
}

export default function ScoreBoard({
  minesFoundCount,
  timeCount,
  onReset,
  levelSelected,
  onDifficultyChange,
}: ScoreBoardProps) {
  return (
    <Flex>
      <Counter count={timeCount} />
      <DifficultySelect
        levelSelected={levelSelected}
        options={difficultyOptions}
        onDifficultyChange={onDifficultyChange}
      />
      <ResetBtn onReset={onReset} />
      <Counter count={minesFoundCount} />
    </Flex>
  );
}
