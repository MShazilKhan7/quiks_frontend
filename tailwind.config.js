/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Your custom primary color
        secondary: "#9333EA", // Your custom secondary color
        accent: "#F59E0B", // Your custom accent color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
