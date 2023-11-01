import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {describe, expect, it, afterEach} from 'vitest';

import {
    FacebookSVG,
    TwitterSVG,
    GithubSVG,
    AppleSVG,
    GoogleSVG
} from '@components/notes/SocialSVG/SocialSVG'; // Update with the correct import path

import {
    APPLE_SVG_PATH,
    FACEBOOK_SVG_PATH,
    GITHUB_SVG_PATH,
    GOOGLE_SVG_PATH,
    TWITTER_SVG_PATH
} from "@components/notes/SocialSVG/SocialSVG.config";

describe('<SocialSVG /> components', () => {
    afterEach(cleanup);

    it('should render FacebookSVG correctly', () => {
        const { container } = render(<FacebookSVG />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(FACEBOOK_SVG_PATH);
    });

    it('should render TwitterSVG correctly', () => {
        const { container } = render(<TwitterSVG />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(TWITTER_SVG_PATH);
    });

    it('should render GithubSVG correctly', () => {
        const { container } = render(<GithubSVG />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(GITHUB_SVG_PATH);
    });

    it('should render AppleSVG correctly', () => {
        const { container } = render(<AppleSVG />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(APPLE_SVG_PATH);
    });

    it('should render GoogleSVG correctly', () => {
        const { container } = render(<GoogleSVG />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(GOOGLE_SVG_PATH);
    });
});
