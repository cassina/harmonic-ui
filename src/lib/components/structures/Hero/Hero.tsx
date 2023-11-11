import {HeroProps} from "@interfaces";

/**
 * Hero Structure for displaying a banner or hero section with background image.
 *
 * It receives children props that will be rendered.
 *
 * This Structure is a shell to include other components like HeroTitle, HeroSubtitle and HeroButtons.
 */
export const Hero = (
    {
         children,
         backgroundImageUrl,
         isMainBanner = true,
    }: HeroProps) => {
    return (
        <section
            role={isMainBanner ? 'banner' : undefined} // Conditional role
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            aria-label={isMainBanner ? 'Main header' : 'Hero section'} // Accessibility label
        >
            <div className="text-center py-10 px-5 md:py-20 md:px-20 max-w-2xl mx-auto">
                { children }
            </div>
        </section>
    );
};
