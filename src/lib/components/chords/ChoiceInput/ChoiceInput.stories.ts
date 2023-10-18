import type { Meta, StoryObj } from '@storybook/react';

import {ChoiceInput} from './ChoiceInput';

const meta = {
    title: 'Chords/ChoiceInput',
    component: ChoiceInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ChoiceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type_Checkbox: Story = {
    args: {
        id: 'checkbox-id',
        label: 'I like pizza',
        type: 'checkbox',
    },
};

export const RadioToDo: Story = {
    args: {
        id: 'radio-id',
        label: 'To do Implementation',
        type: 'radio',
    },
};