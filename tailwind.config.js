/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'lg': '640px',
    },
    extend: {
      fontSize: {
        'bname': 'clamp(17px, 2.2vw, 2rem)',
        'hero-welcome': 'clamp(17px, 3vw, 2.375rem)',
        'button': 'clamp(12px, 2.2vw, 2.25rem)',
        'mission1': 'clamp(15px, 3.33vw, 3rem)',
        'mission2': 'clamp(12px, 2.22vw, 3rem)',
        'header': 'clamp(20px, 3.33vw, 3rem)',
        'goal': 'clamp(14px, 2.2vw, 2rem)',
        'missionNumber': 'clamp(30px, 5.6vw, 4rem)',
        'missionNumberText': 'clamp(12px, 1.67vw, 2rem)',
        'footerHeader': 'clamp(17px, 3.62vw, 3.5rem)',
        'contactMsg': 'clamp(12px, 2.23vw, 2.5rem)',
      },
      fontFamily: {
        Extralight_Grotesk: 'Extralight Grotesk',
        Light_Grotesk: 'Light Grotesk',
        Regular_Grotesk: 'Regular Grotesk',
        Medium_Grotesk: 'Medium Grotesk',
        Semibold_Grotesk: 'Semibold Grotesk',
        Bold_Grotesk: 'Bold Grotesk',
        taviraj: ['Taviraj', 'serif'],
        General_Sans: 'General Sans',
      },
      backgroundImage: {
        'hero-image': "url('/images/hero-section-image.png')",
        'service': "url('/images/sandfortcare-services.png')",
        'choose': "url('/images/choose.png')",
      }
    },
  },
  plugins: [],
}

