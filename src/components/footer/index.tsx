import { Container, Wrapper, Links, Text } from "./styles";

// @ts-ignore
import Github from "../../assets/github.svg?component";
// @ts-ignore
import Linkedin from "../../assets/linkedin.svg?component";
// @ts-ignore
import Email from "../../assets/email.svg?component";
// @ts-ignore
import Dribbble from "../../assets/dribbble.svg?component";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <a href="https://github.com/marcusdavanco" target="_blank">
            <Github />
          </a>
          <a href="https://dribbble.com/marcusdavanco" target="_blank">
            <Dribbble />
          </a>
          <a
            href="https://www.linkedin.com/in/marcusdavanco/"
            target="_blank"
          >
            <Linkedin />
          </a>
         
          <a href="mailto:marcusdavanco@gmail.com" target="_blank">
            <Email />
          </a>
        </Links>
        <Text>© 2023 Marcus Davanço. All rights reserved </Text>
      </Wrapper>
    </Container>
  );
};
