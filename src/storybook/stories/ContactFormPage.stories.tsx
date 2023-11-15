import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";

import {Nav} from "@components/structures/Nav/Nav";
import {NavGroup} from "@components/structures/NavGroup/NavGroup";
import {Logo} from "@components/notes/Logo/Logo";
import {MobileMenuButton} from "@components/chords/MobileMenuButton/MobileMenuButton";
import {NavMobileMenu} from "@components/structures/NavMobileMenu/NavMobileMenu";
import {SectionTitle} from "@components/notes/SectionTitle/SectionTitle";
import {SplitContainer} from "@components/structures/SplitContainer/SplitContainer";
import {Button} from "@components/notes/Button/Button";
import {TextInput} from "@components/chords/TextInput/TextInput";

interface ContactFormState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const ContactSection = () => {
    const [formState, setFormState] = useState<ContactFormState>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log('FOMR: ', name, value);
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle the form submission, like sending the data to a server
        console.log(formState);
    };

    const leftPart = () => {
        return(
            <>
                <SectionTitle>Get in touch</SectionTitle>
                <p className="text-complementary-600">
                    Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer
                    elementum id sem. Arcu sed malesuada et magna.
                </p>
                <p className="text-complementary-600">
                    <span className="block font-semibold text-black">Address</span>
                    545 Mavis Island Chicago, IL 99191
                </p>
                <p className="text-complementary-600">
                    <span className="block font-semibold text-black">Phone</span>
                    +1 (555) 234-5678
                </p>
                <p>
                    <span className="block font-semibold text-black">Email</span>
                    hello@example.com
                </p>
            </>
        );
    };

    const rightPart = () => {
        return(
            <>
                <form className="mt-6 md:mt-0" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            {/*<input*/}
                            {/*    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"*/}
                            {/*    type="text"*/}
                            {/*    placeholder="First name"*/}
                            {/*    name="firstName"*/}
                            {/*    value={formState.firstName}*/}
                            {/*    onChange={handleChange}*/}
                            {/*/>*/}
                            <TextInput id={'first-name'}
                                       label={'Nombre'}
                                       placeholder={'Mario'}
                                       onChange={handleChange}

                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <TextInput id={'last-name'}
                                       label={'Apellido'}
                                       placeholder={'Moreno'}
                                       onChange={handleChange}
                                       value={formState.lastName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <TextInput id={'email'}
                                       label={'Correo electrónico'}
                                       placeholder={'mario@moreno.com'}
                                       onChange={handleChange}
                                       value={formState.email}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <TextInput id={'phone-number'}
                                       type={'tel'}
                                       label={'Teléfono'}
                                       placeholder={'815254126850'}
                                       onChange={handleChange}
                                       value={formState.phoneNumber}
                            />
                            heey: { formState.phoneNumber}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <TextInput id={'message'}
                                       type={'textarea'}
                                       label={'Mensaje'}
                                       placeholder={'¿Qué necesitas automatizar?'}
                                       className={'h-48'}
                                       onChange={handleChange}
                                       value={formState.message}
                            />
                        </div>
                    </div>
                    <Button type={'submit'} label={'Enviar'} />
                </form>
            </>
        );
    };

    return (
        <SplitContainer
            leftChildren={leftPart()}
            rightChildren={rightPart()} />
    );
};

/**
 *
 */
const ContactFromNavbar = () => {
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
                    {/*<Button label={'Contacto'}*/}
                    {/*        className={'md:block mr-3'}/>*/}

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
    title: 'Compositions/Contact Form',
    component: ContactFromNavbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} as Meta<typeof ContactFromNavbar>;
export const Example: StoryObj<typeof ContactFromNavbar> = {
    render: () => {
        return (
            <>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                     aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                         style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>

                <ContactFromNavbar />

                <div className={'mt-16 pt-5'}>
                    <ContactSection />
                </div>


                {/* Footer */}
                <div className={'p-10 pt-14 md:px-40 md:pt-40 md:pb-14 text-complementary-300'}>
                    <div className={'border-t pt-10'}>
                        <p>Soluciones</p>
                        <p>Contacto</p>
                        <p>Privacidad</p>
                        <p>Términos y condiciones</p>
                    </div>
                    <div className={'pt-5'}>
                        <p>&copy 2023 Chatbot, Inc.</p>
                    </div>
                </div>
            </>

        );
    }
};
