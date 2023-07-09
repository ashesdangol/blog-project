/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./**/*.{html,vue}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        'xxl': '1440px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primaryAccent": "#2B2E4A",
        "secondaryAccent": "#903749"
      },
      fontFamily: {
        customFont: ['Nunito']
      }

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6096B4",

          "secondary": "#93BFCF",

          "accent": "#37CDBE",

          "neutral": "#BDCDD6",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#E84545",
        },
      },


    ]
  },
  plugins: [
    require('daisyui')
  ],
}