interface EmailKeyProps {
  PUBLIC_KEY: string;
  SERVICE_ID: string;
  TEMPLATE_ID: string;
}

export const emailKeys: EmailKeyProps = {
  PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
  TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
  SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
};
