import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HeroSubtitle } from './HeroSubtitle';

describe('HeroSubtitle Component Tests', () => {
    const customTracking = 'tight';
    const defaultTracking = 'normal';

    afterEach(cleanup);

    it('renders without crashing', () => {
        render(<HeroSubtitle>Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByText('Test Subtitle');
        expect(subtitleElement).toBeDefined();
    });

    it('displays the children content', () => {
        render(<HeroSubtitle>Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByText('Test Subtitle');
        expect(subtitleElement.textContent).toBe('Test Subtitle');
    });

    it('applies default tracking style when tracking prop is not provided', () => {
        render(<HeroSubtitle>Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByText('Test Subtitle');
        const classNames = subtitleElement.getAttribute('class');
        const expectedClassNames = `tracking-${defaultTracking} text-lg`; // Assuming 'normal' is the default tracking

        expect(classNames).toBe(expectedClassNames);
    });

    it('applies specific tracking style when tracking prop is provided', () => {
        render(<HeroSubtitle tracking={customTracking}>Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByText('Test Subtitle');
        const classNames = subtitleElement.getAttribute('class');
        const expectedClassNames = `tracking-${customTracking} text-lg`;
        expect(classNames).toBe(expectedClassNames);
    });

    it('correctly applies otherProps to the component', () => {
        const testId = 'hero-subtitle';
        render(<HeroSubtitle data-testid={testId} aria-label="hero subtitle">Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByTestId(testId);
        expect(subtitleElement).toBeDefined();
        expect(subtitleElement.getAttribute('aria-label')).toBe('hero subtitle');
    });
});
