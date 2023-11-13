import React from "react";

import {MobileMenuButtonProps} from "@interfaces";
import {SVGPaths} from "@config/svg-paths";

import {Icon} from "@components/notes/Icon/Icon";

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

                {/* Icon when menu is closed */}
                <Icon
                    ariaLabel={'Open Mobile Menu'}
                    className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathData={SVGPaths.hamburger}
                />

                {/* Icon when menu is closed */}
                <Icon
                    ariaLabel={'Close Mobile Menu'}
                    className={`h-6 w-6 ${!isOpen ? 'hidden' : 'block'}`}
                    fill="currentColor"
                    pathData={SVGPaths.cancel}
                />
            </button>
        </div>
    );
};
