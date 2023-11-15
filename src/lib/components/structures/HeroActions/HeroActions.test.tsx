import {render, screen, cleanup} from '@testing-library/react';
import { HeroActions } from './HeroActions'; // Adjust the import path as needed
import { describe, expect, it, afterEach } from 'vitest';

describe('HeroButtons Component', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        render(
            <HeroActions>
                <div>Test Child</div>
            </HeroActions>
        );
        const childElement = screen.getByText('Test Child');
        expect(childElement).toBeDefined();
    });

    it('has correct class for alignment', () => {
        const { container } = render(
            <HeroActions>
                <div>Test Child</div>
                <div>Test Child</div>
            </HeroActions>
        );
        expect(container.firstChild).toBeDefined();
        const rootElement = container.firstChild as Element;
        expect(rootElement.className).toBe('flex gap-4 justify-center');
    });
});
