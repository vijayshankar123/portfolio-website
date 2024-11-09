/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customDark: '#1E1E28', // Matches the color in your image
        customYellow: '#FFC75F', // For text and button border
      },
    },
  },
  plugins: [],
};
