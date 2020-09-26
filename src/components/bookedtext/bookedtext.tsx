import React from "react";
import styled from "styled-components";

interface IBookedTextProps {
  days: string;
}

const StyledCheckMark = styled.div`
  padding-right: 0.4rem;
  &:after {
    content: "✔";
    padding: 3px;
    border: 1px solid #11a960;
    color: #11a960;
    border-radius: 50%;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const StyledParagraph = styled.p`
  color: #11a960;
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
