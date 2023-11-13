import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {describe, expect, it, afterEach} from 'vitest';

import {
    FacebookIcon,
    TwitterIcon,
    GithubIcon,
    AppleIcon,
    GoogleIcon
} from '@components/notes/SocialIcon/SocialIcon';
import {SVGPaths} from "@config/svg-paths"; // Update with the correct import path

describe('<SocialSVG /> components', () => {
    afterEach(cleanup);

    it('should render FacebookSVG correctly', () => {
        const { container } = render(<FacebookIcon />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.facebook);
    });

    it('should render TwitterSVG correctly', () => {
        const { container } = render(<TwitterIcon />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.twitter);
    });

    it('should render GithubSVG correctly', () => {
        const { container } = render(<GithubIcon />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.github);
    });

    it('should render AppleSVG correctly', () => {
        const { container } = render(<AppleIcon />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.apple);
    });

    it('should render GoogleSVG correctly', () => {
        const { container } = render(<GoogleIcon />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.google);
    });
});
