'use client';

import React from 'react';
import {NavProps} from "@interfaces";
import {getNavFixedStyle} from "@components/structures/Nav/Nav.style";
import {mergePriorityClasses} from "@utils/index";

export const Nav = (
    {
        children,
        className,
        fixed = false,
    }: NavProps) => {
    const navBaseStyle = fixed ?  getNavFixedStyle() : '';
    const navStyle = mergePriorityClasses(className, navBaseStyle);

    return (
        <nav className={navStyle}>
            { children }
        </nav>
    );
};
