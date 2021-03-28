import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { scrollIntoView } from "../../utils/helpers";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import {
  Arrow,
  Buttons,
  Container,
  Items,
  Wrapper,
  Title,
  Item,
  Link,
  Subtitle,
  SocialMedias
} from "./styles";



type TopPageProps = {
  children?: string;
};

const TopPage: React.FC<TopPageProps> = () => (
  <Wrapper>
    <Container>
      <a href="/"> {`</>`} </a>
      <Title>Nathan Heinzmann</Title>
      <Items>
        <Item>Desenvolvedor Front End</Item>
        <Item>Estudante</Item>
        <Item>Apaixonado por tecnologia</Item>
      </Items>
      <Subtitle>
        Acesse minhas redes sociais
      </Subtitle>

      <SocialMedias>
        <Buttons href="https://www.linkedin.com/in/nathan-heinzmann-616216141/"><LinkedInIcon style={{ fontSize: 50 }} /></Buttons>
        <Buttons href="https://github.com/nathanheinzmann" ><GitHubIcon style={{ fontSize: 50 }} /></Buttons>
        <Buttons href="mailto:nathanhph@gmail.com" ><MailIcon style={{ fontSize: 50 }} /></Buttons>
      </SocialMedias>

      

      <Link>
        <p onClick={() => scrollIntoView("Portfolio", "smooth")}>
          Portfólio
          {useMediaQuery("(max-width: 991px)") && <span>?</span>}
        </p>
        <Arrow src="assets/svg/down-24-bold.svg" width="20px" alt="icon" />
      </Link>

    </Container>
  </Wrapper>
);

export default TopPage;
