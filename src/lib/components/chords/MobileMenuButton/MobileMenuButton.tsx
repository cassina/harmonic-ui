import React from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";

import {MobileMenuButtonProps} from "@interfaces";


export const MobileMenuButton = ({ isOpen, toggleMobileMenu }: MobileMenuButtonProps) => {
    return (
        <div className="sm:hidden flex items-center inset-y-0">
            <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMobileMenu}
            >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {
                    isOpen ?
                        <TfiClose />
                        :
                        <TfiMenu />
                }
            </button>
        </div>
    );
};
