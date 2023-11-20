import { createContext, useContext, useState } from "react";
import { Nav } from "../components/Navbar/Nav";
const ControlContext = createContext({});

export function useControl() {
  return useContext(ControlContext);
}

export function ControlProvider({ children }) {
  const [slidesPerView, setSlidesPerView] = useState(0);

  function sliderState(state) {
    setSlidesPerView(state);
  }

  return (
    <ControlContext.Provider
      value={{
        sliderState,
        slidesPerView,
      }}>
      <Nav />
      {children}
    </ControlContext.Provider>
  );
}
