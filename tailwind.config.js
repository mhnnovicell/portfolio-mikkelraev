export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neutral-1': '#e3e4e6',
        white: '#fff',
        'neutral-2': 'rgba(227, 228, 230, 0.55)',
      },
      fontFamily: {
        'body-1-light': "'Work Sans'",
      },
      borderRadius: {
        '81xl': '100px',
      },
    },
    fontSize: {
      lg: '18px',
      '37xl': '56px',
      '13xl': '32px',
      '5xl': '24px',
      base: '16px',
      '21xl': '40px',
      sm: '14px',
    },
  },
  plugins: [],
};
