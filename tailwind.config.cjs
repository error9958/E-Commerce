/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const notFirst = plugin(({ addVariant, e }) => {
  addVariant("not-first", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const element = e(`not-first${separator}${className}`);
      return `.${element} > :not(:first-child)`;
    });
  });
});
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [notFirst],
};
