import {NavMobileMenuProps} from "@interfaces";

export const NavMobileMenu = ({isOpen, className, children}: NavMobileMenuProps) => {
    const baseClasses = 'w-full space-y-1 px-2 pb-3 pt-2';
    return(
        <div id="mobile-menu"
             className={`${className} ${baseClasses} ${isOpen ? 'absolute sm:hidden' : 'hidden'}`}>
            { children }
        </div>
    );
};
