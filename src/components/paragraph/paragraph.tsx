import React from "react";
import styled from "styled-components";
import { MEDIUM, LARGE } from "../../commons/constants/fontsizes";
import { GREY_TEXT } from "../../commons/constants/colors";

interface IParagraphProps {
  small?: boolean;
  text: string;
}

const StyledSmallParagraph = styled.p`
  font-weight: 400;
  font-size: ${MEDIUM};
  color: ${GREY_TEXT};
  max-width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledBigParagraph = styled.p`
  font-weight: 900;
  font-size: ${LARGE};
  font-style: italic;
  max-width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Paragraph = (props: IParagraphProps) => {
  const { text, small, ...rest } = props;
  return small ? (
    <StyledSmallParagraph {...rest}>{text}</StyledSmallParagraph>
  ) : (
    <StyledBigParagraph {...rest}>{text}</StyledBigParagraph>
  );
};
export default Paragraph;
