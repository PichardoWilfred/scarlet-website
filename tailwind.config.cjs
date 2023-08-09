/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "Inter"],
				epilogue: ["Epilogue", "Inter"]
			},
		},
		colors: {
			white: {
				DEFAULT:'#FFF',
				100: '#EFEFEF',
				200: '#C9C9C9',
				300: "#8D8D8D",
			},
			black: {
				100: "#2B2B2B",
				200: "#131313",
				DEFAULT: "#0D0D0D",
				400: "#1B1B1B",
			},
			red: {
				100: "#E40000",
				DEFAULT: "#C1000B",
				300: "#AB000A",
				400: "#700007",
			}
		},
	},
    corePlugins: {
        textOpacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        placeholderOpacity: false,
        ringOpacity: false,
    },
	plugins: [{
		'postcss-nested': {}
	}],
}
