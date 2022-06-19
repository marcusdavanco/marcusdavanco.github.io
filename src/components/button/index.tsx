import { Container } from "./styles";

interface ButtonProps {
  text: string;
  color?: string;
  activeColor?: string;
  isCta?: boolean;
}

export const Button = ({ text, color, isCta, activeColor }: ButtonProps) => {
  return (
    <Container isCta={isCta || false} color={color} activeColor={activeColor}>
      {text}
    </Container>
  );
};
