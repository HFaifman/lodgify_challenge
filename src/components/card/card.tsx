import React from "react";
import Image from "../image/image";
import { CARD, BUTTON } from "../../commons/constants/colors";
import { CARD_WIDTH } from "../../commons/constants/sizes";
import {
  BUTTON as BUTTON_TEXT,
  ID_PARAGRAPH,
} from "../../commons/constants/texts";
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
  width: ${CARD_WIDTH};
  overflow: hidden;
  position: relative;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  &:hover {
    border: 0.5px solid rgba(51, 51, 51, 1);
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
      <Image name={house.name} src={house.image} width="100%" />
      <Tag
        text={tagStatus.text}
        color={tagStatus.color}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      />
      <StyledDiv>
        <Paragraph
          style={{ width: "100%" }}
          small
          text={`${ID_PARAGRAPH}${house.id}`}
        />
        <Paragraph text={house.name} />
        {house.booked > 0 ? (
          <BookedText
            days={house.booked}
            style={{ marginTop: "1.5rem", paddingBottom: "1rem" }}
          />
        ) : (
          <Button
            disabled={!house.bookable}
            style={{ width: "100%", marginTop: "0.5rem" }}
            color={house.bookable ? BUTTON.AVAILABLE : ""}
            text={
              house.bookable ? BUTTON_TEXT.BOOKABLE : BUTTON_TEXT.NOT_BOOKABLE
            }
          />
        )}
      </StyledDiv>
    </StyledArticle>
  );
};
export default Card;
