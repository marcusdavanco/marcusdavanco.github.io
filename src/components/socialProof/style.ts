import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3.75rem;
`;

export const Background = styled.section`
  height: 38.125rem;
  background-color: #ff004d;
  padding: 3.75rem 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 16.313rem);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  place-items: center;

  .luar {
    grid-column-start: 2;
  }

  .ida {
    grid-column-start: 3;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-row-gap: 1rem;
    /* grid-column-gap: unset; */
    grid-template-rows: unset;
    justify-content: space-around;
    place-items: unset;
    width: 80.69%;
    align-items: center;

    svg {
      width: 35%;
    }
  }
`;
