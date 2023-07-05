import { Container, Wrapper, Logo } from "./styles";
import { ContactButton } from "../contactButton";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Marcus Davanco</Logo>
        <ContactButton isCta={false} color="#ff0d62" activeColor="#000" />
      </Wrapper>
    </Container>
  );
};
