import {PropsWithChildren} from "react";

export interface HeroProps extends PropsWithChildren {
    isMainBanner?: boolean; // Optional prop to conditionally render role='banner'
    imageUrl?: string; // If imageUrl is present, it will be aligned to the right
    backgroundImageUrl?: string; // optional
}
