/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        4: "var(--s-bg) var(--s-bg)",
      },
      backgroundPosition: {
        dot: "0 0, var(--p-bg) var(--p-bg)",
      },
      backgroundImage: {
        halftone:
          "radial-gradient(circle at center, black var(--s-core), transparent var(--s-dot)), radial-gradient(circle at center, black var(--s-core), transparent var(--s-dot))",
      },
    },
  },
  plugins: [],
};
