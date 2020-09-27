import React from "react";
import styled, { CSSObject } from "styled-components";
import { SMALL } from "../../commons/constants/fontsizes";
import { TAG_TEXT } from "../../commons/constants/colors";
interface ITagProps extends React.HTMLAttributes<ITagProps> {
  text: string;
  color: string;
  style?: CSSObject;
}

const StyledSpan = styled.span<ITagProps>`
  border-radius: 11px;
  padding: 0.3rem 1rem;
  color: ${TAG_TEXT};
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
