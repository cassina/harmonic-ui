import React from 'react';
import { describe, expect, it, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';

import {TextInput} from './TextInput';

describe('<TextInput />', () => {
    afterEach(cleanup);
    const onChangeHandler = vi.fn(() => {});

    it('should render text input by default correctly', () => {
        const { getByRole } = render(<TextInput id="test-text-input" onChange={onChangeHandler} />);
        const input = getByRole('textbox') as HTMLInputElement;

        expect(input).toBeDefined();
        expect(input.type).toBe('text');
        expect(input.id).toBe('test-text-input');
    });

    it('should render text email type correctly', () => {
        const { getByRole } = render(<TextInput type="email"
                                                id="test-text-input"
                                                onChange={onChangeHandler} />);
        const input = getByRole('textbox') as HTMLInputElement;

        expect(input).toBeDefined();
        expect(input.type).toBe('email');
    });

    it('should render text password type correctly', () => {
        const { getByPlaceholderText } = render(
            <TextInput
                type="password"
                id="test-text-input"
                placeholder={'password'}
                onChange={onChangeHandler} />);
        const input = getByPlaceholderText('password') as HTMLInputElement;

        expect(input).toBeDefined();
        expect(input.type).toBe('password');
    });


    it('should reflect the value provided', () => {
        const inputValue = "Test Input Value";
        const { getByRole } = render(<TextInput id="test-text-input"
                                                value={inputValue}
                                                onChange={onChangeHandler} />);
        const input = getByRole('textbox') as HTMLInputElement;

        expect(input.value).toBe(inputValue);
    });

    it('should call the onChange handler when input value is changed', () => {
        const { getByRole } = render(<TextInput id="test-text-input" onChange={onChangeHandler} />);
        const input = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New Value' } });

        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });

    it('should render with a label when provided', () => {
        const labelText = "Test Label Text";
        const { getByText } = render(<TextInput id="test-text-input"
                                                label={labelText}
                                                onChange={onChangeHandler} />);
        const label = getByText(labelText) as HTMLLabelElement;

        expect(label).toBeDefined();
        expect(label.htmlFor).toBe("test-text-input");
    });

    it('should render an input with the expected classes', () => {
        const { getByRole } = render(<TextInput id="test-text-input"
                                                label={'Test'}
                                                className={'custom-class'}
                                                onChange={onChangeHandler} />);

        const input = getByRole('textbox');
        expect(input.className).toBe('custom-class text-primary-950 border rounded-md p-2 w-full');
    });
});
