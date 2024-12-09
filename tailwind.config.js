// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         "primary":"#9F3CB5",
//         "primary-50":"#f2e2f5",
//         "fontBlack":'#272727',
//         "fontGray":'#979797',
//         "fontGray2":'#777E90',
//         "transparentBlack":'#00000033',
//         "charcoalBlue":'#101828',
//         "slateGray":'#475467',
//         "royalPurple":'#6941C6',
//         "darkSlate":'#344054',
//         "softSilver":'#D0D5DD',
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

// module.exports = {
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         urbanist: ['var(--font-urbanist)', ...fontFamily.sans], // Urbanist font
//         afacad: ['var(--font-afacad)', ...fontFamily.serif],    // Afacad font
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand:'#FF0073'
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        afacad: ['var(--font-afacad)'],
      },
      backgroundImage: {
        'hover-gradient': 'radial-gradient(50% 50% at 50% 50%, rgb(172, 0, 78), rgb(255, 0, 115) 100%)',
      },
    },
  },
  plugins: [],
};

