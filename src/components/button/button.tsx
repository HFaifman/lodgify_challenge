import React from "react";
import styled, { CSSObject } from "styled-components";
import { MEDIUM } from "../../commons/constants/fontsizes";
import { DISABLED_BUTTON } from "../../commons/constants/colors";
import { BUTTON_TEXT } from "../../commons/constants/colors";
interface IButtonProps {
  text: string;
  color: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: CSSObject;
}

const StyledButton = styled.button<IButtonProps>`
  padding: 1rem;
  appearance: none;
  border: none;
  border-radius: 5px;
  background: ${({ color }) => color};
  &:disabled {
    background: ${DISABLED_BUTTON};
  }
`;

const StyledSpan = styled.span`
  color: ${BUTTON_TEXT};
  font-weight: 900;
  font-size: ${MEDIUM};
`;

const Button = (props: IButtonProps) => {
  const { text, color, style, disabled, onClick } = props;
  return (
    <StyledButton
      text={text}
      color={color}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <StyledSpan>{text}</StyledSpan>
    </StyledButton>
  );
};
export default Button;
