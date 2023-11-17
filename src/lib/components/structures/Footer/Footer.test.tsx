import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    afterEach(cleanup);

    it('renders its children correctly', () => {
        render(
            <Footer>
                <p>Footer Content</p>
            </Footer>
        );
        expect(screen.getByText('Footer Content')).toBeDefined();
    });

    it('applies default styling', () => {
        render(<Footer>Footer Content</Footer>);
        const footerElement = screen.getByText('Footer Content');
        expect(footerElement?.className).toContain('p-10 pt-14 max-w-3xl md:pt-32 md:pb-14 mx-auto');
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-footer-class';
        render(<Footer className={customClass}>Footer Content</Footer>);
        const footerElement = screen.getByText('Footer Content');
        expect(footerElement?.className).toContain(customClass);
    });
});
