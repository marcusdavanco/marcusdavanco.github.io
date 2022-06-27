import styled from "styled-components";

export const Container = styled.footer`
  height: 20.625rem;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 720px) {
    height: unset;
  }
`;

export const Wrapper = styled.div`
  width: 75%;
  max-width: 68rem;
  border-top: 4px solid #ff004d;
  padding-top: 3.75rem;
  margin: 3.75rem;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Links = styled.div`
  max-width: 16.063rem;
  width: 100%;
  margin-bottom: 3.75rem;
  display: flex;
  justify-content: space-between;

  svg {
    transition: 0.3s all ease-in-out;
    &:hover {
      transition: 0.3s all ease-in-out;
      transform: scale(1.2);
    }
  }
`;

export const Text = styled.p`
  color: #fff;

  @media (max-width: 720px) {
    text-align: center;
  }
`;
