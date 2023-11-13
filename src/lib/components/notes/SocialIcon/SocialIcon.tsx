import { SVGPaths } from "@config/svg-paths";
import {SocialIconProps} from "@interfaces";

export const SocialIcon = (props: SocialIconProps) => {
    const {
        id,
        viewBox,
        path,
        width = '4',
        height = '4'
    } = props;

    return(<svg id={id}
         className={`w-${width} h-${height}`}
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="white"
         viewBox={viewBox}>
        <path d={path} fillRule="evenodd" clipRule="evenodd" />
    </svg>);
};

export const FacebookIcon = () => (
    <SocialIcon id="facebook-icon"
                viewBox="0 0 8 19"
                path={SVGPaths.facebook} />
);

export const TwitterIcon = () => (
    <SocialIcon id="twitter-icon"
                viewBox="0 0 20 17"
                path={SVGPaths.twitter} />
);

export const GithubIcon = () => (
    <SocialIcon id="github-icon"
                viewBox="0 0 20 20"
                path={SVGPaths.github} />
);

export const AppleIcon = () => (
    <SocialIcon id="apple-icon"
                viewBox="0 0 384 512"
                path={SVGPaths.apple} />
);

export const GoogleIcon = () => {
    return(
        <SocialIcon id="google-icon"
                    viewBox="0 0 18 19"
                    path={SVGPaths.google} />
    );
};
