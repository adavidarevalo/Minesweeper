import { Meta, StoryObj } from '@storybook/react';
import Grid from "./index"
import { MockFieldData } from './grid.mock';

export default {
  title: 'Grid/Table',
  component: Grid,
} as Meta;

type Story = StoryObj<typeof Grid>;

export const GridDefault: Story = {
  args: {
    children: MockFieldData,
    maxWidth: "300px"
  },
};
