import React from "react";
import styled, { CSSObject } from "styled-components";

interface IGridProps {
  style?: CSSObject;
  children: React.ReactNode;
}

const StyledSection = styled.section`
  display: grid;
  padding: 1rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Grid = ({ style, children }: IGridProps) => (
  <StyledSection style={style}>{children}</StyledSection>
);
export default Grid;
