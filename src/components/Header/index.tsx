import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container, Wrapper } from './styles';


//----------------------------------------------------------------------------------




//----------------------------------------------------------------------------------



interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  


  return (
    <Container>
      <Wrapper>
        <a href="/"> {`</>`} </a>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.secundary)}
          onColor={shade(0.15, colors.secundary)}
        />
      </Wrapper>
    </Container>
  );
};

export default Header;