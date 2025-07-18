// tailwind.config.js

/ @type {import('tailwindcss').Config} */;
module.exports = {
  // content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  content: [
    "./src//*.{js,jsx,ts,tsx}",
    "./src/index.css",
    "./src/styles//*.css",
  ],
  theme: {
    extend: {
      // …your custom theme extensions…
    },
  },
  corePlugins: {
    // if you're on v2 and had turned this off, re-enable:
    backdropFilter: true,
  },
  plugins: [
    // for Tailwind v2:
    require("tailwindcss-filters"),
    // any other plugins…
  ],
};
