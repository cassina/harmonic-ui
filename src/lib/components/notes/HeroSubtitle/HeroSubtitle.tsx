import {ReactElement} from "react";

import {HeadingProps} from "@interfaces";
import {mergeClasses} from "@utils/index";
import {textTracking} from "@config/tailwind-classes.config";

/**
 * Hero Subtitle Component
 *
 * Renders a subtitle within a hero section, providing styling customization through props.
 * This component is designed to complement the HeroTitle component, offering consistent theming and a cohesive appearance.
 * It supports flexible theming and custom class applications, and integrates with the HeadingProps interface for its properties.
 * Similar to HeroTitle, this component also supports ARIA attributes for enhanced accessibility,
 * allowing users to pass attributes like `aria-labelledby` and `aria-describedby`.
 *
 * @component
 * @param {HeadingProps} props - The props for the HeroSubtitle component, as defined in the HeadingProps interface.
 * @returns {ReactElement} - The rendered Hero Subtitle element.
 *
 * @example
 * // Example usage of the HeroSubtitle component
 * <HeroSubtitle
 *   className="custom-hero-subtitle"
 *   tracking="wide">
 *     Example Subtitle
 * </HeroSubtitle>
 *
 * @example
 * // Example usage of the HeroSubtitle component with ARIA attributes
 * <HeroSubtitle
 *   className="custom-hero-subtitle"
 *   tracking="normal"
 *   aria-labelledby="hero-subtitle-label"
 *   aria-describedby="hero-subtitle-description">
 *     Example Subtitle
 * </HeroSubtitle>
 */
export const HeroSubtitle = (props: HeadingProps): ReactElement => {
    const {
        className,
        children,
        tracking = 'normal',
        ...otherProps
    } = props;
    const baseClasses: string = 'text-lg';
    const styles: string = mergeClasses(className, textTracking[tracking], baseClasses);

    return(
        <h2 {...otherProps}
            className={styles}>
            {children}
        </h2>);
};
