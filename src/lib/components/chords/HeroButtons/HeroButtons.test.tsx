import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import { HeroButtons } from './HeroButtons'; // Adjust the import path as needed
import { describe, expect, it, vi, afterEach } from 'vitest';

describe('HeroButtons Component', () => {
    afterEach(cleanup);

    it('renders both primary and secondary buttons with correct labels', () => {
        render(
            <HeroButtons
                primaryLabel="Primary"
                secondaryLabel="Secondary"
                primaryActionOnClick={() => {}}
                secondaryActionOnClick={() => {}}
            />
        );

        // Query by aria-label attribute
        const primaryButton = screen.getByLabelText('Primary');
        const secondaryButton = screen.getByLabelText('Secondary');

        expect(primaryButton).toBeDefined();
        expect(secondaryButton).toBeDefined();
    });

    it('triggers click events for both buttons', () => {
        const primaryActionMock = vi.fn();
        const secondaryActionMock = vi.fn();

        render(
            <HeroButtons
                primaryLabel="Primary"
                secondaryLabel="Secondary"
                primaryActionOnClick={primaryActionMock}
                secondaryActionOnClick={secondaryActionMock}
            />
        );

        const primaryButton = screen.getByLabelText('Primary');
        const secondaryButton = screen.getByLabelText('Secondary');

        fireEvent.click(primaryButton);
        fireEvent.click(secondaryButton);

        expect(primaryActionMock).toHaveBeenCalledTimes(1);
        expect(secondaryActionMock).toHaveBeenCalledTimes(1);
    });

    it('sets correct aria-label for both buttons', () => {
        render(
            <HeroButtons
                primaryLabel="Primary"
                secondaryLabel="Secondary"
                primaryActionOnClick={() => {}}
                secondaryActionOnClick={() => {}}
            />
        );

        const primaryButton = screen.getByLabelText('Primary');
        const secondaryButton = screen.getByLabelText('Secondary');

        expect(primaryButton).toBeTruthy();
        expect(secondaryButton).toBeTruthy();
    });
});
