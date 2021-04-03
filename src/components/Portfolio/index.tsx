import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Cards,
  CardOne,
  
} from "./styles";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

type PortfolioProps = {
  children?: string;
};

const Portfolio: React.FC<PortfolioProps> = () => {
  const classes = useStyles();
  return(
    <Wrapper id="Portfolio">
      <Container>
        <Title>Alguns projetos que eu criei</Title>

      </Container>

      <Cards>
        <CardOne>
          <Card className={classes.root}>
            <CardActionArea target="blank" href="https://central-de-trabalhos-tecnicos.netlify.app/" >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://i.imgur.com/8hbIkC9.png"
                title="CTT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Central de Trabalhos Técnicos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Projeto em desenvolvimento que irá consumir uma API para acessar artigos acadêmicos da URI Santo Ângelo
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="blank" href="https://central-de-trabalhos-tecnicos.netlify.app/">
                Acessar
              </Button>
            </CardActions>
          </Card>
        </CardOne>

        <CardOne>
          <Card className={classes.root}>
            <CardActionArea target="blank" href="https://central-de-trabalhos-tecnicos.netlify.app/" >
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://i.imgur.com/8hbIkC9.png"
                title="CTT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Central de Trabalhos Técnicos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Projeto em desenvolvimento que irá consumir uma API para acessar artigos acadêmicos da URI Santo Ângelo
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="blank" href="https://central-de-trabalhos-tecnicos.netlify.app/">
                Acessar
              </Button>
            </CardActions>
          </Card>
        </CardOne>
      </Cards>
    </Wrapper>
  )
};

export default Portfolio;
