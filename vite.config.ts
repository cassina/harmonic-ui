import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({ include: ['./src/lib']})
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/lib/components'),
            '@config': path.resolve(__dirname, './src/lib/config'),
            '@utils': path.resolve(__dirname, './src/lib/utils'),
        },
    },
    build: {
        // manifest: true,
        minify: true,
        reportCompressedSize: true,
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, './src/lib/main.ts'), // Update the entry file path
            name: 'HarmonicUI',
            fileName: 'harmonic-ui',
            formats: ['cjs']
        },
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'], // Externalize React and other dependencies
            output: {
                globals: {
                    react: 'React'
                }
            },
            // plugins: [
            //     postcss({
            //         // If you want to extract the CSS to a separate file (optional):
            //         extract: true,
            //         // If you use .scss or .sass, make sure to also install and set up `sass`:
            //         // sass: true,
            //     }),
            // ],
        },
    },
})
