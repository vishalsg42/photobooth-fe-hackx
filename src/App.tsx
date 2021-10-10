import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import BoothPage from './pages/BoothScreen';
// import HomePage from './pages/HomePage';

const App = () => {
  return (
    // <HomePage />
    <>
      <div className="container-fluid px-0 page">
        <BoothPage />
      </div>
    </>
  );
}

export default App;
