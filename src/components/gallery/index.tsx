import { Container, Content, Card } from "./styles";
import { Button } from "../button";

export const Gallery = () => {
  return (
    <Container>
      <h2>My latest work</h2>
      <Content>
        <Card href="https://github.com/marcusdavanco/bookwise" imageUrl="https://github.com/marcusdavanco/bookwise/raw/main/.github/bookwise.png" />
        <Card href="https://github.com/marcusdavanco/design-system" imageUrl="https://github.com/marcusdavanco/design-system/raw/main/.github/design_system.png" />
        <Card href="https://github.com/marcusdavanco/ignite-shop" imageUrl="https://github.com/marcusdavanco/ignite-shop/raw/main/.github/ignite-shop.png" />
        <Card href="https://github.com/marcusdavanco/github-blog" target="_blank" imageUrl="https://github.com/marcusdavanco/github-blog/raw/main/.github/github-blog.png" animate />
        <Card href="https://github.com/marcusdavanco/coffe-delivery" target="_blank" imageUrl="https://github.com/marcusdavanco/coffe-delivery/raw/main/.github/coffe-delivery.png" animate />
        <Card href="https://github.com/marcusdavanco/todo-list" target="_blank" imageUrl="https://github.com/marcusdavanco/todo-list/raw/main/.github/preview_web.png" />
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
