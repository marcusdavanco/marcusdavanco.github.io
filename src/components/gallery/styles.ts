import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
  border-bottom: 4px solid #ff004d;
  padding-bottom: 3.75rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 22.5rem);
  grid-template-rows: repeat(2, 20rem) 2.75rem;
  place-content: center;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2rem;
`;

export const Card = styled.a`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 4px solid #ff004d;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.05);
`;
