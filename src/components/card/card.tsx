import React from "react";
import Image from "../image/image";
import { CARD, BUTTON } from "../../commons/constants/colors";
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
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);

  &:hover {
    border: 1px solid rgba(51, 51, 51, 1);
    border-radius: 5px;
  }
`;

const StyledDiv = styled.div`
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  background: ${CARD.BACKGROUND};
`;
const Card = ({ house }: ICardProps) => {
  const status = isBookable(house);
  const tagStatus = getTagStatus(status);

  const decideButtonComponent = (status: boolean | number) => {
    if (typeof status === "number") {
      return (
        <BookedText
          days={status}
          style={{ marginTop: "1rem", paddingBottom: "1rem" }}
        />
      );
    }

    if (status === false) {
      return (
        <Button
          style={{ width: "100%", marginTop: "0.5rem" }}
          disabled
          text="Not Bookable"
        />
      );
    }
    return (
      <Button
        style={{ width: "100%", marginTop: "0.5rem" }}
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
        <Paragraph style={{ width: "100%" }} small text={house.id} />
        <Paragraph text={house.name} />
        {decideButtonComponent(status)}
      </StyledDiv>
    </StyledArticle>
  );
};
export default Card;
