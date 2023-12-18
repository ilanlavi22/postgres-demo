/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "0.3125rem",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(320px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(320px, 1fr))",
      },

      colors: {
        "bluesky-100": "#C1DBE2",
      },

      fontFamily: {
        workSans: ["var(--font-work-sans)"],
        Inter: ["var(--font-inter)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
