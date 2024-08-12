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
      'md': '960px',
    },
    extend: {
      screens: {
        'mini-tab': { 'max': '1113px' },
        'monitor': '1700px',
      },
      width: {
        'plan-card': 'clamp(300px, 27vw, 400px)',
      },
      fontSize: {
        'bname': 'clamp(17px, 2.2vw, 2rem)',
        'hero-welcome': 'clamp(17px, 3vw, 2.375rem)',
        'button': 'clamp(12px, 2.2vw, 2.25rem)',
        'mission1': 'clamp(15px, 3.33vw, 3rem)',
        'mission2': 'clamp(12px, 2.22vw, 3rem)',
        'header': 'clamp(20px, 3.33vw, 3rem)',
        'goal': 'clamp(14px, 2.2vw, 2rem)',
        'benefitTitle': 'clamp(12px, 2.08vw, 2.5rem)',
        'benefitDescription': 'clamp(11px, 1.73vw, 2.5rem)',
        'missionNumber': 'clamp(30px, 5.6vw, 4rem)',
        'missionNumberText': 'clamp(12px, 1.67vw, 2rem)',
        'footerHeader': 'clamp(17px, 3.62vw, 3.5rem)',
        'contactMsg': 'clamp(12px, 2.23vw, 2.5rem)',
        'contactDetail': 'clamp(14px, 2.23vw, 2.5rem)',
        'payment': 'clamp(22px, 4.2vw, 60px)',
        'paymentCap': 'clamp(14px, 2.5vw, 34px)',
        'pricing': 'clamp(12px, 2vw, 28px)',
        'cardCap': 'clamp(13px, 1.2vw, 25px)',
        'amount': 'clamp(20px, 2.7vw, 50px)',
        'currency': 'clamp(12px, 1vw, 2rem)',
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
      backgroundColor: {
        'primary': '#16656F'
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

