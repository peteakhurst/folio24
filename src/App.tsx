import './App.css';
// import Footer from './components/Footer';
// import Grid from './components/Grid';

import Navbar from './components/Navbar';
// import Noise from './components/Noise';
import Home from './pages/Home';
import WorkDetail from './components/WorkDetail';
// import WorkList from './components/WorkList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/work/:id' component={WorkDetail} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
