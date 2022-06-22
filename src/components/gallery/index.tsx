import { Container, Content, Card } from "./styles";
import { Button } from "../button";

export const Gallery = () => {
  return (
    <Container>
      <h2>My recent work</h2>
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
          onClick={() => console.log("view more")}
          type="button"
        >
          view more
        </Button>
      </Content>
    </Container>
  );
};
