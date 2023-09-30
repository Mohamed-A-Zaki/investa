import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#2563EB",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      keyframes: {},
      animation: {},
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
export default config;
