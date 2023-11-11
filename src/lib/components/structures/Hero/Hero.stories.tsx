import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {HeroSubtitle} from "@components/notes/HeroSubtitle/HeroSubtitle";
import {HeroButtons} from "@components/chords/HeroButtons/HeroButtons";

const title = '¿Qué vas a automatizar hoy?';
const subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.';
const primaryButtonLabel = 'Contáctanos';
const secondaryButtonLabel = 'Conoce más';
const primaryActionOnClick = () => {};
const secondaryActionOnClick = () => {};

export default {
    title: 'Structures/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    description: 'This is a Hero component with a title, subtitle, and buttons.',
    tags: ['autodocs'], // Note: 'tags' is not a standard Storybook configuration. If this is custom logic, keep it; otherwise, consider removing it.
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        backgroundImageUrl: { control: 'text' },
    },
} as Meta<typeof Hero>;

export const Default: StoryObj<typeof Hero> = {
    render: () => {
        return (
            <Hero
                isMainBanner={true}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>

                <HeroButtons primaryActionOnClick={primaryActionOnClick}
                             primaryLabel={primaryButtonLabel}
                             secondaryActionOnClick={secondaryActionOnClick}
                             secondaryLabel={secondaryButtonLabel} />
            </Hero>
        );
    },
};
export const WithCustomBackground: StoryObj<typeof Hero> = {
    render: () => {
        return(
            <Hero
                isMainBanner={true}
                backgroundImageUrl={'https://www.hdwallpapers.in/thumbs/2021/white_blue_rounds_bubbles_light_blue_background_4k_5k_hd_light_blue-t2.jpg'}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
                <HeroButtons primaryActionOnClick={primaryActionOnClick}
                             primaryLabel={primaryButtonLabel}
                             secondaryActionOnClick={secondaryActionOnClick}
                             secondaryLabel={secondaryButtonLabel} />
            </Hero>
        );
    }
};
export const WithoutButtons: StoryObj<typeof Hero> = {
    args: {
        isMainBanner: true,
    },
    render: () => {
        return(
            <Hero
                isMainBanner={true}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
            </Hero>
        );
    }
};
