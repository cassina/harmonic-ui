import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {Checkbox} from './Checkbox';
import {describe, expect, it, afterEach, vi} from 'vitest';
import {getCheckboxStyle} from "@components/notes/Checkbox/Checkbox.style";

describe('<Checkbox />', () => {
    afterEach(cleanup);
    const onChangeHandler = vi.fn(() => {});


    it('should render correctly', () => {
        const { getByRole } = render(<Checkbox checked={false} onChange={onChangeHandler}/>);
        const checkbox = getByRole('checkbox') as HTMLInputElement;

        expect(checkbox).toBeDefined();
        expect(checkbox.checked).toBe(false);
        expect(checkbox.type).toBe('checkbox');
        expect(checkbox.className).toEqual(getCheckboxStyle('primary'));
    });

    it('should render in an unchecked state by default', () => {
        const { getByRole } = render(<Checkbox checked={false} onChange={onChangeHandler}/>);
        const checkbox = getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(false);
    });

    it('should render in render a checked state', () => {
        const { getByRole } = render(<Checkbox checked={true} onChange={onChangeHandler}/>);
        const checkbox = getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it('should render call the onChange handler', () => {
        const { getByRole } = render(<Checkbox checked={false} onChange={onChangeHandler}/>);
        fireEvent.click(getByRole('checkbox'));

        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });
});
