import React from "react";
import Image from "../image/image";
import { CARD, BUTTON } from "../../commons/constants/colors";
import Tag from "../tag/tag";
import Paragraph from "../paragraph/paragraph";
import BookedText from "../bookedtext/bookedtext";
import Button from "../button/button";
import styled from "styled-components";
import { House } from "../../api/interfaces/house";
import { getTagStatus } from "../../helpers/helpers";

interface ICardProps {
  house: House;
}

const StyledArticle = styled.article`
  width: 13.625rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);

  border-radius: 0 0 5px 5px;

  &:hover {
    border: 1px solid rgba(51, 51, 51, 1);
    border-radius: 5px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
  }
`;

const StyledDiv = styled.div`
  padding: 1rem;
  height: 100%;
  background: ${CARD.BACKGROUND};
`;
const Card = ({ house }: ICardProps) => {
  const tagStatus = getTagStatus(house);

  return (
    <StyledArticle>
      <Image name={house.name} src={house.image} />
      <Tag
        text={tagStatus.text}
        color={tagStatus.color}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      />
      <StyledDiv>
        <Paragraph style={{ width: "100%" }} small text={`Id: ${house.id}`} />
        <Paragraph text={house.name} />
        {house.booked > 0 ? (
          <BookedText
            days={house.booked}
            style={{ marginTop: "1rem", paddingBottom: "1rem" }}
          />
        ) : (
          <Button
            disabled={!house.bookable}
            style={{ width: "100%", marginTop: "0.5rem" }}
            color={house.bookable ? BUTTON.AVAILABLE : ""}
            text={house.bookable ? "Book" : "Not Bookable"}
          />
        )}
      </StyledDiv>
    </StyledArticle>
  );
};
export default Card;
