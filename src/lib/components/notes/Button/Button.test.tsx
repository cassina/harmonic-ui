import React from "react";
import { describe, expect, it, vi, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from "@testing-library/react";
import {ButtonColor, ButtonStyle} from "@types";
import {getButtonStyle} from "@components/notes/Button/Button.style";
import Button from './Button';

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
        const { getByRole } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" className="extra-class" />);
        expect(getByRole('button').classList.contains('extra-class')).toBe(true);
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

    it('should render correct styles for each buttonColor and buttonStyle combination', () => {
        const buttonColors: ButtonColor[] = ['primary', 'complementary', 'warning', 'error'];
        const buttonStyles: ButtonStyle[] = ['filled', 'tonal', 'outline'];

        buttonColors.forEach((color: ButtonColor) => {
            buttonStyles.forEach((style: ButtonStyle) => {
                const currentLabel = `${color}-${style}-test`;
                const { getByText } = render(<Button buttonColor={color} buttonStyle={style} label={currentLabel} />);

                // Get the parent node of the label text (i.e., the button element)
                const buttonElement = getByText(currentLabel).parentNode as HTMLElement;
                const appliedClasses = buttonElement.className;

                expect(appliedClasses).toContain(getButtonStyle(color, style));
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

    it('should render icon to the left of label when icon and iconX="left" are provided', () => {
        const mockIcon = <svg data-testid="mock-icon"></svg>;
        const { getByText, getByTestId } = render(<Button label="Test" icon={mockIcon} iconX="left" />);
        const icon = getByTestId('mock-icon');
        const labelSpan = getByText('Test').closest('span');
        expect(icon).toBeDefined();
        expect(labelSpan).toBeDefined();
        expect(icon.nextSibling).toBe(labelSpan);
    });

    it('should render icon to the right of label when icon and iconX="right" are provided', () => {
        const mockIcon = <svg data-testid="mock-icon"></svg>;
        const { getByText, getByTestId } = render(<Button label="Test" icon={mockIcon} iconX="right" />);
        const icon = getByTestId('mock-icon');
        const labelSpan = getByText('Test');
        expect(icon).toBeDefined();
        expect(labelSpan).toBeDefined();
        expect(labelSpan?.nextSibling).toBe(icon);
    });

    it('should not render an icon when it is not provided', () => {
        const { queryByTestId } = render(<Button label="Test" />);
        expect(queryByTestId('mock-icon')).toBeNull();
    });

    it('should forward additional props to the button element', () => {
        const { getByRole } = render(<Button label="Test" data-test="test-prop" />);
        expect(getByRole('button').getAttribute('data-test')).toBe('test-prop');
    });

});