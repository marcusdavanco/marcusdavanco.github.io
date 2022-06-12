import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 29.813rem;
  margin: 3.75rem 0;
`;

export const Text = styled.p`
  &:first-of-type,
  &:last-of-type {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.063rem;
    margin-bottom: 2rem;
    color: #dedede;
    max-width: 22.313rem;
    text-align: center;
  }

  &:nth-of-type(2) {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.063rem;
    margin-bottom: 2rem;
    color: #ccc;
    max-width: 47.188rem;
    text-align: center;

    span {
      font-weight: 900;
      margin-left: 0.25rem;
      color: #dedede;
    }
  }
`;
