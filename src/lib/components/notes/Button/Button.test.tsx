import React from "react";
import {describe, expect, it, vi, afterEach} from 'vitest';
import {render, fireEvent, cleanup} from "@testing-library/react";
import {
    COMMON_CLASSES,
    OUTLINE_CLASSES,
    PRIMARY_CLASSES,
    COMPLEMENTARY_CLASSES,
} from "./Button.styles";
import Button from './Button';

describe('Button', () => {
    afterEach(cleanup);

    it('should render correctly with the given label', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" />);
        expect(getByText('Click Me')).toBeDefined();
    });

    it('should render with default "primary filled" styles when no role or style is provided', () => {
        const { getByText } = render(<Button label="Click Me" />);
        const appliedClasses = getByText('Click Me').className || '';
        const expectedClasses = `${PRIMARY_CLASSES.filled} ${COMMON_CLASSES}`;
        expect(appliedClasses).toMatch(new RegExp(`\\b${expectedClasses.replace(/ /g, '\\b|\\b')}\\b`));
    });

    it('should render with type "button" by default', () => {
        const { getByRole } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" />);
        expect(getByRole('button').getAttribute('type')).toBe('button');
    });

    it('should render with the correct type attribute when type prop is provided', () => {
        const { getByRole } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" type="submit" />);
        expect(getByRole('button').getAttribute('type')).toBe('submit');
    });

    it('should apply additional className when provided', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" className="extra-class" />);
        expect(getByText('Click Me').classList.contains('extra-class')).toBe(true);
    });

    it('should have undefined onClick by default', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" />);
        expect(getByText('Click Me').onclick).toBe(null);
    });

    it('should call onClick handler when clicked', () => {
        const handleClick = vi.fn(() => {});
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" onClick={handleClick} />);
        fireEvent.click(getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1); // this will throw an error if the function has not been called, failing the test
    });

    it('should render correct styles for filled primary button', () => {
        const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Click Me" />);
        const appliedClasses = getByText('Click Me').className || '';
        const expectedClasses = `${PRIMARY_CLASSES.filled} ${COMMON_CLASSES}`;
        expect(appliedClasses).toMatch(new RegExp(`\\b${expectedClasses.replace(/ /g, '\\b|\\b')}\\b`));
    });

});