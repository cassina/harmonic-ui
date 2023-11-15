import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
    afterEach(cleanup);

    it('renders the section title text', () => {
        const titleText = 'Test Section Title';
        render(<SectionTitle>{titleText}</SectionTitle>);
        expect(screen.getByText(titleText)).toBeDefined();
    });

    it('applies default styling', () => {
        const titleText = 'Test Section Title';
        render(<SectionTitle>{titleText}</SectionTitle>);
        const title = screen.getByRole('heading', { name: titleText });
        expect(title.className).toContain('text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wide');
    });

    it('merges custom class names correctly', () => {
        const titleText = 'Test Section Title';
        const customClass = 'custom-class';
        render(<SectionTitle className={customClass}>{titleText}</SectionTitle>);
        const title = screen.getByRole('heading', { name: titleText });
        expect(title.className).toContain(customClass);
    });
});
