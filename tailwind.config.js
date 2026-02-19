export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                graphik: ['"Graphik"', 'sans-serif'],
                'graphik-bold': ['"Graphik Bold"', 'sans-serif'],
            },
            colors: {
                primary: '#2091F9',
                text: '#251B42',
                secondaryText: '#374754',
                darkBackground: '#252B42',
            },
            screens: {
                'xs': '400px'
            }
        },
    },
    plugins: [],
}
