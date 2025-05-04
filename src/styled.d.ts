import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      darkGray: string;
      gray800: string;
      gray400: string;
      orange500: string;
      orange600: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}