import {HeroProps} from "@interfaces";
import React, {ReactElement} from "react";

/**
 * Hero Structure Component
 *
 * The Hero Structure is used to create a hero section with an optional background image and text content.
 *
 * @component
 * @param {HeroProps} props - The component props.
 * @param {ReactNode} props.children - The content to be displayed inside the hero section.
 * @param {string} props.imageUrl - The URL of the image to be displayed alongside the content.
 * @param {string} props.backgroundImageUrl - The URL of the background image for the hero section.
 * @param {string} props.className - Additional CSS classes to be applied to the hero section.
 * @param {boolean} props.isMainBanner - Whether the hero section serves as the main banner (default is `true`).
 * @returns {ReactElement} - The Hero Structure ReactElement.
 *
 * @example
 * // Example usage of the Hero component
 * <Hero
 *   imageUrl="/path/to/image.jpg"
 *   backgroundImageUrl="/path/to/background-image.jpg"
 *   className="custom-class"
 *   isMainBanner={true}>
 *     {Content goes here}
 * </Hero>
 */
export const Hero = (
    {
        children,
        imageUrl,
        backgroundImageUrl,
        className,
        isMainBanner = true,
    }: HeroProps): ReactElement => {
    return (
        <section
            {...(isMainBanner && { role: 'banner' })}
            {
                ...(backgroundImageUrl && {
                    style:{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }
                })
            }
            aria-label={isMainBanner ? 'Main header' : 'Hero section'}
            className={className}
        >
            {
                !imageUrl ?
                    <div className={`${isMainBanner ? 'space-y-10 md:py-20 md:px-20' : 'space-y-5 md:py-10 md:px-10'} text-center py-10 px-5  max-w-2xl mx-auto`}>
                        { children }
                    </div>
                :
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <div className={'py-10 px-5 md:py-20 md:px-20 lg:max-w-3xl'}>
                            { children }
                        </div>
                        <div className={'pl-5 md:pl-0 py-10'}>
                            <img src={imageUrl} className={'rounded-l-md'}/>
                        </div>
                    </div>
            }
        </section>
    );
};
