import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CardAction } from './CardAction';

describe('CardAction', () => {
    afterEach(cleanup);

    it('renders its children correctly', () => {
        render(
            <CardAction>
                <button>Action Button</button>
            </CardAction>
        );
        expect(screen.getByRole('button', { name: 'Action Button' })).toBeDefined();
    });

    it('applies default styling', () => {
        render(<CardAction>Content</CardAction>);
        const cardActionElement = screen.getByText('Content');
        expect(cardActionElement?.className).toContain('px-4 pb-5');
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-action-class';
        render(<CardAction className={customClass}>Content</CardAction>);
        const cardActionElement = screen.getByText('Content');
        expect(cardActionElement?.className).toContain(customClass);
    });
});
