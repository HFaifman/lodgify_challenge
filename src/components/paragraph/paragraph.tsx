import React from "react";
import styled, { CSSObject } from "styled-components";
import { MEDIUM, LARGE } from "../../commons/constants/fontsizes";
import { PARAGRAPH } from "../../commons/constants/colors";

interface IParagraphProps extends React.HTMLAttributes<IParagraphProps> {
  small?: boolean;
  text: string;
  style?: CSSObject;
}

const StyledSmallParagraph = styled.p`
  font-weight: 400;
  font-size: ${MEDIUM};
  color: ${PARAGRAPH.TEXT};
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledBigParagraph = styled.p`
  font-weight: 900;
  font-size: ${LARGE};
  font-style: italic;
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Paragraph = (props: IParagraphProps) => {
  const { text, small, style } = props;
  return small ? (
    <StyledSmallParagraph style={style}>{text}</StyledSmallParagraph>
  ) : (
    <StyledBigParagraph style={style}>{text}</StyledBigParagraph>
  );
};
export default Paragraph;
