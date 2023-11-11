import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HeroSubtitle } from './HeroSubtitle';
import {getHeroSubtitleStyle} from "@components/notes/HeroSubtitle/HeroSubtitle.style";

describe('HeroSubtitle Component Tests', () => {
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

    it('has correct class names for styling', () => {
        render(<HeroSubtitle>Test Subtitle</HeroSubtitle>);
        const subtitleElement = screen.getByText('Test Subtitle');
        const classNames = subtitleElement.getAttribute('class');
        const expectedClassNames = getHeroSubtitleStyle();
        expect(classNames).toContain(expectedClassNames);
    });
});
