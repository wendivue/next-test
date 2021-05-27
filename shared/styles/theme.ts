export type Theme = {
  typography: {
    fontSize: string;
  };
  colors: {
    basicLight: string;
    basic: string;
    basicDark: string;
    basicDarkest: string;
    delete: string;
  };
  gradients: {
    primary: string;
  };
};

const typographyColor = '31, 32, 65';
const primaryColor = '#bc9cff';
const primaryColor2 = '#8ba4f9';

const mainTheme = {
  typography: {
    fontSize: '14px',
  },
  colors: {
    basicLight: `rgba(${typographyColor}, 0.25)`,
    basic: `rgba(${typographyColor}, 0.5)`,
    basicDark: `rgba(${typographyColor}, 0.75)`,
    basicDarkest: `rgb(${typographyColor})`,
    delete: '#ec6767',
  },
  gradients: {
    primary: `linear-gradient(180deg, ${primaryColor}, ${primaryColor2})`,
  },
};

export { mainTheme };
