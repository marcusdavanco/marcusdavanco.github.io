import { Container } from "./styles";
import { Button } from "../button";

export const Contact = () => {
  return (
    <Container>
      <h2>Let's work together?</h2>
      <Button isCta={true} color="#fff" text="Contact" activeColor="#fff" />
    </Container>
  );
};
