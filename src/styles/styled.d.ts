import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      backgroundTop: string;
      backgroundPortfolio: string;

      background: string;
      text: string;
      link: string;
    }
  }
}