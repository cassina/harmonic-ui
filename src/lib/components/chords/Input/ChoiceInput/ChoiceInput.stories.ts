import type { Meta, StoryObj } from '@storybook/react';

import ChoiceInput from './ChoiceInput';
import { CheckboxColor } from "@components/notes/Checkbox/Checkbox.type";

const CHECKBOX_COLORS: {[key: string]: CheckboxColor} = {
    PRIMARY: 'primary',
    COMPLEMENTARY: 'complementary',
    WARNING: 'warning',
    ERROR: 'error'
};

const meta = {
    title: 'Chords/ChoiceInput',
    component: ChoiceInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['checkbox', 'radio'],
            control: { type: 'select' }
        },
        id: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
        checked: {
            control: 'boolean'
        },
        checkboxColor: {
            options: CHECKBOX_COLORS,
            control: { type: 'select' }
        },
        value: {
            control: 'text',
        },
        onChange: {
            action: 'changed',
        },
    },
} satisfies Meta<typeof ChoiceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
    args: {
        type: 'checkbox',
        id: 'checkbox-id',
        label: 'I like pizza',
    },
};

export const RadioToDo: Story = {
    args: {
        type: 'radio',
        id: 'radio-id',
        label: 'TODO',
    },
};