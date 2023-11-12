import {PropsWithChildren} from "react";

interface NavbarLink {
    label: string;
    href: string;
}

export interface NavbarProps extends PropsWithChildren{
    logoImageUrl: string;
    navbarLinks: NavbarLink[];
}
