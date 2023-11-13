import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Nav } from './Nav';
import {getNavFixedStyle} from "@components/structures/Nav/Nav.style";

describe('Nav', () => {
    afterEach(cleanup);

    it('renders children correctly', () => {
        const { getByText } = render(
            <Nav>
                <div>Test Child</div>
            </Nav>
        );
        expect(getByText('Test Child')).toBeDefined();
    });

    it('applies base style correctly when not fixed', () => {
        render(<Nav>Content</Nav>);
        const container = screen.getByText('Content')
        const navFixedStyle = getNavFixedStyle();
        expect(container.className.includes(navFixedStyle)).toBe(false);
    });

    it('applies fixed style correctly when fixed', () => {
        render(<Nav fixed={true}>Content</Nav>);
        const nav = screen.getByText('Content');
        const navFixedStyle = getNavFixedStyle();
        expect(nav?.className.includes(navFixedStyle)).toBe(true);
    });

    it('merges custom class names correctly', () => {
        const customClass = 'custom-class';
        render(<Nav className={customClass}>Content</Nav>);
        const nav = screen.getByText('Content');
        expect(nav?.className.includes(customClass)).toBe(true);
    });
});
