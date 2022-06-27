import styled from "styled-components";

export const Container = styled.header`
  background: #000;
  min-height: 6.25rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80.69%;
  max-width: 72.625rem;
  justify-content: space-between;
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  line-height: 1.5rem;
  font-weight: 700;

  @media (max-width: 820px) {
    max-width: 145px;
  }
`;
