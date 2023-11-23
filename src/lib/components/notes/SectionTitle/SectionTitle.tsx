import {ReactElement} from "react";

import {HeadingProps} from "@interfaces";
import {mergePriorityClasses} from "@utils/index";
import {textTracking} from "@config/tailwind-classes.config";

/**
 * Section Title Component
 *
 * Renders a title within a content section, offering customization through props for styling.
 * The component integrates with the SectionTitleProps interface for its properties,
 * allowing flexible theming and custom class applications.
 * This component also supports ARIA attributes for enhanced accessibility,
 * enabling users to pass `aria-labelledby`, `aria-describedby`, and other ARIA attributes as needed.
 *
 * @component
 * @param {HeadingProps} props - The props for the SectionTitle component, as defined in the SectionTitleProps interface.
 * @returns {ReactElement} - The rendered Section Title element.
 *
 * @example
 * // Example usage of the SectionTitle component
 * <SectionTitle
 *   tracking="wide"
 *   className="custom-section-title">
 *     Example Section Title
 * </SectionTitle>
 *
 * @example
 * // Example usage of the SectionTitle component with ARIA attributes
 * <SectionTitle
 *   className="custom-section-title"
 *   aria-labelledby="section-title-label"
 *   aria-describedby="section-title-description">
 *     Example Section Title
 * </SectionTitle>
 */
export const SectionTitle = (props: HeadingProps): ReactElement => {
    const {
        className,
        children,
        tracking = 'wide',
        ...otherProps
    } = props;
    const baseClasses: string = `${textTracking[tracking]} text-2xl lg:text-3xl 2xl:text-4xl font-semibold`;
    const styles: string = mergePriorityClasses(className, baseClasses);

    return(
        <h3 {...otherProps}
            className={styles}>
            {children}
        </h3>
    );
};
