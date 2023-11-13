import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NavGroup } from './NavGroup';

describe('NavGroup', () => {
    afterEach(cleanup);

    it('renders its children correctly', () => {
        render(
            <NavGroup>
                <div>NavGroup Content</div>
            </NavGroup>
        );
        expect(screen.getByText('NavGroup Content')).toBeDefined();
    });

    it('has the correct base classes applied', () => {
        render(<NavGroup><div>NavGroup Content</div></NavGroup>);
        const navGroup = screen.getByText('NavGroup Content').parentElement?.parentElement;
        expect(navGroup?.className).toContain('mx-auto max-w-7xl px-2 sm:px-6 lg:px-8');
    });

    it('has a child div with flex and items-center classes', () => {
        render(<NavGroup><div>NavGroup Content</div></NavGroup>);
        const flexContainer = screen.getByText('NavGroup Content').parentElement;
        expect(flexContainer?.className).toContain('relative flex h-16 items-center justify-between');
    });
});
