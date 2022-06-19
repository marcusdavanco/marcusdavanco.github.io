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
  grid-column-gap: 2.375rem;
  grid-row-gap: 1.813rem;
  place-items: center;

  .luar {
    grid-column-start: 2;
  }

  .ida {
    grid-column-start: 3;
  }
`;
