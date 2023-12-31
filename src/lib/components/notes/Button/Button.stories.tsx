import type { Meta, StoryObj } from '@storybook/react';
import {MouseEvent} from "react";

import {Button} from './Button';
import {GithubIcon} from '@components/notes/SocialIcon/SocialIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Notes/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    buttonColor: 'primary',
    buttonStyle: 'filled',
    label: 'Signup',
    onClick: (e: MouseEvent) => console.log(`The event timestamp: ${e.timeStamp}`),
  },
};

export const With_Social_Icon: Story = {
  args: {
    buttonColor: 'primary',
    buttonStyle: 'filled',
    label: 'Signup',
    icon: <GithubIcon/>,
    onClick: (e: MouseEvent) => console.log(`The event timestamp: ${e.timeStamp}`),
  },
};
//
// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };
//
// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
//
// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };
