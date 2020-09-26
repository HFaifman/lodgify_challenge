import React from "react";
import styled from "styled-components";

interface IButtonProps {
  text: string;
  color: string;
}

const StyledButton = styled.button<IButtonProps>`
  padding: 1rem;
  appearance: none;
  border: none;
  border-radius: 5px;
  background: ${({ color }) => color};
`;

const StyledSpan = styled.span`
  color: #f7f7f7;
  font-weight: 700;
`;

const Button = (props: IButtonProps) => {
  const { text, color, ...rest } = props;
  return (
    <StyledButton text={text} color={color} {...rest}>
      <StyledSpan>{text}</StyledSpan>
    </StyledButton>
  );
};
export default Button;
