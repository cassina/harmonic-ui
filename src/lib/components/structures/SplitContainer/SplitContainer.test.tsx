import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { SplitContainer } from './SplitContainer';

describe('SplitContainer', () => {
    afterEach(cleanup);

    it('renders left and right children correctly', () => {
        render(
            <SplitContainer
                leftChildren={<div>Left Content</div>}
                rightChildren={<div>Right Content</div>}
            />
        );
        expect(screen.getByText('Left Content')).toBeDefined();
        expect(screen.getByText('Right Content')).toBeDefined();
    });

    it('has correct base styling for container', () => {
        const { container } = render(
            <SplitContainer
                leftChildren={<div>Left Content</div>}
                rightChildren={<div>Right Content</div>}
            />
        );
        const splitContainerDiv = container.firstChild as HTMLElement;
        expect(splitContainerDiv?.className).toContain('container mx-auto p-6 flex flex-wrap justify-between items-start');
    });

    it('renders ContentArea components with correct styling', () => {
        render(
            <SplitContainer
                leftChildren={<div>Left Content</div>}
                rightChildren={<div>Right Content</div>}
            />
        );
        const contentAreas = screen.getAllByText(/Content/).map(node => node.parentElement);
        contentAreas.forEach(contentArea => {
            expect(contentArea?.className).toContain('w-full md:w-1/2 space-y-5 px-5');
        });
    });
});
