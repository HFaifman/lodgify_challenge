import React from "react";
import Image from "../image/image";
import { CARD_BACKGROUND, BUTTON } from "../../commons/constants/colors";
import Tag from "../tag/tag";
import Paragraph from "../paragraph/paragraph";
import BookedText from "../bookedtext/bookedtext";
import Button from "../button/button";
import styled from "styled-components";
import { House } from "../../api/interfaces/house";
import { getTagStatus, isBookable } from "../../helpers/helpers";

interface ICardProps {
  house: House;
}

const StyledArticle = styled.article`
  width: 13.625rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  padding-bottom: 1rem;
  background: ${CARD_BACKGROUND};
  &:hover {
    border: 1px solid rgba(51, 51, 51, 1);
    border-radius: 5px;
  }
`;

const StyledDiv = styled.div`
  margin: 1rem 1rem 0 1rem;
`;
const Card = ({ house }: ICardProps) => {
  const status = isBookable(house);
  const tagStatus = getTagStatus(status);

  const decideButtonComponent = (status: boolean | number) => {
    if (typeof status === "number") {
      return (
        <BookedText
          days={status}
          style={{ marginTop: "1rem", paddingBottom: "0.5rem" }}
        />
      );
    }

    if (status === false) {
      return (
        <Button
          style={{ width: "100%", marginTop: "1rem" }}
          disabled
          text="Not Bookable"
        />
      );
    }
    return (
      <Button
        style={{ width: "100%", marginTop: "1rem" }}
        color={BUTTON.AVAILABLE}
        text="Book"
      />
    );
  };

  return (
    <StyledArticle>
      <Image name={house.name} src={house.image} />
      <Tag
        text={tagStatus.text}
        color={tagStatus.color}
        style={{ position: "absolute", top: "10px", left: "10px" }}
      />
      <StyledDiv>
        <Paragraph
          style={{ width: "100%", marginTop: "1rem" }}
          small
          text={house.id}
        />
        <Paragraph text={house.name} />
        {decideButtonComponent(status)}
      </StyledDiv>
    </StyledArticle>
  );
};
export default Card;
