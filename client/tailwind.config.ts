import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: "'DM Sans',  sans-serif",
        body: "'Nunito', sans-serif",
      },
      colors: {
        mainTheme: "#030015",
        secondaryTheme: "#5fec46",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
