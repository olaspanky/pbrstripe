/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/commercehead.png')",


         },
         fontFamily:{
          custom: ['general_sans'],
          custom2: ['light_sans'],
          work: ['work_sans'],
          custom3: ['medium_sans'],
          poppins: ['poppins'],
         }
    },
  },
  plugins: [],
};
