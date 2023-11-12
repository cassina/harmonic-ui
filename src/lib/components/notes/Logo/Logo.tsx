import {LogoProps} from "@interfaces";

export const Logo = ({ imageUrl }: LogoProps) => {
    return (
        <div className="flex flex-shrink-0 items-center">
            <img
                className="h-8 w-auto"
                src={imageUrl}
                alt="Your Company"
            />
        </div>
    );
};
