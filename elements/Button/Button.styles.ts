import styled, { css } from 'styled-components';
import { Props } from './Button.model';

const Button = styled.a<Props>`
  ${(props) => {
    const { gradients, colors } = props.theme;

    const { isSmall, isDelete } = props;

    return css`
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      color: #1f2041;
      position: relative;
      min-width: ${isSmall ? '70px' : '99px'};
      display: inline-block;
      padding: ${isSmall ? '5px 5px' : '12.5px 13.5px'};
      background: ${isDelete ? colors.delete : gradients.primary};
      color: #fff;
      text-align: center;
      border: none;
      border-radius: 22px;
      box-sizing: border-box;
      cursor: pointer;
    `;
  }}
`;
export { Button };
