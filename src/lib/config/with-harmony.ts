import {Config as TailwindConfig} from "tailwindcss";
import {harmonicTailwindTheme} from "@config/harmonic-tailwind-theme";
import deepmerge from "deepmerge";

const harmonicTailwindConfig: TailwindConfig = {
    content: [
        "./node_modules/@cassina/harmonic-ui/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        ...harmonicTailwindTheme
    }
}

export default function withHarmony(userConfig: TailwindConfig) {
    const finalConfig = deepmerge(harmonicTailwindConfig, userConfig)
    return finalConfig;
}