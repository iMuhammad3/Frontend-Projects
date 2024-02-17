// vite.config.js
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
    // Base public path when served in production
    base: "/",

    css: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    // Development server configuration
    server: {
        port: 3000, // Port to use for the development server
        open: true, // Whether to open the browser automatically
    },

    resolve: {
        alias: {
            "@": resolve(__dirname),
            'firebase/firestore': 'firebase/firestore/dist/index.esm.js',
        },
    },

    // Production build configuration
    build: {
        outDir: "dist", // Output directory for production builds
        assetsDir: "assets", // Directory for static assets
        sourcemap: false, // Whether to generate source maps
    },
});
