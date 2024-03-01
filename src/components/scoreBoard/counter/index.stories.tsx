import { Meta, StoryObj } from '@storybook/react';
import Counter from '.';

export default {
  title: 'ScoreBoard/Counter',
  component: Counter,
} as Meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  args: {
    count: "0",
  },
};
