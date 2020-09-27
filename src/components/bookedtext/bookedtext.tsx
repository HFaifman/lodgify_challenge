import React from "react";
import styled from "styled-components";
import { ReactComponent as OkLogo } from "../../assets/oklogo.svg";
import { BOOKED } from "../../commons/constants/colors";
import { MEDIUM } from "../../commons/constants/fontsizes";
interface IBookedTextProps {
  days: string;
}

const StyledParagraph = styled.p`
  color: ${BOOKED};
  font-size: ${MEDIUM};
  align-self: flex-end;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BookedText = (props: IBookedTextProps) => {
  const { days, ...rest } = props;
  return (
    <StyledDiv {...rest}>
      <OkLogo style={{ paddingRight: "0.4rem" }} />
      <StyledParagraph>Booked for {days} days</StyledParagraph>
    </StyledDiv>
  );
};
export default BookedText;
