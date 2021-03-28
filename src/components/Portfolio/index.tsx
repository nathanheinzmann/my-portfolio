import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { scrollIntoView } from "../../utils/helpers";
import {
  Container,
  Wrapper,
  Title,
  
} from "./styles";

type PortfolioProps = {
  children?: string;
};

const Portfolio: React.FC<PortfolioProps> = () => (
  <Wrapper id="Portfolio">
    <Container>
      <Title>...</Title>
    </Container>
  </Wrapper>
);

export default Portfolio;
