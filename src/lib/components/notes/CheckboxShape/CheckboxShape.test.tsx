import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {describe, expect, it, afterEach} from 'vitest';

import {CheckboxShape} from './CheckboxShape';
import {SVGPaths} from "@config/svg-paths";

describe('<SVG />', () => {
    afterEach(cleanup);

    it('should render correctly with default props', () => {
        const { container } = render(<CheckboxShape />);
        const svgElement = container.firstChild as SVGSVGElement;

        expect(svgElement).toBeDefined();
        expect(svgElement.getAttribute('viewBox')).toEqual('0 0 24 24');
    });

    it('should render the tick shape by default', () => {
        const { container } = render(<CheckboxShape />);
        const polylineElement = container.querySelector('polyline');

        expect(polylineElement).toBeDefined();
        expect(polylineElement!.getAttribute('points')).toEqual(SVGPaths.tick);
    });

    it('should render the heart shape when shape prop is "heart"', () => {
        const { container } = render(<CheckboxShape shape="heart" />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.heart);
    });

    it('should render the skull shape when shape prop is "skull"', () => {
        const { container } = render(<CheckboxShape shape="skull" />);
        const pathElement = container.querySelector('path');

        expect(pathElement).toBeDefined();
        expect(pathElement!.getAttribute('d')).toEqual(SVGPaths.skull);
    });
});
