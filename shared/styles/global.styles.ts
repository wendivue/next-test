import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

type Props = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<Props>`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: ${typography.fontSize};
        color: ${colors.basicDark};
      }

      body,
      html {
        height: 100%;
      }
    `;
  }}
`;

export { GlobalStyle };
