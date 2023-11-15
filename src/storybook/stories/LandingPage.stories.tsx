import React, {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";

import { Button } from "@components/notes/Button/Button";
import {Hero} from "@components/structures/Hero/Hero";
import {HeroTitle} from "@components/notes/HeroTitle/HeroTitle";
import {HeroSubtitle} from "@components/notes/HeroSubtitle/HeroSubtitle";
import {HeroButtons} from "@components/structures/HeroButtons/HeroButtons";
import {Nav} from "@components/structures/Nav/Nav";
import {NavGroup} from "@components/structures/NavGroup/NavGroup";
import {Logo} from "@components/notes/Logo/Logo";
import {MobileMenuButton} from "@components/chords/MobileMenuButton/MobileMenuButton";
import {NavMobileMenu} from "@components/structures/NavMobileMenu/NavMobileMenu";
import {SectionTitle} from "@components/notes/SectionTitle/SectionTitle";
import { TfiAgenda, TfiArrowRight } from "react-icons/tfi";
import {Card} from "@components/structures/Card/Card";
import {CardTitle} from "@components/notes/CardTitle/CardTitle";
import {CardHeader} from "@components/structures/CardHeader/CardHeader";
import {CardBody} from "@components/structures/CardBody/CardBody";
import {CardAction} from "@components/structures/CardAction/CardAction";
import {Footer} from "@components/structures/Footer/Footer";

const title = '¿Qué vas a automatizar hoy?';
const subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.';
const featuresTitle = 'Llevamos la tecnología a cada rincón de tu negocio.';
const primaryButtonLabel = 'Contáctanos';
const secondaryButtonLabel = 'Conoce más';
const primaryActionOnClick = () => {};
const secondaryActionOnClick = () => {};

interface FeatureProps {
    name: string;
    description: string;
    imageUrl: string;
}
const feature = (featureName: FeatureProps) => (
    <Card imageUrl={featureName.imageUrl}
          imageAlt={featureName.name}
          className={'shadow-sm border rounded-md'}>
        <CardHeader>
            <TfiAgenda />
            <CardTitle cardTitle={`${featureName.name} especial de las forams`} />
        </CardHeader>

        <CardBody>
            <p className={'line-clamp-5 tracking-wide'}>
                {featureName.description}
            </p>
        </CardBody>
        <CardAction>
            <Button label={'Conoce más'}
                    buttonStyle={'outline'}
                    icon={<TfiArrowRight/>}
                    iconX={'right'}/>
        </CardAction>
    </Card>
);

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
    title: 'Compositions/LandingPage',
    component: CTANavbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} as Meta<typeof CTANavbar>;
export const Example: StoryObj<typeof CTANavbar> = {
    render: () => {
        const features = [
            {
                name: 'Orden',
                description: 'Descubre la claridad en el caos. Con nuestra herramienta, transforma desafíos complejos en soluciones ordenadas y comprensibles. Experimenta cómo el análisis detallado de datos históricos y actuales te lleva a decisiones más informadas y efectivas. Ordena tu mundo digital y ve más allá de la superficie de tus problemas de negocio.',
                imageUrl: 'https://cdn.discordapp.com/attachments/1087566247006314698/1173762812686913677/5618d853-c17f-4a2f-b3d6-9391216cb413.webp?ex=656522ce&is=6552adce&hm=ce4d6abb46bbf3a8c82071adb8409939caef9f053424ea8bf1c2fbb37cd85d13&',
            },
            {
                name: 'Eficiencia',
                description: 'Optimiza tu rendimiento. Nuestra plataforma te permite desentrañar y abordar problemas complejos con una eficiencia sin precedentes. ',
                imageUrl: 'https://cdn.discordapp.com/attachments/1087566247006314698/1173762813190217738/d7fe15f1-f81e-41cb-a6c6-e557a77e2c75.webp?ex=656522ce&is=6552adce&hm=6bfcd8fcb52bfc09abade8793efaf3c6b12390812f9e23a1da0315521d4dfd22&',
            },
            {
                name: 'Especialización',
                description: 'Eleva tu experiencia. Enfócate en lo que mejor sabes hacer y deja que nuestra solución maneje la complejidad. Nuestra tecnología especializada te guía a través de problemas intrincados, brindándote una visión clara y soluciones a medida. Con análisis comparativos de situaciones pasadas y presentes, te empoderamos para que te especialices en la excelencia y la innovación en tu campo.',
                imageUrl: 'https://cdn.discordapp.com/attachments/1087566247006314698/1173762813978738730/f2ffafba-a7e3-46b6-b170-8e921552e89d.webp?ex=656522ce&is=6552adce&hm=efdc896d2a62cbf5d660ab396fe2955f559bc40d8c431db049da8412ae42f391&',
            }
        ];
        return (
            <>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                     aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                         style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>
                <div className={'space-y-10'}>
                    <CTANavbar />

                    <Hero isMainBanner={true} className={'mt-16 pt-10'}>
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

                    <Hero isMainBanner={false}>
                        <SectionTitle>{featuresTitle}</SectionTitle>
                    </Hero>

                    <div className={`space-y-10 gap-5 justify-evenly px-10 max-w-6xl mx-auto md:flex md:space-y-0`}>
                        {features.map((featureObj: {name: string, description: string, imageUrl: string}) => {
                            return(
                                feature(featureObj)
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <Footer>
                    <div className={'text-center space-y-5'}>
                        <div className={'border-t pt-10 text-complementary-300'}>
                            <p>&copy; 2023 Chatbot, Inc.</p>
                        </div>
                        <div className={'pt-5 space-x-5'}>
                            <a href="#">Privacidad</a>
                            <span className={'text-complementary-300'}> | </span>
                            <a href="#">Términos</a>
                        </div>
                    </div>
                </Footer>
            </>

        );
    }
};
