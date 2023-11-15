import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CardTitle } from './CardTitle';

describe('CardTitle', () => {
    afterEach(cleanup);

    it('renders the title text', () => {
        const titleText = 'Test Card Title';
        render(<CardTitle cardTitle={titleText} />);
        expect(screen.getByText(titleText)).toBeDefined();
    });

    it('applies default styling', () => {
        const titleText = 'Test Card Title';
        render(<CardTitle cardTitle={titleText} />);
        const title = screen.getByText(titleText);
        expect(title.className).toContain('text-lg font-semibold line-clamp-1');
    });

    it('merges custom class names correctly', () => {
        const titleText = 'Test Card Title';
        const customClass = 'custom-class';
        render(<CardTitle cardTitle={titleText} className={customClass} />);
        const title = screen.getByText(titleText);
        expect(title.className).toContain(customClass);
    });
});
