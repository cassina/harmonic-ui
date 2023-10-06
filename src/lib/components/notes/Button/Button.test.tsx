import React from "react";
import { describe, expect, it, vi, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from './Button';
import {ButtonColor, ButtonStyle} from "@components/notes/Button/Button.type";

describe('Button', () => {
    afterEach(cleanup);

    it('should render correctly with the given label', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" />);
        expect(getByText('Test Label')).toBeDefined();
    });

    it('should render with type "button" by default', () => {
        const { getByRole } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" />);
        expect(getByRole('button').getAttribute('type')).toBe('button');
    });

    it('should render with the correct type attribute when type prop is provided', () => {
        const { getByRole } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" type="submit" />);
        expect(getByRole('button').getAttribute('type')).toBe('submit');
    });

    it('should apply additional className when provided', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" className="extra-class" />);
        expect(getByText('Test Label').classList.contains('extra-class')).toBe(true);
    });

    it('should have undefined onClick by default', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" />);
        expect(getByText('Test Label').onclick).toBe(null);
    });

    it('should call onClick handler when clicked', () => {
        const handleClick = vi.fn(() => {});
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" onClick={handleClick} />);
        fireEvent.click(getByText('Test Label'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Additional tests based on the analysis
    it('should render correct styles for each buttonColor and buttonStyle combination', () => {
        const buttonColors: ButtonColor[] = ['primary', 'complementary', 'warning', 'error'];
        const buttonStyles: ButtonStyle[] = ['filled', 'tonal', 'outline'];

        buttonColors.forEach((color: ButtonColor, i: number) => {
            buttonStyles.forEach((style: ButtonStyle, j: number) => {
                const currentLabel = `${i}-${j}-test`
                const { getByText } = render(<Button buttonColor={color} buttonStyle={style} label={currentLabel} />);
                const appliedClasses = getByText(currentLabel).className || '';
                // Example: for primary and filled, the classes might be "bg-primary-600 text-white hover:bg-primary-700"

                expect(appliedClasses.includes(`${color} ${style}`)).toBe(true);
            });
        });
    });

    it('should handle the disabled property correctly', () => {
        // Initially render the button without the disabled prop
        const { getByRole, rerender, container } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" />);
        expect((container as HTMLButtonElement).disabled).toBe(undefined);

        // Re-render the button with the disabled property
        rerender(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" disabled={true}/>);
        const button = getByRole('button') as HTMLButtonElement;

        // Now, the button should be disabled
        expect((button as HTMLButtonElement).disabled).toBe(true);
    });
});