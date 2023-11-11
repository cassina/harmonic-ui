import React from 'react';
import { describe, expect, it, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { Hero } from './Hero';
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {HeroSubtitle} from "@components/notes/HeroSubtitle/HeroSubtitle";

describe('Hero', () => {
    const backgroundImageUrl = 'path/to/image.jpg';

    afterEach(cleanup);

    it('should render correctly with all props provided', () => {
        render(
            <Hero>
                <HeroTitle >This is a Hero Title</HeroTitle>
                <HeroSubtitle >This is a Hero Subtitle</HeroSubtitle>
            </Hero>
        );

        expect(screen.getByText('This is a Hero Title')).toBeDefined();
        expect(screen.getByText('This is a Hero Subtitle')).toBeDefined();
    });

    it('should set background image when backgroundImageUrl is provided', () => {
        const backgroundImageUrl = "url/to/image.jpg";
        render(
            <Hero
                backgroundImageUrl="url/to/image.jpg">
                <HeroTitle >{'This is a Hero Title'}</HeroTitle>
                <HeroSubtitle >{'This is a Hero Subtitle'}</HeroSubtitle>
            </Hero>
        );

        const heroSection = screen.getByRole('banner'); // Assuming 'section' has a role of 'banner'
        expect(heroSection.style.backgroundImage).toBe(`url(${backgroundImageUrl})`);
    });

    it('applies banner role when isMainBanner is true', () => {
        render(<Hero backgroundImageUrl={backgroundImageUrl} isMainBanner={true}><div>Content</div></Hero>);
        const bannerElement = screen.queryByRole('banner');
        expect(bannerElement).toBeDefined();
    });

    it('does not apply a specific role when isMainBanner is false', () => {
        render(<Hero backgroundImageUrl={backgroundImageUrl} isMainBanner={false}><div>Content</div></Hero>);
        const bannerElement = screen.queryByRole('banner');
        expect(bannerElement).toBeNull();
    });

    it('applies correct background styles', () => {
        render(<Hero backgroundImageUrl={backgroundImageUrl}><div>Content</div></Hero>);
        const hero = screen.getByRole('banner');
        expect(hero.style.backgroundImage).toBe(`url(${backgroundImageUrl})`);
        expect(hero.style.backgroundRepeat).toBe('no-repeat');
        expect(hero.style.backgroundSize).toBe('cover');
    });

    it('renders children correctly', () => {
        render(<Hero backgroundImageUrl={backgroundImageUrl}><div data-testid="child">Child</div></Hero>);
        const childElement = screen.getByTestId('child');
        expect(childElement).toBeTruthy();
    });
});

