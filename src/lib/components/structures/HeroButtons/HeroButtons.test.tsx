import {render, screen, cleanup} from '@testing-library/react';
import { HeroButtons } from './HeroButtons'; // Adjust the import path as needed
import { describe, expect, it, afterEach } from 'vitest';

describe('HeroButtons Component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        render(
            <HeroButtons>
                <div>Test Child</div>
            </HeroButtons>
        );
        const childElement = screen.getByText('Test Child');
        expect(childElement).toBeDefined();
    });

    it('has correct class for alignment', () => {
        const { container } = render(
            <HeroButtons>
                <div>Test Child</div>
                <div>Test Child</div>
            </HeroButtons>
        );
        expect(container.firstChild).toBeDefined();
        const rootElement = container.firstChild as Element;
        expect(rootElement.className).toBe('flex gap-4 justify-center');
    });
});
