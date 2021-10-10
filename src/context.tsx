import { createContext } from "react"

export interface AppContext {
    clickedPicture: boolean,
    selectedFrame: string
}
const appContext = createContext<AppContext | null>(null)

export const AppContextProvider = appContext.Provider;
export const AppContextConsumer = appContext.Consumer;

export default appContext;