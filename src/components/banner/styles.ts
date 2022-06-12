import styled from "styled-components";

import Banner from "../../assets/Banner.jpg";

export const Container = styled.div`
  height: 30rem;
  width: 100%;
  background-image: url(${Banner});
  background-size: cover;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: "Barrio";
  font-size: 3rem;
  color: #fff;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.063rem;
`;
