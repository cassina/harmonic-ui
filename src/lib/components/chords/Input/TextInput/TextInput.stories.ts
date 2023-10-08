import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';

const meta = {
    title: 'Chords/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        id: 'text-id',
        label: 'Name',
        placeholder: 'Clara Schumann'
    },
};

export const Email: Story = {
    args: {
        type: 'email',
        id: 'email-id',
        label: 'Email',
        placeholder: 'clara@harmonic-ui.com'
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        id: 'password-id',
        label: 'Password',
    },
};