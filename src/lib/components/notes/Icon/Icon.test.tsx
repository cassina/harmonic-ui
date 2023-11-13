import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
    afterEach(cleanup);

    it('renders an SVG with the correct attributes', () => {
        const pathData = 'M5 5l14 14';
        const { container } = render(
            <Icon
                ariaLabel={'test-icon'}
                pathData={pathData}
                className="test-class"
                fill="red"
                stroke="blue"
                strokeWidth="2"
            />
        );
        const svgElement = container.querySelector('svg');

        expect(svgElement).toBeDefined();
        expect(svgElement?.getAttribute('class')).toBe('test-class');
        expect(svgElement?.getAttribute('viewBox')).toBe('0 0 24 24');
        expect(svgElement?.getAttribute('fill')).toBe('red');
        expect(svgElement?.getAttribute('stroke')).toBe('blue');
        expect(svgElement?.getAttribute('stroke-width')).toBe('2');
        expect(svgElement?.getAttribute('aria-label')).toBe('test-icon');
        expect(svgElement?.querySelector('path')?.getAttribute('d')).toBe(pathData);
    });
});
