import styled from "styled-components";

export const Container = styled.header`
  background: #000;
  height: 6.25rem;
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
`;

export const Button = styled.button`
  padding: 0.438rem 2.375rem;
  background: transparent;
  color: #ff004d;
  border: 3px solid #ff004d;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;

  &:hover {
    transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;
    background-color: #ff004d;
    color: #000;
  }

  &:active {
    filter: brightness(0.6);
  }
`;
