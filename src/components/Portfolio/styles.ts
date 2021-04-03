import styled from "styled-components";

export const Wrapper = styled.div`  
  padding: 50px 0;
  width: 100%;
  height: 100vh;

  @media (max-width: 767px) {
    height: 150vh;
  }

  color: ${props => props.theme.colors.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  background: ${props => props.theme.colors.backgroundPortfolio};

  overflow: hidden;
`;

export const Cards = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CardOne = styled.div`
  margin: 0 10px;
  @media (max-width: 767px) {
    margin: 10px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1099px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  > a {
    position: absolute;
    top: 32px;

    font-weight: bold;
    font-size: 30px;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 1199px) {
    max-width: 942px;

    padding-top: 30px;
  }

  @media (max-width: 991px) {
    max-width: 721px;

    justify-content: flex-start;

    > a {
      font-size: 28px;
    }
  }

  @media (max-width: 767px) {
    max-width: 100%;

    padding: 0 15px;

    > a {
      top: 20px;

      font-size: 24px;
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  /* border-bottom: white solid 1px; */
  font-size: 56px;
  font-weight: bold;
  line-height: 1.1;

  @media (max-width: 991px) {
    width: 100%;

    padding: 92px 0 10px;

    font-size: 38px;
  }

  @media (max-width: 767px) {
    padding: 87px 0 21px;

    font-size: 32px;
  }
`;
