import ModalsWrapper from '@/app/Modals';
import { useState, useMemo } from 'react';
import { createContext } from 'react';

export interface AppContextState {
  openEmailPopup: boolean;
}

export interface AppContextApi {
  toggleEmailPopup?: any;
}

const appContext: any = createContext<[AppContextState, AppContextApi]>([
  {
    openEmailPopup: false,
  },
  {},
]);

export const AppProvider = appContext.Provider;
export const AppConsumer = appContext.Consumer;

export default appContext;

export const AppContextProvider = ({ children }) => {
  const [openEmailPopup, toggleEmailPopup] = useState(false);
  const context: any = useMemo(() => {
    return [
      {
        openEmailPopup,
      },
      {
        toggleEmailPopup,
      },
    ];
  }, [openEmailPopup, toggleEmailPopup]);

  return (
    <AppProvider value={context}>
      <ModalsWrapper {...context[0]} />
      {children}
    </AppProvider>
  );
};
