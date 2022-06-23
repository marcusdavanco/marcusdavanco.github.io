import { useCallback, useState } from "react";

import { Button } from "../button";
import { ContactModal } from "./contactModal";

interface ContactButtonProps {
  isCta: boolean;
  color: string;
  activeColor: string;
}

export const ContactButton = ({
  isCta,
  color,
  activeColor,
}: ContactButtonProps) => {
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
        isCta={isCta}
        color={color}
        activeColor={activeColor}
        type="button"
      >
        Contact
      </Button>
    </>
  );
};
