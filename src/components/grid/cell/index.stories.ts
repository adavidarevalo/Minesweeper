import { Meta, StoryObj } from '@storybook/react';
import Cell from '.';

export default {
  title: 'Grid/Cell',
  component: Cell,
} as Meta;

type Story = StoryObj<typeof Cell>;

export const CellDefault: Story = {
  args: {
    children: 1,
  },
};

export const CellWithBomb: Story = {
  args: {
    children: 9,
  },
};

export const CellWithEmpty: Story = {
  args: {
    children: 0,
  },
};

export const CellWithFlag: Story = {
  args: {
    children: 11,
  },
};
export const CellWithWeakFlag: Story = {
  args: {
    children: 12,
  },
};
