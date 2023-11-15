import {describe, it, expect, afterEach, vi} from 'vitest';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { MobileMenuButton } from './MobileMenuButton';

describe('MobileMenuButton', () => {
    afterEach(cleanup);

    it('renders the hamburger icon when menu is not open', () => {
        render(<MobileMenuButton isOpen={false} toggleMobileMenu={() => {}} />);
        const hamburgerIcon = screen.getByLabelText('Close Mobile Menu');
        expect(hamburgerIcon).toBeDefined();
    });

    it('renders the cancel icon when menu is open', () => {
        render(<MobileMenuButton isOpen={true} toggleMobileMenu={() => {}} />);
        const cancelIcon = screen.getByLabelText('Open Mobile Menu');
        expect(cancelIcon).toBeDefined();
    });

    it('calls toggleMobileMenu when button is clicked', () => {
        const toggleMobileMenu = vi.fn();
        render(<MobileMenuButton isOpen={false} toggleMobileMenu={toggleMobileMenu} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(toggleMobileMenu).toHaveBeenCalled();
    });
});
