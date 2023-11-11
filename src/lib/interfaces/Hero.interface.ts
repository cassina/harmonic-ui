import {PropsWithChildren} from "react";

export interface HeroProps extends PropsWithChildren{
    backgroundImageUrl?: string; // optional
    isMainBanner?: boolean; // Optional prop to conditionally render role='banner'
}
