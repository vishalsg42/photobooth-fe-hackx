import appContext, { AppContextProvider } from "./context";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./routes";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  const context = useContext(appContext);

  return (
    <ToastProvider>
      <AppContextProvider value={context}>
        <Router>
          <Routes />
        </Router>
      </AppContextProvider>
    </ToastProvider>
  );
};

export default App;
