import React from "react";
import styled from "styled-components";
import { SMALL } from "../../commons/constants/fontsizes";
interface ITagProps {
  text: string;
  color: string;
}

const StyledSpan = styled.span<ITagProps>`
  border-radius: 11px;
  padding: 0.3rem 1rem;
  color: #f7f7f7;
  font-weight: 700;
  background: ${({ color }) => color};
  font-size: ${SMALL};
`;

const Tag = (props: ITagProps) => {
  const { color, text, ...rest } = props;
  return (
    <StyledSpan color={color} text={text} {...rest}>
      {text}
    </StyledSpan>
  );
};

export default Tag;
