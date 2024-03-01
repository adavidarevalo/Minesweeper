import { Meta, StoryObj } from '@storybook/react';
import ScoreBoard from '.';

export default {
  title: 'scoreBoard/Container',
  component: ScoreBoard,
} as Meta;

type Story = StoryObj<typeof ScoreBoard>;

export const Primary: Story = {
  args: {
    minesFoundCount: '2',
    timeCount: '2',
    onReset: () => null,
    onDifficultyChange: () => null,
    levelSelected: 'Beginner',
  },
};
