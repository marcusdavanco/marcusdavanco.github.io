import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  activeColor?: string;
  isCta?: boolean;
  onClick: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({
  color,
  isCta,
  activeColor,
  onClick,
  children,
  type,
  className,
}: ButtonProps) => {
  return (
    <Container
      isCta={isCta || false}
      color={color}
      activeColor={activeColor}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </Container>
  );
};
