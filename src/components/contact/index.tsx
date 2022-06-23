import { Container } from "./styles";
import { ContactButton } from "../contactButton";

export const Contact = () => {
  return (
    <Container>
      <h2>Let's work together?</h2>
      <ContactButton isCta={true} color="#fff" activeColor="#fff" />
    </Container>
  );
};
