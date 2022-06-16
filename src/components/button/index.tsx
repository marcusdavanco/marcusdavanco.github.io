import { Container } from "./styles";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <Container>{text}</Container>;
};
