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
    console.log(`Let's play some music!`, harmonicTailwindConfig)

    const deep = deepmerge(harmonicTailwindConfig, userConfig);

    console.log('The merged config: ', JSON.stringify(deep))
    return deep;
}