import {Config as TailwindConfig} from "tailwindcss";
import {harmonicTailwindTheme} from "@config/harmonic-tailwind-theme";
import deepmerge from "deepmerge";

interface WithHarmonyOptions {
    userConfig: TailwindConfig;
    nodeModulesPath?: string;
}

export default function withHarmony({ userConfig, nodeModulesPath = './node_modules' }: WithHarmonyOptions) {
    const harmonicTailwindConfig: TailwindConfig = {
        content: [
            `${nodeModulesPath}/harmonic-ui/dist/**/*.{js,jsx}`
        ],
        theme: {
            ...harmonicTailwindTheme
        }
    };

    const finalConfig = deepmerge(harmonicTailwindConfig, userConfig);
    console.log('FINAL: ', finalConfig.content)
    return finalConfig;
}
