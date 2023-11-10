export interface HeroProps {
    title: string;
    subtitle: string;
    primaryActionText: string;
    primaryActionOnClick: () => void;
    secondaryActionText?: string; // optional
    secondaryActionOnClick?: () => void; // optional
    backgroundImageUrl?: string; // optional
}
