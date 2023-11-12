import React, { useState } from 'react';
import {NavbarProps} from "@interfaces";
import {Logo} from "@components/notes/Logo/Logo";
import {MobileMenuButton} from "@components/notes/MobileMenuButton/MobileMenuButton";

const Navbar = (
    {
        logoImageUrl,
        navbarLinks,
        children,
    }: NavbarProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={'shadow-md'}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button */}
                    <MobileMenuButton isMobileMenuOpen={isMobileMenuOpen}
                                      toggleMobileMenu={toggleMobileMenu} />


                    {/* Left Part */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        {
                            logoImageUrl &&
                            <Logo imageUrl={logoImageUrl}/>
                        }

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
                        {children}
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div
                className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/*  NavbarLinks */}
                    {navbarLinks.map((linkItem, index) => {
                        return(
                            <a href={linkItem.href}
                               key={`${index}-mobile`}
                               className="text-gray-400 hover:bg-complementary-600 hover:text-white block rounded-md px-3 py-2"
                               aria-current="page">
                                {linkItem.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
