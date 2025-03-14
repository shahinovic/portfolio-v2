import { createContext, useState } from "react";

export const dirContext = createContext();
export const DirProvider = ({ children }) => {
  const [dir, setDir] = useState();
  const value = {
    dir,
    setDir,
  };
  return <dirContext.Provider value={value}>{children}</dirContext.Provider>;
};
