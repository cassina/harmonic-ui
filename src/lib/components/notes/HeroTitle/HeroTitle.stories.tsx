import type { Meta, StoryObj } from '@storybook/react';
import { HeroTitle } from './HeroTitle';

const meta: Meta = {
    title: 'Notes/HeroTitle',
    component: HeroTitle,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof HeroTitle>;

export default meta;
type Story = StoryObj<typeof HeroTitle>;

export const Default: Story = {
    args: {
        children: 'Default Hero Title',
    },
};

export const CustomTitle: Story = {
    args: {
        children: 'Custom Hero Title',
    },
};
