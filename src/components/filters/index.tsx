import { Container, Background, Cards, Card, Text } from "./styles";

//@ts-ignore
import CodeIcon from "../../assets/code_icon.svg?component";
//@ts-ignore
import PaletteIcon from "../../assets/palette_icon.svg?component";
//@ts-ignore
import ToolsIcon from "../../assets/tools_icon.svg?component";
import { useEffect, useState } from "react";

export const Filters = () => {
  const [offset, setOffset] = useState(0);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleScroll= () => setOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (offset > 300) {
      setIsDisplayed(true);
    } 
  }, [offset]);

  return (
    <Container>
      <Background>
        <Cards className={isDisplayed ? "animated" : ""}>
          <Card >
            <ToolsIcon />
            <Text>GNU/Linux</Text>
            <Text>Figma</Text>
            <Text>VSCode / Vim</Text>
            <Text>Git / GitHub</Text>
            <Text>...</Text>
          </Card>
          <Card>
            <PaletteIcon />
            <Text>CSS3</Text>
            <Text>TailwindCSS</Text>
            <Text>Styled Components</Text>
            <Text>ChakraUI / MaterialUI</Text>
            <Text>SASS / LESS</Text>
            <Text>...</Text>
          </Card>
          <Card>
            <CodeIcon />
            <Text>HTML5</Text>
            <Text>JavaScript / TypeScript</Text>
            <Text>ReactJS / NextJS</Text>
            <Text>REST</Text>
            <Text>RTL / Jest</Text>
            <Text>...</Text>
          </Card>
        </Cards>
      </Background>
    </Container>
  );
};
