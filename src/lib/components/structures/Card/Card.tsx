import {CardProps} from "@interfaces";
import {mergeClasses} from "@utils/index";

export const Card = ({
        imageUrl,
        imageAlt,
        children,
        className,
        ...props
    }: CardProps) => {
    const classes = mergeClasses(className, 'max-w-xs flex flex-col space-y-8');
    return(
        <div { ...props }
             className={classes} >
            {
                imageUrl &&
                <img src={imageUrl}
                     alt={imageAlt}
                     className={'w-[100%] md:w-xs'}/>
            }
            { children }
        </div>
    );
};
