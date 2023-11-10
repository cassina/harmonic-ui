import {Button} from "@components/notes/Button/Button";
import {HeroProps} from "@interfaces";

export const Hero = (
    {
        title,
        subtitle,
        primaryActionText,
        primaryActionOnClick,
        secondaryActionText,
        secondaryActionOnClick,
        backgroundImageUrl,
    }: HeroProps) => {
    return (
        <section role={'banner'}
                 style={{
                     backgroundImage: `url(${backgroundImageUrl})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover'
                }}>
            <div className="text-center py-10 px-5 md:py-20 md:px-20">
                <div className={'max-w-[800px] m-auto'}>
                    <h1 className={'text-4xl lg:text-5xl font-bold mb-10 '}>{title}</h1>
                </div>

                <div className={'max-w-[600px] m-auto'}>
                    <p className={'text-primary-400 mb-10'}>{subtitle}</p>
                </div>

                <div>
                    <Button onClick={primaryActionOnClick}
                            label={'Get started'}>{primaryActionText}</Button>

                    {secondaryActionText && secondaryActionOnClick && (
                        <Button onClick={secondaryActionOnClick}
                                buttonColor={'primary'}
                                buttonStyle={'outline'}
                                label={'Learn more'}

                        >
                            {secondaryActionText}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};
