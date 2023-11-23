import {ReactElement} from "react";

import {HeadingProps} from "@interfaces";
import {mergePriorityClasses} from "@utils/index";
import {textTracking} from "@config/tailwind-classes.config";

/**
 * Hero Title
 * Note Component
 *
 * Renders a title within a hero section, offering customization through props for styling and text tracking.
 * The component integrates with the HeroTitleProps interface for its properties,
 * supporting flexible theming and custom class applications.
 * This component supports ARIA attributes for enhanced accessibility.
 * Users can pass `aria-labelledby`, `aria-describedby`, and other ARIA attributes as needed.
 *
 * @component
 * @param {HeadingProps} props - The props for the HeroTitle component, as defined in the HeroTitleProps interface.
 * @returns {ReactElement} - The rendered Hero Title element.
 *
 * @example
 * // Example usage of the HeroTitle component
 * <HeroTitle
 *   className="custom-hero-title"
 *   tracking="wide">
 *     Example Title
 * </HeroTitle>
 *
 * @example
 * // Example usage of the HeroTitle component with ARIA attributes
 * <HeroTitle
 *   className="custom-hero-title"
 *   tracking="tight"
 *   aria-labelledby="hero-title-label"
 *   aria-describedby="hero-title-description">
 *     Example Title
 * </HeroTitle>
 */
export const HeroTitle = (props: HeadingProps): ReactElement => {
    const {
        className,
        children,
        tracking = 'wide',
        ...otherProps
    } = props;
    const baseClasses: string = `${textTracking[tracking]} text-[2rem] lg:text-5xl 2xl:text-6xl font-bold`;
    const styles: string = mergePriorityClasses(className, baseClasses);

    return(
        <h1 {...otherProps}
            className={styles}>
            {children}
        </h1>
    );
};
