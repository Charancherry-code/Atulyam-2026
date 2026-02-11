/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sakura-pink": "#FF69B4",
        "sakura-light": "#FFB7D5",
        "night-indigo": "#0a0e27",
        "night-dark": "#050812",
        gold: "#FFD700",
        "gold-light": "#FFED4E",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
