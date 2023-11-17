import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
    const customTracking = 'tight';
    const defaultTracking = 'wide';

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
        expect(title.className).toBe(`tracking-${defaultTracking} text-2xl lg:text-3xl 2xl:text-4xl font-semibold`);
    });

    it('merges custom class names correctly', () => {
        const titleText = 'Test Section Title';
        const customClass = 'custom-class';
        render(<SectionTitle className={customClass}>{titleText}</SectionTitle>);
        const title = screen.getByRole('heading', { name: titleText });
        expect(title.className).toContain(customClass);
    });

    it('applies specific tracking style when tracking prop is provided', () => {
        const titleText = 'Test Section Title';
        render(<SectionTitle tracking={customTracking}>{titleText}</SectionTitle>);
        const title = screen.getByText(titleText);
        const classNames = title.getAttribute('class');

        expect(classNames).toContain(customTracking);
    });
    it('correctly applies otherProps to the component', () => {
        const titleText = 'Test Section Title';
        render(<SectionTitle data-testid={'test-id'} aria-label={'hero-title'}>{titleText}</SectionTitle>);
        const title = screen.getByTestId('test-id');
        const ariaLabel = title.getAttribute('aria-label');

        expect(ariaLabel).toBe('hero-title');
    });
});
