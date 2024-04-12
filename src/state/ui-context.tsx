import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useContext } from 'react';
import { useWindowDimensions } from '../components/hooks/use-window-dimensions';
import { MOBILE_VIEW_WIDTH } from '../constants';

interface IUIContext {
  isMobileView: boolean;
}

const UIContext = createContext<IUIContext>({
  isMobileView: false,
});

const isMobileWidth = (width = window.innerWidth): boolean => {
  return width <= MOBILE_VIEW_WIDTH;
};

const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowDimensions();

  const isMobileView = isMobileWidth(width);

  return (
    <UIContext.Provider
      value={{
        isMobileView,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export { UIContextProvider, useUIContext };
