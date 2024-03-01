import { Meta, StoryObj } from '@storybook/react';
import Legend from '.';

export default {
  title: 'Top/Legend',
  component: Legend,
} as Meta;

type Story = StoryObj<typeof Legend>

export const Primary: Story = {
  args: {
    feature: 'Flag:',
      firstCmd: 'alt',
      secondCmd: 'drag',

  },
};
