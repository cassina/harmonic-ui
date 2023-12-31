import {LogoProps} from "@interfaces";
import {mergePriorityClasses} from "@utils/index";

export const Logo = ({ className, src, alt, ...props }: LogoProps) => {
    const classes = mergePriorityClasses(className, 'h-8 w-auto');
    return (
        <div className={'flex flex-shrink-0 items-center'}>
            <img
                {...props }
                className={classes}
                src={src}
                alt={alt}
            />
        </div>
    );
};
