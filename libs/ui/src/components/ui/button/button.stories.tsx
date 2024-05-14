import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// https://storybook.js.org/docs/8.0/writing-stories

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;
export default meta;

// ================================================================
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me!',
  },
};
export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
  },
};
export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
};
export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};
export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
};
export const Link: Story = {
  args: {
    ...Default.args,
    variant: 'link',
  },
};
