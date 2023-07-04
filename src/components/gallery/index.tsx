import { Container, Content, Card } from "./styles";
import { Button } from "../button";

export const Gallery = () => {
  return (
    <Container>
      <h2>My latest work</h2>
      <Content>
        <Card href="#" />
        <Card href="#" />
        <Card href="#" />
        <Card href="#" />
        <Card href="#" />
        <Card href="#" />
        <Button
          activeColor="#fff"
          color="#fff"
          onClick={() =>
            window.open(
              "https://github.com/MarcusDavanco?tab=repositories",
              "_blank"
            )
          }
          type="button"
        >
          view more
        </Button>
      </Content>
    </Container>
  );
};
