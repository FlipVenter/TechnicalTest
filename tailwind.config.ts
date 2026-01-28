import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            "slide-left": {
            "0%": { transform: "translateX(-3rem)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
            },
        },
        animation: {
            "slide-left-200": "slide-left 0.8s ease-out 0.2s both",
            "slide-left-300": "slide-left 0.8s ease-out 0.3s both",
            "slide-left-400": "slide-left 0.8s ease-out 0.4s both",
            "slide-left-500": "slide-left 0.8s ease-out 0.5s both",
            "slide-left-600": "slide-left 0.8s ease-out 0.6s both",
            "slide-left-700": "slide-left 0.8s ease-out 0.7s both",
        },
    },
  },
  plugins: [],
};

export default config;