/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F27E7E",
        back: "#EBEBF2",
        greyaccent: "#e2e2e2",
        back_secondary: "#DBE0EA",
        secondary: "#102973",
        accent: "#F2798F",
        light: "#7395D9",
        font_color: "#9DA1A5",
        menu: "#85898D",
        focused_menu_bg: "#CED2E3",
        focused_menu: "#1F3B5E",
      },
    },
  },
  plugins: [],
};
