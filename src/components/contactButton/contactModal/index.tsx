import { Button } from "../../button";
import { Container, Text } from "./styles";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ContactModal = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName={"ReactModal__Body--open"}
      overlayClassName={{
        base: "react-modal-overlay",
        afterOpen: "react-modal-overlay--afterOpen",
        beforeClose: "react-modal-overlay--beforeClose",
      }}
      className="react-modal-content"
      closeTimeoutMS={300}
    >
      <Container>
        <Button
          className="react-modal-close"
          type="button"
          onClick={onRequestClose}
          activeColor="#fff"
        >
          X
        </Button>
        <h2>Thanks for reaching out!</h2>
        <Text>
          Please leave your message below and I’ll return as soon as possible.
        </Text>
        <form>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input id="name" />
          </div>

          <div className="email">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />
          </div>

          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>

          <Button
            type="submit"
            isCta={true}
            color="#fff"
            onClick={() => console.log("send")}
            activeColor="#fff"
          >
            Send
          </Button>
        </form>
      </Container>
    </Modal>
  );
};
