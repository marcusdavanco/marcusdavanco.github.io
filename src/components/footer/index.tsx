import { Container, Wrapper, Links, Text } from "./styles";

// @ts-ignore
import Github from "../../assets/github.svg?component";
// @ts-ignore
import Linkedin from "../../assets/linkedin.svg?component";
// @ts-ignore
import Email from "../../assets/email.svg?component";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <a href="#">
            <Github />
          </a>
          <a href="#">
            <Linkedin />
          </a>
          <a href="#">
            <Email />
          </a>
        </Links>
        <Text>© 2022 Marcus Davanço. All rights reserved </Text>
      </Wrapper>
    </Container>
  );
};
