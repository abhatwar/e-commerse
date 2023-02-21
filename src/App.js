import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path="/register" element={<Register/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/products/:id" element={<Product/>}/>
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
