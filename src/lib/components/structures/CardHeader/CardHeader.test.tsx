import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CardHeader } from './CardHeader';

describe('CardHeader', () => {
    afterEach(cleanup);

    it('renders its children correctly', () => {
        render(
            <CardHeader>
                <h1>Card Header Content</h1>
            </CardHeader>
        );
        expect(screen.getByRole('heading', { name: 'Card Header Content' })).toBeDefined();
    });

    it('applies default styling', () => {
        render(<CardHeader>Content</CardHeader>);
        const cardHeaderElement = screen.getByText('Content');
        expect(cardHeaderElement?.className).toContain('px-4 flex gap-2 items-center');
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-header-class';
        render(<CardHeader className={customClass}>Content</CardHeader>);
        const cardHeaderElement = screen.getByText('Content');
        expect(cardHeaderElement?.className).toContain(customClass);
    });
});
