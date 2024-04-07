import type { Dispatch, FC, PropsWithChildren } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface IUIContext {
  isMobileView: boolean;
  setIsMobileView: Dispatch<boolean>;
}

const UIContext = createContext<IUIContext>({
  isMobileView: false,
  setIsMobileView: () => {},
});

const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  return (
    <UIContext.Provider
      value={{
        isMobileView,
        setIsMobileView,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export { useUIContext, UIContextProvider };
