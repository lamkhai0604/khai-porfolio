// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // điều chỉnh tùy theo cấu trúc dự án của bạn
];
export const theme = {
  extend: {
    boxShadow: {
      "glow-purple": "0 0 10px rgba(139, 92, 246, 0.5)",
    },
  },
};
export const plugins = [];
