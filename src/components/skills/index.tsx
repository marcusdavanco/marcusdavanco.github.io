import { Container, Background, Cards, Card, Text } from "./styles";

//@ts-ignore
import CodeIcon from "../../assets/code_icon.svg?component";
//@ts-ignore
import PaletteIcon from "../../assets/palette_icon.svg?component";
//@ts-ignore
import ToolsIcon from "../../assets/tools_icon.svg?component";

export const Skills = () => {
  return (
    <Container>
      <Background>
        <Cards>
          <Card>
            <ToolsIcon />
            <Text>GNU/Linux</Text>
            <Text>Figma</Text>
            <Text>VSCode</Text>
            <Text>Git/GitHub</Text>
            <Text>Firebase</Text>
            <Text>...</Text>
          </Card>
          <Card>
            <PaletteIcon />
            <Text>CSS3</Text>
            <Text>Tailwind</Text>
            <Text>Styled Components</Text>
            <Text>SASS/LESS</Text>
            <Text>...</Text>
          </Card>
          <Card>
            <CodeIcon />
            <Text>HTML5</Text>
            <Text>JavaScript/TypeScript</Text>
            <Text>ReactJS/ React Native</Text>
            <Text>RTL / Jest</Text>
            <Text>REST</Text>
            <Text>...</Text>
          </Card>
        </Cards>
      </Background>
    </Container>
  );
};
