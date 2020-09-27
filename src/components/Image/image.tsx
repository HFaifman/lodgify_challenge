import React from "react";
import Placeholder from "../../assets/placeholder.png";
import styled from "styled-components";

interface IImageProps {
  name: string;
  src: string;
  width?: string;
  height?: string;
}

const StyledImg = styled.img`
  object-fit: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px 5px 0 0;
`;

const Image = ({ name, src, width, height }: IImageProps) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: width || "13.625rem",
        height: height || "8.75rem",
      }}
    >
      {!loaded ? (
        <StyledImg
          alt={name}
          src={Placeholder}
          style={{
            borderRadius: "0",
          }}
        />
      ) : null}
      <StyledImg
        alt={name}
        src={src}
        onLoad={() => {
          setLoaded(true);
        }}
        style={{
          display: loaded ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Image;
