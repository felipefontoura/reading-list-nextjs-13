import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-lora)"],
        sans: ["var(--font-nunito)"],
      },
      colors: {
        red: "#B7585B",
        "light-green": "#BCE4A8",
        green: "#93EC67",
        "gray-400": "#EDEAE1",
        "gray-500": "#E0DCCB",
        "gray-600": "#DDDBD2",
        "gray-700": "#B5AC93",
        "gray-800": "#6D6757",
        "gray-900": "#423F37",
        black: "#2C2924",
      },
    },
  },
  plugins: [],
};
export default config;
