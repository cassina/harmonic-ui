import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Label from './Label';
import { describe, expect, it, afterEach } from 'vitest';

describe('<Label />', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        const { getByText } = render(<Label htmlFor="test-id" text="Test Label" />);
        const labelElement = getByText("Test Label") as HTMLLabelElement;

        expect(labelElement).toBeDefined();
        expect(labelElement.tagName).toBe('LABEL');
        expect(labelElement.htmlFor).toEqual('test-id');
    });
});
