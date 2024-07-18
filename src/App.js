
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Checkout from './components/Checkout';
import store from '../src/store'
import { Provider } from 'react-redux';
import ProductPage from './components/ProductPage';
import {Routes,Route, Navigate } from "react-router-dom"
function App() {
  return (
<Provider store={store}>
    <>
    <header>
    <Header />
    </header>
    <main>
    <Routes>
   <Route path="/"  element={<Navigate to= "/home" />} />
   <Route path="/home"  element={<Banner />} />
   <Route path="/art"  element={<ProductPage/>} />
   <Route path="/checkout"  element={<Checkout/>} />
    {/* <Banner /> */}
    
    </Routes>
    </main>
    <footer>
    <Footer />
    </footer>
    </>
    </Provider>
  );
}

export default App;
