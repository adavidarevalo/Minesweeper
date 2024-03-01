import { Meta, StoryObj } from '@storybook/react';
import DifficultySelect from '.';
import { difficultyOptions } from './const';

export default {
  title: 'ScoreBoard/DifficultySelect',
  component: DifficultySelect,
} as Meta;

type Story = StoryObj<typeof DifficultySelect>;

export const Primary: Story = {
  args: {
    options: difficultyOptions,
  },
};
