/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007ec5",
        primary25: "#007EC550",
        primary50: "#007EC580",
        primary75: "#007EC5B2",
        secondary: "#092145",
        card: "#151a35",
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
        white50: "#FFFFFF80",
      },
      fontFamily: {
        mon: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
