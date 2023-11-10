import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

const meta: Meta = {
    title: 'Chords/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        primaryActionText: { control: 'text' },
        primaryActionOnClick: { action: 'clicked' },
        secondaryActionText: { control: 'text' },
        secondaryActionOnClick: { action: 'clicked' },
        backgroundImageUrl: { control: 'text' },
    },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
    args: {
        title: 'What will you automate today?',
        // title: 'Deploy to the cloud with confidence',
        subtitle: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
        primaryActionText: 'Get started',
        primaryActionOnClick: () => {},
        secondaryActionText: 'Learn more',
        secondaryActionOnClick: () => {},
    },
};

export const WithCustomBackground: Story = {
    args: {
        ...Default.args,
        backgroundImageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
    },
};
