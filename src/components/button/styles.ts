import styled, { css } from "styled-components";

interface ButtonProps {
  color?: string;
  isCta: boolean;
  activeColor?: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export const Container = styled.button<ButtonProps>`
  padding: 0.438rem 2.375rem;
  ${(props) =>
    props.isCta
      ? css`
          background: linear-gradient(180deg, #ff004c 0%, #a60028 100%); ;
        `
      : css`
          background: transparent;
        `}
  ${(props) =>
    css`
      color: ${props.color || "#ff004d"};
    `}
  ${(props) =>
    props.isCta
      ? css`
          border: 3px solid #404040;
        `
      : css`
          border: 3px solid #ff004d;
        `}
  
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  transition: 0.3s all ease-in-out;
  max-width: 11.438rem;
  white-space: nowrap;
  grid-column-start: 3;
  justify-self: end;

  &:hover {
    transition: 0.3s all ease-in-out, 0.3s;
    ${(props) =>
      props.isCta
        ? css`
            border-color: #fff;
            color: #fff;
          `
        : css`
            background-color: #ff004d;
            color: #000;
          `}
    ${(props) =>
      props.activeColor
        ? css`
            color: ${props.activeColor};
          `
        : css`
            color: #000;
          `}
  }

  &:active {
    filter: brightness(0.6);
  }
`;
