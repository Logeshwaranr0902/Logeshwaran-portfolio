module.exports = {
  content: [
    "./index.html",           // Vite's index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Scan your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace'],
        rubik: ['Rubik', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
};
