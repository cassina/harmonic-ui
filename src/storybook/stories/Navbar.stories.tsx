import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";

import { Button } from "@components/notes/Button/Button";
import {Hero} from "@components/structures/Hero/Hero";
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {HeroSubtitle} from "@components/notes/HeroSubtitle/HeroSubtitle";
import {HeroButtons} from "@components/chords/HeroButtons/HeroButtons";
import {AppleIcon} from "@components/notes/SocialIcon/SocialIcon";
import {Nav} from "@components/structures/Nav/Nav";
import {NavGroup} from "@components/structures/NavGroup/NavGroup";
import {Logo} from "@components/notes/Logo/Logo";
import {MobileMenuButton} from "@components/chords/MobileMenuButton/MobileMenuButton";
import {NavMobileMenu} from "@components/structures/NavMobileMenu/NavMobileMenu";

const title = '¿Qué vas a automatizar hoy?';
const subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.';
const primaryButtonLabel = 'Contáctanos';
const secondaryButtonLabel = 'Conoce más';
const primaryActionOnClick = () => {};
const secondaryActionOnClick = () => {};

const CTANavbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const logoImageUrl = 'https://cdn.discordapp.com/attachments/1087566247006314698/1172938918061146132/matrix-core-logo-transparent.png?ex=6562237e&is=654fae7e&hm=13ce7cce4b522b318592fe1d631bc0e3bd3d1f5c395390f73b1ba2321561683b&';
    const navbarLinks = [
        {
            label: 'Inicio',
            href: '#'
        },
        {
            label: 'Soluciones',
            href: '#'
        },
        {
            label: 'Quiénes somos'
            , href: '#'
        },
        {
            label: 'Contacto',
            href: '#'
        },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Nav fixed={true}
             className={'bg-white dark:bg-primary-950'}>
            <NavGroup>
                {/* Left Part */}
                <div className="flex flex-1 items-center pl-2 sm:items-stretch sm:justify-start">
                    {/* Logo */}
                    <Logo imageUrl={logoImageUrl}/>

                    {/* Navbar Links */}
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/*  NavbarLinks  */}
                            {navbarLinks.map((linkItem, index) => {
                                return(
                                    <a href={linkItem.href}
                                       key={index}
                                       className="text-gray-400 hover:text-gray-600 px-3 py-2">
                                        {linkItem.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Part */}
                <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* NavbarItems */}
                    <Button label={'Contacto'}
                            className={'md:block mr-3'}/>

                    {/* Mobile menu button */}
                    <MobileMenuButton isOpen={isMobileMenuOpen}
                                      toggleMobileMenu={toggleMobileMenu} />
                </div>
            </NavGroup>

            {/* Mobile menu, show/hide based on menu state */}
            <NavMobileMenu isOpen={isMobileMenuOpen}
                           className={'bg-complementary-50'}>
                {/*  NavbarLinks */}
                {navbarLinks.map((linkItem, index) => {
                    return(
                        <a href={linkItem.href}
                           key={`${index}-mobile`}
                           className="hover:bg-complementary-200 text-primary-950 block rounded-md px-3 py-2"
                           aria-current="page">
                            {linkItem.label}
                        </a>
                    );
                })}
            </NavMobileMenu>
        </Nav>
    );
};

export default {
    title: 'Compositions/LandingPage',
    component: CTANavbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'], // Note: 'tags' is not a standard Storybook configuration. If this is custom logic, keep it; otherwise, consider removing it.
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        backgroundImageUrl: { control: 'text' },
    },
} as Meta<typeof CTANavbar>;
export const Default: StoryObj<typeof CTANavbar> = {
    render: () => {
        return (
            <>
                <CTANavbar />

                <Hero isMainBanner={true} className={'mt-16'}
                >
                    <HeroTitle>{title}</HeroTitle>
                    <HeroSubtitle>{subtitle}</HeroSubtitle>

                    <HeroButtons >
                        <Button
                            onClick={primaryActionOnClick}
                            label={primaryButtonLabel} />

                        <Button
                            onClick={secondaryActionOnClick}
                            buttonColor="primary"
                            buttonStyle="outline"
                            label={secondaryButtonLabel} />
                    </HeroButtons>
                </Hero>
            </>

        );
    }
};
