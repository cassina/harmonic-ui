import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {HeroSubtitle} from "@components/notes/HeroSubtitle/HeroSubtitle";
import {HeroActions} from "@components/structures/HeroActions/HeroActions";
import {Button} from "@components/notes/Button/Button";

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

                <HeroActions >
                    <Button
                        onClick={primaryActionOnClick}
                        label={primaryButtonLabel} />

                    <Button
                        onClick={secondaryActionOnClick}
                        buttonColor="primary"
                        buttonStyle="outline"
                        label={secondaryButtonLabel} />
                </HeroActions>
            </Hero>
        );
    },
};
export const WithCustomBackground: StoryObj<typeof Hero> = {
    render: () => {
        return(
            <Hero
                isMainBanner={true}
                backgroundImageUrl={'https://cdn.discordapp.com/attachments/1087566247006314698/1172720228392767498/image_1.png?ex=656157d2&is=654ee2d2&hm=f907c6750ae095fe88727c3baa538dd8cc48e491c05cb1fb405a926910317feb&'}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
                <HeroActions>
                    <Button
                        onClick={primaryActionOnClick}
                        label={primaryButtonLabel} />

                    <Button
                        onClick={secondaryActionOnClick}
                        buttonColor="primary"
                        buttonStyle="outline"
                        label={secondaryButtonLabel} />
                </HeroActions>
            </Hero>
        );
    }
};
export const WithoutButtons: StoryObj<typeof Hero> = {
    render: () => {
        return(
            <Hero>
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
            </Hero>
        );
    }
};

export const WithImage: StoryObj<typeof Hero> = {
    render: () => {
        return(
            <Hero
                imageUrl={'https://cdn.discordapp.com/attachments/1087566247006314698/1172756250010861629/cassina_A_screenshot_of_a_chat_message_web_application_it_shoul_7537c935-2a5a-461c-89af-6cce5bb25e14.png?ex=6561795e&is=654f045e&hm=3ca6a3f959214369862c569a53d7e6e35d73036d79a5c24bcf5f01ee66c18046&'}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
                <HeroActions buttonAlignment={'left'}>
                    <Button
                    onClick={primaryActionOnClick}
                    label={primaryButtonLabel} />

                    <Button
                    onClick={secondaryActionOnClick}
                    buttonColor="primary"
                    buttonStyle="outline"
                    label={secondaryButtonLabel} />
                </HeroActions>
            </Hero>
        );
    }
};

export const WithImageAndCustomBackground: StoryObj<typeof Hero> = {
    render: () => {
        return(
            <Hero
                backgroundImageUrl={'https://cdn.discordapp.com/attachments/1087566247006314698/1172720228392767498/image_1.png?ex=656157d2&is=654ee2d2&hm=f907c6750ae095fe88727c3baa538dd8cc48e491c05cb1fb405a926910317feb&'}
                imageUrl={'https://cdn.discordapp.com/attachments/1087566247006314698/1172737603968184349/cassina_A_screenshot_of_a_chat_messsage_web_application_similar_c1d868df-ca3e-4332-b1c7-892566bccf72.png?ex=65616801&is=654ef301&hm=85203af0f686272dddb6a01ffd6405b87180aec9b31e09bf8fef65cd296d49cb&'}
            >
                <HeroTitle>{title}</HeroTitle>
                <HeroSubtitle>{subtitle}</HeroSubtitle>
                <HeroActions buttonAlignment={'left'}/>
            </Hero>
        );
    }
};
