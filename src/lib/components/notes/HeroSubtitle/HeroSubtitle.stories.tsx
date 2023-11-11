import type { Meta, StoryObj } from '@storybook/react';
import { HeroSubtitle } from './HeroSubtitle';

const meta: Meta = {
    title: 'Notes/HeroSubtitle',
    component: HeroSubtitle,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof HeroSubtitle>;

export default meta;
type Story = StoryObj<typeof HeroSubtitle>;

export const Default: Story = {
    args: {
        children: 'Default Hero Subtitle',
    },
};

export const CustomSubtitle: Story = {
    args: {
        children: 'Custom Hero Subtitle',
    },
};
