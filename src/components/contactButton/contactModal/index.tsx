import { useEffect, useState, useCallback, FormEvent } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

//@ts-ignore
import Ellipsis from "../../../assets/ellipsis.svg?component";

import { emailKeys } from "../../../config/emailkey";

import { Button } from "../../button";
import { Container, Text } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ContactModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  useEffect(() => {
    emailjs.init(emailKeys.PUBLIC_KEY);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    setIsSendingMessage(true);

    try {
      await emailjs.sendForm(
        emailKeys.SERVICE_ID,
        emailKeys.TEMPLATE_ID,
        "#myForm"
      );
    } catch (err) {
      console.error(err);
    }

    setIsSendingMessage(false);
    setIsMessageSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }, []);

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
        {!isMessageSent ? (
          <>
            <h2>Thanks for reaching out!</h2>
            <Text>
              Please leave your message below and I’ll return as soon as
              possible.
            </Text>
            <form onSubmit={handleSubmit} id="myForm">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>

              <div className="email">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  required
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <Button
                type="submit"
                isCta={true}
                color="#fff"
                activeColor="#fff"
                onClick={() => {}}
              >
                {isSendingMessage ? <Ellipsis /> : "Send"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <h2 className="success">Your message was sent!</h2>
            <Text className="success">I’ll return as soon as possible.</Text>
          </>
        )}
      </Container>
    </Modal>
  );
};
