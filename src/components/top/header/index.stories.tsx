import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

export default {
  title: 'Top/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    headerTitle: 'Minesweeper',
  },
};
