/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#00A19B",
          500: "#27A376",
        },
        greyscale: {
          50: "#FAFAFA",
          100: "#F8F8F8",
          200: "#F1F2F4",
          300: "#E9EAEC",
          500: "#A0AEC0",
          600: "#687588",
          900: "#111827",
        },
        success: {
          500: "#0CAF60",
        },
        error: {
          500: "#E03137",
        },
        info: {
          500: "#2F78EE",
        },
      },
    },
  },
  plugins: [],
};
