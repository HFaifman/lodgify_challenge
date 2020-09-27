import React from "react";
import styled from "styled-components";
import { BOOKED } from "../../commons/constants/colors";
interface IBookedTextProps {
  days: string;
}

const StyledCheckMark = styled.div`
  padding-right: 0.4rem;
  &:after {
    content: "✓";
    padding: 3px;
    border: 1px solid ${BOOKED};
    color: ${BOOKED};
    border-radius: 50%;
  }
`;

const StyledParagraph = styled.p`
  color: ${BOOKED};
`;
const StyledDiv = styled.div`
  display: flex;
`;

const BookedText = (props: IBookedTextProps) => {
  const { days, ...rest } = props;
  return (
    <StyledDiv {...rest}>
      <StyledCheckMark />
      <StyledParagraph>Booked for {days} days</StyledParagraph>
    </StyledDiv>
  );
};
export default BookedText;
