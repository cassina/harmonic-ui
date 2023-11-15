import {HeroProps} from "@interfaces";

/**
 *
 */
export const Hero = (
    {
        children,
        imageUrl,
        backgroundImageUrl,
        className,
        isMainBanner = true,
    }: HeroProps) => {
    return (
        <section
            {...(isMainBanner && { role: 'banner' })}
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
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
