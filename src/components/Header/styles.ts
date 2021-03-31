import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  height: 7vh;
  /* position: fixed; */
`;
export const Wrapper = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1099px;
  > a {
    top: 32px;

    font-weight: bold;
    font-size: 30px;
    color: #f5f5f5;
    text-decoration: none;
    &:hover {
    color: ${props => props.theme.colors.link};
    }
  }
`;