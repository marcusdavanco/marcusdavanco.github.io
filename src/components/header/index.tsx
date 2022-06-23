import { Container, Wrapper, Logo } from "./styles";
import { ContactButton } from "../contactButton";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Marcus Davanco</Logo>
        <ContactButton isCta={false} color="#f4004d" activeColor="#000" />
      </Wrapper>
    </Container>
  );
};
