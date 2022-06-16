import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 33.125rem;
`;

export const Background = styled.div`
  width: 100%;
  max-height: 28.75rem;
  background: #111;
  padding-top: 3.75rem;
`;

export const Cards = styled.div`
  display: grid;
  justify-content: center;
  gap: 2.5rem;
  grid-template-columns: repeat(3, 22.563rem);
`;

export const Card = styled.article`
  width: 100%;
  min-height: 29.375rem;
  background-color: #ff004d;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 1.5rem;
  line-height: 2.063rem;
  margin-bottom: 0.625rem;

  &:first-of-type {
    margin-top: 2rem;
  }
`;
