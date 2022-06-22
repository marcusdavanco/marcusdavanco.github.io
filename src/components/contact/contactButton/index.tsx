import { useCallback, useState } from "react";

import { Button } from "../../button";
import { ContactModal } from "./contactModal";

export const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenContactModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleCloseContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <ContactModal isOpen={isOpen} onRequestClose={handleCloseContactModal} />
      <Button
        onClick={handleOpenContactModal}
        isCta={true}
        color="#fff"
        activeColor="#fff"
        type="button"
      >
        Contact
      </Button>
    </>
  );
};
