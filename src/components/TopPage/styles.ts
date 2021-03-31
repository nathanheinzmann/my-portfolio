import styled from "styled-components";


export const Wrapper = styled.div`
  
  width: 100%;
  height: 93vh;
  color: ${props => props.theme.colors.text};

  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.backgroundTop};

  overflow: hidden;
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
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    &:hover {
    color: grey;
    }
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
  border-bottom: ${props => props.theme.colors.text} solid 1px;
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

export const Subtitle = styled.p`
  padding: 50px 0 50px 0;
  text-align: center;
  font-size: 20px;

  @media (max-width: 991px) {
    padding-bottom: 25px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const Items = styled.div`
  justify-content: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1199px) {
    padding-bottom: 25px;
  }

  @media (max-width: 991px) {
    padding-bottom: 39px;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    line-height: 1.6;
  }
`;

export const Item = styled.button`
  background: none;
  border: 0;
  outline: 0;
  color: ${props => props.theme.colors.text};
  display: flex;
  position: relative;

  padding: 0 15px;

  font-size: 15px;


  &:first-child, &:nth-child(2), &:nth-child(3){
    &:hover {
      text-decoration: underline;
    }
  }

  &:first-child{
    padding-left: 0;
  }
  
  &::after {
    content: "";
    width: 4px;
    height: 4px;

    position: absolute;
    right: 0;
    top: 50%;

    background-color: ${props => props.theme.colors.text}; //bolinhas entre itens
    border-radius: 50%;

  }

  &:last-child::after {
    width: 0;
    
  }

  @media (max-width: 1199px) {
    &:nth-child(3) {
      /* padding-left: 0; */
      
    }

    &:nth-child(2)::after {
      padding-left: 0;
    }
  }

  @media (max-width: 991px) {
    font-size: 13px;
    font-weight: normal;
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
    &:nth-child(1)::after {
      width: 0;
    }

    &:nth-child(2)::after {
      width: 0;
    }
  }
`;

export const SocialMedias = styled.div `
  display: flex;
  justify-content: center;
  padding: 0 0 50px 0;

  
`;

export const Buttons = styled.a `
  margin: 0 10px;
  color: ${props => props.theme.colors.text};
  &:nth-child(1) {
    &:hover {
      color: #0A66C2;
    }
  }
  &:nth-child(2) {
    &:hover {
      color: grey;
    }
  }
  &:nth-child(3) {
    &:hover {
      color: #D93025;
    }
  }
`;


export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  > p {
    display: flex;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;