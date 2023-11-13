import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NavMobileMenu } from './NavMobileMenu';

describe('NavMobileMenu', () => {
    afterEach(cleanup);

    it('renders children when menu is open', () => {
        render(
            <NavMobileMenu isOpen={true} className="custom-class">
                <div>Menu Content</div>
            </NavMobileMenu>
        );
        expect(screen.getByText('Menu Content')).toBeDefined();
    });

    it('is visible when isOpen is true', () => {
        render(
            <NavMobileMenu isOpen={true}
                           className="custom-class">
                <div>Menu Content</div>
            </NavMobileMenu>
        );
        const menu = screen.getByText('Menu Content').parentElement;
        expect(menu?.className.includes('absolute')).toBe(true);
        expect(menu?.className.includes('sm:hidden')).toBe(true);
    });
    //
    it('is hidden when isOpen is false', () => {
        render(
            <NavMobileMenu isOpen={false} className="custom-class">
                <div>Menu Content</div>
            </NavMobileMenu>
        );
        const menu = screen.getByText('Menu Content').parentElement;
        expect(menu?.className.includes('hidden')).toBe(true);
        expect(menu?.className.includes('absolute sm:hidden')).toBe(false);
    });

    it('applies custom classes correctly', () => {
        const customClass = 'custom-class';
        render(
            <NavMobileMenu isOpen={true} className={customClass}>
                <div>Menu Content</div>
            </NavMobileMenu>
        );
        const menu = screen.getByText('Menu Content').parentElement;
        expect(menu?.className.includes(customClass)).toBe(true);
    });
});
