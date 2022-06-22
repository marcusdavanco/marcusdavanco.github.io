import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  activeColor?: string;
  isCta?: boolean;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

export const Button = ({
  color,
  isCta,
  activeColor,
  onClick,
  children,
  type,
}: ButtonProps) => {
  return (
    <Container
      isCta={isCta || false}
      color={color}
      activeColor={activeColor}
      onClick={onClick}
      type={type}
    >
      {children}
    </Container>
  );
};
