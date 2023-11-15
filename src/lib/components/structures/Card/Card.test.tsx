import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
    afterEach(cleanup);

    it('renders with correct classes', () => {
        render(<Card className="test-class">Card Content</Card>);
        const cardElement = screen.getByText('Card Content');
        expect(cardElement).toBeDefined();
        expect(cardElement?.className).toContain('max-w-xs flex flex-col space-y-8');
        expect(cardElement?.className).toContain('test-class');
    });

    it('renders children correctly', () => {
        render(<Card>Card Content</Card>);
        expect(screen.getByText('Card Content')).toBeDefined();
    });

    it('renders an image with the correct src and alt text when imageUrl is provided', () => {
        const testImageUrl = 'https://example.com/image.png';
        const testFeatureName = 'Test Feature';
        render(<Card imageUrl={testImageUrl} imageAlt={testFeatureName}>Card Content</Card>);
        const image: HTMLImageElement = screen.getByAltText(testFeatureName);
        expect(image).toBeDefined();
        expect(image.src).toBe(testImageUrl);
    });

    it('does not render an image when imageUrl is not provided', () => {
        render(<Card imageAlt="Test Feature">Card Content</Card>);
        const image = screen.queryByRole('img');
        expect(image).toBeNull();
    });
});
