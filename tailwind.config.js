/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image-mobile': 'url(/images/bg-sidebar-mobile.svg)',
        'bg-image-desktop': 'url(/images/bg-sidebar-desktop.svg)'
      },
      colors: {
        bgPage: '#EEF5FF',
        primaryColor: '#02295a',
        purPlishBlue: '#473dff',
        errorColor: ' #ed3548',
        stepsBgColor: ' #adbeff',
        primaryHoverColor: '#174A8B',
        secondaryHoverColor: '#938CFE'
      }
    }
  },
  plugins: []
};
