import {
    APPLE_SVG_PATH,
    FACEBOOK_SVG_PATH,
    GITHUB_SVG_PATH,
    GOOGLE_SVG_PATH,
    TWITTER_SVG_PATH
} from "@components/notes/SocialSVG/SocialSVG.config";

interface SocialSVGProps {
    id: string;
    viewBox: string;
    path: string;
    width?: string;
    height?: string;
}

const SVGIcon = (props: SocialSVGProps) => {
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
    </svg>)
};

export const FacebookSVG = () => (
    <SVGIcon id="facebook-icon"
             viewBox="0 0 8 19"
             path={FACEBOOK_SVG_PATH} />
);

export const TwitterSVG = () => (
    <SVGIcon id="twitter-icon"
             viewBox="0 0 20 17"
             path={TWITTER_SVG_PATH} />
);

export const GithubSVG = () => (
    <SVGIcon id="github-icon"
             viewBox="0 0 20 20"
             path={GITHUB_SVG_PATH} />
);

export const AppleSVG = () => (
    <SVGIcon id="apple-icon"
             viewBox="0 0 384 512"
             path={APPLE_SVG_PATH} />
);

export const GoogleSVG = () => {
    return(
        <SVGIcon id="google-icon"
                 viewBox="0 0 18 19"
                 path={GOOGLE_SVG_PATH} />
    );
};
