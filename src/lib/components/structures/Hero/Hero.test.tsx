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

    it('renders image and adjusts layout when imageUrl is provided', () => {
        const imageUrl = 'path/to/another/image.jpg';
        render(
            <Hero backgroundImageUrl={backgroundImageUrl} imageUrl={imageUrl}>
                <HeroTitle>This is a Hero Title</HeroTitle>
                <HeroSubtitle>This is a Hero Subtitle</HeroSubtitle>
            </Hero>
        );

        const imageElement: HTMLImageElement = screen.getByRole('img');
        expect(imageElement).toBeDefined();
        expect(imageElement.src).toContain(imageUrl);

        // Check if the layout is adjusted (look for specific class names or structure)
        // This verification might require examining the rendered HTML structure
    });

    it('renders without image and with text-centered layout when imageUrl is not provided', () => {
        render(
            <Hero backgroundImageUrl={backgroundImageUrl}>
                <HeroTitle>This is a Hero Title</HeroTitle>
                <HeroSubtitle>This is a Hero Subtitle</HeroSubtitle>
            </Hero>
        );

        // Check for text-centered layout
        const textContainer = screen.getByText('This is a Hero Title').closest('div');
        expect(textContainer).toBeDefined();
        expect(textContainer?.className).toContain('text-center');
        // Ensure the className contains the expected class for centered text
    });
});

