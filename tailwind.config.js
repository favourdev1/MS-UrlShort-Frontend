/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{vue,ts,jsx,tsx}"],
    theme: {
        extend: {
            zIndex: {
                '999': '999'
            },
            translate: {
                '-22': '-22rem'
            }
        },
    },
    plugins: [],
};