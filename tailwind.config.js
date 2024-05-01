/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007ec5",
        primary50: "#007EC550",
        secondary: "#092145",
        input: "#1e223d",
        accent: "",
        background: "#010624",
        background2: "#0b102d",
        error: "#ff165c",
        success: "#16ffb9",
        Info: "",
        Warning: "",
        Disabled: "",
        Hover: "",
      },
      fontFamily: {
        mon: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
