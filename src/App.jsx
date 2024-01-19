import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import Notfound from './components/NotFound/NotFound.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartView from './components/CartView/CartView.jsx'
import Checkout from './components/Checkout/Checkout.jsx'


function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Tienda Online" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
         /*  <Route path="/checkout" element={<Checkout />} /> */

          <Route path="/not-found" element={<Notfound />} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  )
}

export default App
