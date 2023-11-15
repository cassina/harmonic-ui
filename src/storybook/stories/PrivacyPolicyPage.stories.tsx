import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";

import { Button } from "@components/notes/Button/Button";
import {Hero} from "@components/structures/Hero/Hero";
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {Nav} from "@components/structures/Nav/Nav";
import {NavGroup} from "@components/structures/NavGroup/NavGroup";
import {Logo} from "@components/notes/Logo/Logo";
import {MobileMenuButton} from "@components/chords/MobileMenuButton/MobileMenuButton";
import {NavMobileMenu} from "@components/structures/NavMobileMenu/NavMobileMenu";

/**
 * This is an Example of how you can build your Landing Page Composition using notes, chords and structures.
 * This page has a Call to Action Navbar that will render some links and a mobile menu.
 * It has a Hero banner as well with a CTA and a secondary CTA.
 * It showcases 3 features about this product or service
 * It has a footer with different sections
 */
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
        // {
        //     label: 'Quiénes somos'
        //     , href: '#'
        // },
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
             className={'bg-white'}>
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
    title: 'Compositions/Privacy Page',
    component: CTANavbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'], // Note: 'tags' is not a standard Storybook configuration. If this is custom logic, keep it; otherwise, consider removing it.
} as Meta<typeof CTANavbar>;
export const Example: StoryObj<typeof CTANavbar> = {
    render: () => {
        return (
            <>

                <CTANavbar />

                <main className={'mt-16 pt-5'}>
                    {/* Blurred thing*/}
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                         aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                             style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                        </div>
                    </div>

                    <Hero>
                        <HeroTitle>Privacidad y condiciones de uso</HeroTitle>

                        <div className="max-w-2xl mx-auto p-5">
                            <h3 className="text-2xl font-bold mb-4">Resumen de la Política de Privacidad de Chatbot</h3>
                            <p className="mb-2">
                                A partir del 4 de enero de 2021, la Política de Privacidad de Chatbot describe cómo procesan la información para proporcionar servicios.
                            </p>
                            <p className="mb-2">
                                Chatbot recopila información para operar y proporcionar servicios, mejorar, entender, personalizar, dar soporte y comercializar. Los datos recogidos dependen de cómo se utilicen los servicios, y cierta información es esencial para entregar estos servicios.
                            </p>
                            <p className="mb-2">
                                Las actualizaciones incluyen más detalles sobre el manejo de datos, una mejor comunicación con las empresas y una conectividad más fácil dentro de las empresas de Meta.
                            </p>
                            <p className="mb-2">
                                La información proporcionada por los usuarios es crucial para la creación de la cuenta y el uso de los servicios. Los mensajes se almacenan en los dispositivos de los usuarios y se eliminan de los servidores una vez entregados, con excepciones para mensajes no entregados y reenvío de medios.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto p-5">
                            <h3 className="text-2xl font-bold mb-4">Resumen de la Política de Privacidad de Chatbot</h3>
                            <p className="mb-2">
                                A partir del 4 de enero de 2021, la Política de Privacidad de Chatbot describe cómo procesan la información para proporcionar servicios.
                            </p>
                            <p className="mb-2">
                                Chatbot recopila información para operar y proporcionar servicios, mejorar, entender, personalizar, dar soporte y comercializar. Los datos recogidos dependen de cómo se utilicen los servicios, y cierta información es esencial para entregar estos servicios.
                            </p>
                            <p className="mb-2">
                                Las actualizaciones incluyen más detalles sobre el manejo de datos, una mejor comunicación con las empresas y una conectividad más fácil dentro de las empresas de Meta.
                            </p>
                            <p className="mb-2">
                                La información proporcionada por los usuarios es crucial para la creación de la cuenta y el uso de los servicios. Los mensajes se almacenan en los dispositivos de los usuarios y se eliminan de los servidores una vez entregados, con excepciones para mensajes no entregados y reenvío de medios.
                            </p>
                        </div>
                    </Hero>
                </main>

                {/* Footer */}
                <footer className={'p-10 pt-14 md:px-40 md:pt-40 md:pb-14 text-complementary-300'}>
                    <div className={'border-t pt-10'}>
                        <p>Soluciones</p>
                        <p>Contacto</p>
                        <p>Privacidad</p>
                        <p>Términos y condiciones</p>
                    </div>
                    <div className={'pt-5'}>
                        <p>&copy; 2023 Chatbot, Inc.</p>
                    </div>
                </footer>
            </>

        );
    }
};
