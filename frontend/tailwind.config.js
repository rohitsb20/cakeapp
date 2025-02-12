/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    require("tailwindcss-motion"),
  ],
  flyonui: {
    themes: ["light"],
  },
};
