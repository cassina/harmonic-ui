import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ChoiceInput from './ChoiceInput';
import { describe, expect, it, afterEach, vi } from 'vitest';
import {shapes} from "@components/notes/SVG/SVG.config";

describe('<ChoiceInput />', () => {
    afterEach(cleanup);
    const onChangeHandler = vi.fn(() => {});

    it('should render correctly with a checkbox type by default and SVG', () => {
        const { getByRole, container } = render(<ChoiceInput id="test-choice-input" onChange={onChangeHandler} />);

        // Checking for Checkbox
        const checkbox = getByRole('checkbox') as HTMLInputElement;
        expect(checkbox).toBeDefined();
        expect(checkbox.checked).toBe(false);

        // Checking for SVG
        const svg = container.querySelector('svg');
        expect(svg).toBeDefined();
    });

    it('should render checkbox in a checked state when provided', () => {
        const { getByRole } = render(<ChoiceInput id="test-choice-input" checked={true} onChange={onChangeHandler} />);
        const checkbox = getByRole('checkbox') as HTMLInputElement;

        expect(checkbox.checked).toBe(true);
    });

    it('should call the onChange handler when checkbox is clicked', () => {
        const { getByRole } = render(<ChoiceInput id="test-choice-input" onChange={onChangeHandler} />);
        fireEvent.click(getByRole('checkbox'));

        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });

    it('should render with a label when provided', () => {
        const labelText = "Test Label Choice";
        const { getByText } = render(<ChoiceInput id="test-choice-input" label={labelText} onChange={onChangeHandler} />);
        const label = getByText(labelText) as HTMLLabelElement;

        expect(label).toBeDefined();
        expect(label.htmlFor).toBe("test-choice-input");
    });

    it('should render SVG with the correct shape', () => {
        const { container } = render(<ChoiceInput id="test-choice-input" shape="heart" onChange={onChangeHandler} />);
        const svg = container.querySelector('svg');
        const path = svg?.querySelector('path');

        expect(path?.getAttribute('d')).toContain(shapes.heart)
    });

    it('should render a radio input when type is radio', () => {
        const { getByRole } = render(<ChoiceInput id="test-text-input" type="radio" onChange={onChangeHandler} />);
        const input = getByRole('radio') as HTMLInputElement;

        expect(input).toBeDefined();
        expect(input.type).toBe('radio');
    });

    // TODO Radio Implementation and Tests
});
