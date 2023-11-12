import React from "react";
import {Meta, StoryObj} from "@storybook/react";

import Navbar from "@components/progressions/Navbar/Navbar";
import { Button } from "@components/notes/Button/Button";

export default {
    title: 'Progressions/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'], // Note: 'tags' is not a standard Storybook configuration. If this is custom logic, keep it; otherwise, consider removing it.
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        backgroundImageUrl: { control: 'text' },
    },
} as Meta<typeof Navbar>;

const rightElements = () => (<Button label={'Contacto'} className={'md:block mr-3'}/>);
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
const logoImageUrl = 'https://cdn.discordapp.com/attachments/1087566247006314698/1172938918061146132/matrix-core-logo-transparent.png?ex=6562237e&is=654fae7e&hm=13ce7cce4b522b318592fe1d631bc0e3bd3d1f5c395390f73b1ba2321561683b&';

export const Default: StoryObj<typeof Navbar> = {
    render: () => {
        return (
            <Navbar
                    logoImageUrl={logoImageUrl}
                    navbarLinks={navbarLinks}>
                {rightElements()}
            </Navbar>

        );
    }
};
