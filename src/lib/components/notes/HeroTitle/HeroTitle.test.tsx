import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HeroTitle } from './HeroTitle';
import {getHeroTitleStyle} from "@components/notes/HeroTitle/HeroTitle.style";

describe('HeroTitle Component Tests', () => {
    afterEach(cleanup);

    it('renders without crashing', () => {
        render(<HeroTitle>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        expect(heroTitleElement).toBeDefined();
    });

    it('displays the children content', () => {
        render(<HeroTitle>Test Title</HeroTitle>);
        const heroTitleElement = screen.getByText('Test Title');
        const classNames = heroTitleElement.getAttribute('class');
        const expectedClassNames = getHeroTitleStyle();
        expect(classNames).toContain(expectedClassNames);
    });
});
