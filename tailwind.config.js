/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media", // ou "class"
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx,mdx}",
	  "./src/**/*.{ts,tsx,mdx}",
	  "./constants/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: {
		  DEFAULT: "1rem",
		  sm: "2rem",
		  lg: "3rem",
		  xl: "4rem",
		  "2xl": "5rem",
		},
	  },
	  fontSize: {
		"xs": ".75rem", // 12px
		"sm": ".875rem", // 14px
		"base": "1rem", // 16px
		"lg": "1.125rem", // 18px
		"xl": "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
		"6xl": "4rem", // 64px
		"7xl": "5rem", // 80px
		"8xl": "6rem", // 96px
	  },
	  extend: {
		colors: {
		  black: {
			"1": "#00214F",
			"2": "#344054",
			"3": "#1D1D1B",
		  },
		  green: {
			"1": "#13A538",
			"2": "#6FD904",
			"3": "#00533E",
		  },
		  gray: {
			"25": "#FCFCFD",
			"200": "#EAECF0",
			"300": "#D0D5DD",
			"500": "#667085",
			"600": "#475467",
			"700": "#344054",
			"900": "#101828",
		  },
		},
		keyframes: {
		  mediaAnimation: {
			"50%": { transform: "translateY(-1rem)" },
		  },
		  showContent: {
			to: { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
		  },
		},
		animation: {
		  mediaAnimation: "mediaAnimation 3s linear infinite",
		  showContent: "showContent .5s .7s ease-in-out 1 forwards",
		},
	  },
	},
	plugins: [require("tailwindcss-animated")],
  };