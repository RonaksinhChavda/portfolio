/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Core animations used by multiple components
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'expandWidth': 'expandWidth 1s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Hero section animations
        'slideUp': 'slideUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'scaleIn': 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 15s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        
        // Education section animations
        'slideIn': 'slideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'slideRight': 'slideRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'ping': 'ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        // Core keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        
        // Hero section keyframes
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        
        // Education section keyframes
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  // theme: {
  //   extend: {
  //     animation: {
  //       'fadeIn': 'fadeIn 1s ease-in forwards',
  //       'slideUp': 'slideUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //       'scaleIn': 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //       'expandWidth': 'expandWidth 1s ease-out forwards',
  //       'gradient-x': 'gradient-x 3s ease infinite',
  //       'blink': 'blink 1s step-end infinite',
  //       'float': 'float 15s linear infinite',
  //       'spin-slow': 'spin 15s linear infinite',
  //       'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  //     },
  //     keyframes: {
  //       fadeIn: {
  //         '0%': { opacity: '0' },
  //         '100%': { opacity: '1' },
  //       },
  //       slideUp: {
  //         '0%': { opacity: '0', transform: 'translateY(10px)' },
  //         '100%': { opacity: '1', transform: 'translateY(0)' },
  //       },
  //       scaleIn: {
  //         '0%': { opacity: '0', transform: 'scale(0.9)' },
  //         '100%': { opacity: '1', transform: 'scale(1)' },
  //       },
  //       expandWidth: {
  //         '0%': { width: '0%' },
  //         '100%': { width: '100%' },
  //       },
  //       'gradient-x': {
  //         '0%, 100%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'left center'
  //         },
  //         '50%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'right center'
  //         },
  //       },
  //       blink: {
  //         '0%, 100%': { opacity: '1' },
  //         '50%': { opacity: '0' },
  //       },
  //       float: {
  //         '0%': { transform: 'translateY(0px)' },
  //         '50%': { transform: 'translateY(-20px)' },
  //         '100%': { transform: 'translateY(0px)' },
  //       },
  //     },
  //   },
  // },
  // theme: {
  //   extend: {
  //     animation: {
  //       'fadeIn': 'fadeIn 1s ease-in forwards',
  //       'slideIn': 'slideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //       'slideRight': 'slideRight 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //       'expandWidth': 'expandWidth 0.7s ease-out forwards',
  //       'ping': 'ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  //       'gradient-x': 'gradient-x 3s ease infinite',

  //       'fadeIn': 'fadeIn 1s ease-in forwards',
  //             'slideUp': 'slideUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //             'scaleIn': 'scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
  //             'expandWidth': 'expandWidth 1s ease-out forwards',
  //             'gradient-x': 'gradient-x 3s ease infinite',
  //             'blink': 'blink 1s step-end infinite',
  //             'float': 'float 15s linear infinite',
  //             'spin-slow': 'spin 15s linear infinite',
  //             'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  //     },
  //     keyframes: {
  //       fadeIn: {
  //         '0%': { opacity: '0' },
  //         '100%': { opacity: '1' },
  //       },
  //       slideIn: {
  //         '0%': { opacity: '0', transform: 'translateY(30px)' },
  //         '100%': { opacity: '1', transform: 'translateY(0)' },
  //       },
  //       slideRight: {
  //         '0%': { opacity: '0', transform: 'translateX(30px)' },
  //         '100%': { opacity: '1', transform: 'translateX(0)' },
  //       },
  //       expandWidth: {
  //         '0%': { width: '0%' },
  //         '100%': { width: '100%' },
  //       },
  //       ping: {
  //         '0%': { transform: 'scale(1)', opacity: '1' },
  //         '75%, 100%': { transform: 'scale(2)', opacity: '0' },
  //       },
  //       'gradient-x': {
  //         '0%, 100%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'left center'
  //         },
  //         '50%': {
  //           'background-size': '200% 200%',
  //           'background-position': 'right center'
  //         },
  //       },
  //     },
  //   },
  // },
  plugins: [],
}