import Modal from "react-modal";

//@ts-ignore
import Ellipsis from "../../../assets/ellipsis.svg?component";
import { Button } from "../../button";
import { Container, Text } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";


const contactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(3).max(500),
});

type ContactFormData = z.infer<typeof contactSchema>;
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ContactModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const { register, handleSubmit, formState: { isSubmitted, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const [_, handleContact] = useFormspree('mjvqvbrg')


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
        {!isSubmitted ? (
          <>
            <h2>Thanks for reaching out!</h2>
            <Text>
              Please leave your message below and I’ll return as soon as
              possible.
            </Text>
            <form onSubmit={handleSubmit(handleContact)}>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  autoComplete="off"
                  {...register("name")}
                />
              </div>

              <div className="email">
                <label htmlFor="email">E-mail</label>
                <input
                  autoComplete="off"
                  {...register("email")}
                />
              </div>

              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  autoComplete="off"
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                isCta={true}
                color="#fff"
                activeColor="#fff"
                onClick={() => { }}
              >
                {isSubmitting ? <Ellipsis /> : "Send"}
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
