import { Container, Wrapper, Logo } from "./styles";
import { Button } from "../button";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Marcus Davanco</Logo>
        <Button type="button" onClick={() => console.log("Contact")}>
          Contact
        </Button>
      </Wrapper>
    </Container>
  );
};
