// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
    test: {
        include: ['./src/**/*.test.{ts,tsx}'],
        environment: "jsdom",
        // environmentMatchGlobs: [
        //     // all tests in __tests__/ will run in jsdom
        //     ['__tests__/**', 'jsdom'],
        //     // ...
        // ]
    },
}));
