import React from "react";
import styled, { CSSObject } from "styled-components";
import { ReactComponent as OkLogo } from "../../assets/oklogo.svg";
import { BOOKED_TEXT } from "../../commons/constants/colors";
import { MEDIUM } from "../../commons/constants/fontsizes";
interface IBookedTextProps {
  days: number;
  style?: CSSObject;
}

const StyledParagraph = styled.p`
  color: ${BOOKED_TEXT.TEXT};
  font-size: ${MEDIUM};
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BookedText = (props: IBookedTextProps) => {
  const { days, style } = props;
  return (
    <StyledDiv style={style}>
      <OkLogo style={{ paddingRight: "0.4rem" }} />
      <StyledParagraph>Booked for {days} days</StyledParagraph>
    </StyledDiv>
  );
};
export default BookedText;
