import styled from "styled-components";

export const Container = styled.button`
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
  max-width: 11.438rem;
  white-space: nowrap;
  grid-column-start: 3;
  justify-self: end;

  &:hover {
    transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;
    background-color: #ff004d;
    color: #000;
  }

  &:active {
    filter: brightness(0.6);
  }
`;
