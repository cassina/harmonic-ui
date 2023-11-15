import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
    afterEach(cleanup);

    it('renders the logo image with the correct source', () => {
        const testImageUrl = 'https://example.com/logo.png';
        const { container } = render(<Logo src={testImageUrl} alt={'test'}/>);
        const logoImage = container.querySelector('img');

        expect(logoImage).toBeDefined();
        expect(logoImage?.getAttribute('src')).toBe(testImageUrl);
        expect(logoImage?.getAttribute('alt')).toBe('test');
    });
});
