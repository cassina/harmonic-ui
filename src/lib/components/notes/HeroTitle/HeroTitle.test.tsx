import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HeroTitle } from './HeroTitle';

describe('HeroTitle Component Tests', () => {
    const customTracking = 'tight';
    const defaultTracking = 'wide';

    afterEach(cleanup);

    it('renders without crashing', () => {
        render(<HeroTitle>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        expect(heroTitleElement).toBeDefined();
    });

    it('displays the children content', () => {
        render(<HeroTitle>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        const classNames = heroTitleElement.getAttribute('class');

        expect(classNames)
            .toBe('tracking-wide text-[2rem] lg:text-5xl 2xl:text-6xl font-bold');
    });

    it('applies default tracking style when tracking prop is not provided', () => {
        render(<HeroTitle>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        const classNames = heroTitleElement.getAttribute('class');

        expect(classNames).toContain(`tracking-${defaultTracking} text-[2rem] lg:text-5xl 2xl:text-6xl font-bold`);
    });

    it('applies specific tracking style when tracking prop is provided', () => {
        render(<HeroTitle tracking={customTracking}>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        const classNames = heroTitleElement.getAttribute('class');
        expect(classNames).toContain(`tracking-${customTracking} text-[2rem] lg:text-5xl 2xl:text-6xl font-bold`);
    });

    it('correctly applies otherProps to the component', () => {
        const testId = 'hero-title';
        render(<HeroTitle data-testid={testId} aria-label="hero title">Test Title</HeroTitle>);
        const heroTitleElement = screen.getByTestId(testId);
        expect(heroTitleElement.getAttribute('aria-label')).toBe('hero title');
    });
});
