import { DirProvider } from "./dirContext";

export const AppContext = ({ children }) => {
  return (
    <>
      <DirProvider>{children}</DirProvider>
    </>
  );
};
