import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetAllProduct from './pages/GetAllProduct'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GetFirstProduct from './pages/GetFirstproduct';
import MiddleProduct from './pages/MiddleProduct';
import LastProduct from './pages/Lastproduct';
import RegularProduct from './pages/RegularProduct';


function App() { 


  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getallproduct" element={<GetAllProduct />} />
        <Route path="/getfirstproduct" element={<GetFirstProduct />} />
        <Route path="/middleproduct" element={<MiddleProduct />} />
        <Route path="/lastproduct" element={<LastProduct />} />
        <Route path="/regularproduct" element={<RegularProduct />} />
      </Routes>
      <div>
      <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
