import {HeroProps} from "@interfaces";

/**
 *
 */
export const Hero = (
    {
        children,
        imageUrl,
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
            {
                !imageUrl ?
                    <div className="text-center py-10 px-5 md:py-20 md:px-20 max-w-2xl mx-auto">
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
