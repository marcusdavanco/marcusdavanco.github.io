import { Container } from "./styles";
import { Button } from "../button";

export const Contact = () => {
  return (
    <Container>
      <h2>Let's work together?</h2>
      <Button isCta={true} color="#404040" text="Contact" activeColor="#fff" />
    </Container>
  );
};
