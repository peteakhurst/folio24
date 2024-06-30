import './App.css';
// import Footer from './components/Footer';
// import Grid from './components/Grid';
// import Noise from './components/Noise';
// import WorkDetail from './components/WorkDetail';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/work/:id' element={<WorkDetail />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
