import { useEffect } from 'react';
import { Routes, useLocation , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import OrderPage from './pages/PlaceOrder/OrderPage';
import Cart from './pages/Cart/Cart';





function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;