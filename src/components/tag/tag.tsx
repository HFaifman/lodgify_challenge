import React from "react";
import styled, { CSSObject } from "styled-components";
import { SMALL } from "../../commons/constants/fontsizes";
interface ITagProps extends React.HTMLAttributes<ITagProps> {
  text: string;
  color: string;
  style?: CSSObject;
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
  const { color, text, style } = props;
  return (
    <StyledSpan color={color} text={text} style={style}>
      {text}
    </StyledSpan>
  );
};

export default Tag;
