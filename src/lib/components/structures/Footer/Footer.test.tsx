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
        expect(footerElement?.className).toContain('p-10 pt-14 md:px-40 md:pt-40 md:pb-14');
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-footer-class';
        render(<Footer className={customClass}>Footer Content</Footer>);
        const footerElement = screen.getByText('Footer Content');
        expect(footerElement?.className).toContain(customClass);
    });
});
