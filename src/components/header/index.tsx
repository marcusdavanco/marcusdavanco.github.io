import { Container, Wrapper, Logo } from "./styles";
import { Button } from "../button";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Marcus Davanco</Logo>
        <Button text="Contact" />
      </Wrapper>
    </Container>
  );
};
