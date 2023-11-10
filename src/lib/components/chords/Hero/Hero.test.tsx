import React from 'react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
    afterEach(cleanup);

    it('should render correctly with all props provided', () => {
        render(
            <Hero
                title="Deploy to the cloud with confidence"
                subtitle="Anim aute id magna aliqua ad ad non deserunt sunt."
                primaryActionText="Get started"
                primaryActionOnClick={vi.fn()}
                secondaryActionText="Learn more"
                secondaryActionOnClick={vi.fn()}
                backgroundImageUrl="url/to/image.jpg"
            />
        );

        expect(screen.getByText('Deploy to the cloud with confidence')).toBeDefined();
        expect(screen.getByText('Anim aute id magna aliqua ad ad non deserunt sunt.')).toBeDefined();
        expect(screen.getByText('Get started')).toBeDefined();
        expect(screen.getByText('Learn more')).toBeDefined();
    });

    it('should handle primary action click', () => {
        const primaryActionOnClick = vi.fn();
        render(
            <Hero
                title="Deploy to the cloud with confidence"
                subtitle="Anim aute id magna aliqua ad ad non deserunt sunt."
                primaryActionText="Get started"
                primaryActionOnClick={primaryActionOnClick}
            />
        );

        fireEvent.click(screen.getByText('Get started'));
        expect(primaryActionOnClick).toHaveBeenCalledTimes(1);
    });

    it('should handle secondary action click when provided', () => {
        const secondaryActionOnClick = vi.fn();
        render(
            <Hero
                title="Deploy to the cloud with confidence"
                subtitle="Anim aute id magna aliqua ad ad non deserunt sunt."
                primaryActionText="Get started"
                primaryActionOnClick={vi.fn()}
                secondaryActionText="Learn more"
                secondaryActionOnClick={secondaryActionOnClick}
            />
        );

        fireEvent.click(screen.getByText('Learn more'));
        expect(secondaryActionOnClick).toHaveBeenCalledTimes(1);
    });

    it('should not render the secondary action when text or onClick handler is not provided', () => {
        render(
            <Hero
                title="Deploy to the cloud with confidence"
                subtitle="Anim aute id magna aliqua ad ad non deserunt sunt."
                primaryActionText="Get started"
                primaryActionOnClick={vi.fn()}
            />
        );

        expect(screen.queryByText('Learn more')).toBeNull();
    });

    it('should set background image when backgroundImageUrl is provided', () => {
        const backgroundImageUrl = "url/to/image.jpg";
        render(
            <Hero
                title="Deploy to the cloud with confidence"
                subtitle="Anim aute id magna aliqua ad ad non deserunt sunt."
                primaryActionText="Get started"
                primaryActionOnClick={vi.fn()}
                backgroundImageUrl={backgroundImageUrl}
            />
        );

        const heroSection = screen.getByRole('banner'); // Assuming 'section' has a role of 'banner'
        expect(heroSection.style.backgroundImage).toBe(`url(${backgroundImageUrl})`);
    });


    // Additional tests can be written to check for responsiveness, alt text, accessibility, etc.
});

