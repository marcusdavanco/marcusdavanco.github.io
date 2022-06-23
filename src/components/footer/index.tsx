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
          <a href="https://github.com/MarcusDavanco" target="_blank">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-davan%C3%A7o-a9940018a/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a href="mailto:march0514s@gmail.com" target="_blank">
            <Email />
          </a>
        </Links>
        <Text>© 2022 Marcus Davanço. All rights reserved </Text>
      </Wrapper>
    </Container>
  );
};
