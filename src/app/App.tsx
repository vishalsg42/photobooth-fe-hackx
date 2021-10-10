import { AppContextProvider } from '@/context/index';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '@/routes/index';
import './App.scss';

import { ToastProvider } from 'react-toast-notifications';
import ConfettiWrapper from '../atoms/ConfettiWrapper';
import { BoothContextProvider } from '@/context/boothcontext';

const App = () => {
  return (
    <ToastProvider>
      <BoothContextProvider>
        <AppContextProvider>
          <ConfettiWrapper />
          <Router>
            <Routes />
          </Router>
        </AppContextProvider>
      </BoothContextProvider>
    </ToastProvider>
  );
};

export default App;
