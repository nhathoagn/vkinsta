/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js","./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/images/bg.png')",
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
  },
  plugins: [require("flowbite/plugin"),require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
