/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: "0 -4px 6px -1px rgba(1, 0, 0, 0.2)", // Üste gölge ekler
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
