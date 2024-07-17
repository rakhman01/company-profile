import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f1f2f3",
        },
        gray: {
          "100": "#7d7c7c",
          "200": "#2a2a2a",
          "300": "#0e1e32",
          "400": "#141414",
          "500": "rgba(255, 255, 255, 0.85)",
        },
        white: "#fff",
        firebrick: "#c31815",
        deepskyblue: "#47b2e4",
        steelblue: "#37517e",
        dimgray: {
          "100": "#4f4f4f",
          "200": "#524a4e",
        },
        ghostwhite: "#f3f5fa",
        cornflowerblue: "#6a94dd",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        "ibm-plex-serif": "'IBM Plex Serif'",
        poppins: "Poppins",
        montserrat: "Montserrat",
        fontawesome: "FontAwesome",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "31xl": "50px",
        "38xl": "57px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
