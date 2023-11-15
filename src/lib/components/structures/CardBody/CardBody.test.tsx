import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CardBody } from './CardBody';

describe('CardBody', () => {
    afterEach(cleanup);

    it('renders its children correctly', () => {
        render(
            <CardBody>
                <p>Card body content</p>
            </CardBody>
        );
        expect(screen.getByText('Card body content')).toBeDefined();
    });

    it('applies default styling', () => {
        render(<CardBody>Content</CardBody>);
        const cardBodyElement = screen.getByText('Content');
        expect(cardBodyElement?.className).toContain('px-4 flex-1');
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-body-class';
        render(<CardBody className={customClass}>Content</CardBody>);
        const cardBodyElement = screen.getByText('Content');
        expect(cardBodyElement?.className).toContain(customClass);
    });
});
