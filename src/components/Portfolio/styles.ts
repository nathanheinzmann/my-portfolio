import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  height: 100vh;
  color: white;

  display: flex;
  justify-content: center;


  background: #22233F;

  overflow: hidden;

  @media (max-width: 991px) {
    height: 554px;
  }

  @media (max-width: 767px) {
    height: 578px;
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
  font-size: 75px;
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
