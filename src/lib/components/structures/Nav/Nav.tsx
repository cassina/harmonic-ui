'use client';

import React from 'react';
import {NavProps} from "@interfaces";
import {getNavFixedStyle} from "@components/structures/Nav/Nav.style";
import {mergeClasses} from "@utils/index";

export const Nav = (
    {
        children,
        className,
        fixed = false,
    }: NavProps) => {
    const navBaseStyle = fixed ?  getNavFixedStyle() : '';
    const navStyle = mergeClasses(className, navBaseStyle);

    return (
        <nav className={navStyle}>
            { children }
        </nav>
    );
};
