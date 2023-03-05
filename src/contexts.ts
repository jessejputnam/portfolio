import { createContext } from "react";

export const Context = createContext({
  openModal: false,
  toggleOpenModal: () => {},
  theme: "dark",
  toggleTheme: () => {}
});
