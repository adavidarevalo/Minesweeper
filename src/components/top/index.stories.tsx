import { Meta, StoryObj } from '@storybook/react';
import Legend from './index';

export default {
  title: 'Top/Container',
  component: Legend,
} as Meta;

type Story = StoryObj<typeof Legend>;

export const Primary: Story = {
  args: {
    headerTitle: "test",
    feature: "Flag:",
    firstCmd: 'alt',
    secondCmd: 'drag',
  },
};
