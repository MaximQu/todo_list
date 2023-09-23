/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "3xs": "320px",
                "2xs": "375px",
                xs: "480px",
                sm: "575px",
                md: "768px",
                lg: "991px",
                xl: "1199px",
                "2xl": "1399px",
            },
        },
        screens: {
            "3xs": "320px",
            "2xs": "375px",
            xs: "480px",
            sm: "575px",
            md: "768px",
            lg: "991px",
            xl: "1199px",
            "2xl": "1399px",
        },
    },
  },
  plugins: [],
}