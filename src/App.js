
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Head from './components/Header/Head';
import Home from './Home';
import Singlepage from './page/Singpage/Singlepage';

function App() {
  return (
    <div>
      <Head />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='singlecart/:id' element={<Singlepage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
