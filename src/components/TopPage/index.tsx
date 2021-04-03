import React from "react";
import { scrollIntoView } from "../../utils/helpers";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Switch from 'react-switch';
// import { ThemeContext } from 'styled-components';
// import { shade } from 'polished';
import {
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


// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function Transition(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

type TopPageProps = {
  children?: string;
};

const TopPage: React.FC<TopPageProps> = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick1 = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen1(true);
  };
  const handleClick2 = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen2(true);
  };
  const handleClick3 = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };
  return(
  <Wrapper>
    <Container>
      <Title>Nathan Heinzmann</Title>
      <Items>
        <Item onClick={handleClick1(Transition)}>Desenvolvedor Front End</Item>
        <Item onClick={handleClick2(Transition)}>Estudante</Item>
        <Item onClick={handleClick3(Transition)}>Apaixonado por tecnologia</Item>
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
        <ExpandMoreIcon />
        </p>
      </Link>


      <div>
        <Snackbar
          open={open1}
          onClose={handleClose}
          TransitionComponent={transition}
          message="Há +/- 1 ano estudando desenvolvimento front end, com uma pequena passagem no Angular e agora me aprofundando em React."
          key={transition ? transition.name : ''}
        />
        <Snackbar
          open={open2}
          onClose={handleClose}
          TransitionComponent={transition}
          message="Estou no sétimo semestre do curso de Ciência da Computação, cursando na URI Santo Ângelo."
          key={transition ? transition.name : ''}
        />
        <Snackbar
          open={open3}
          onClose={handleClose}
          TransitionComponent={transition}
          message="Um simples jovem fuçador de fóruns da internet, fascinado pelo aprendizado na área da tecnologia."
          key={transition ? transition.name : ''}
        />
      </div>
    </Container>
  </Wrapper>
);
}
export default TopPage;
