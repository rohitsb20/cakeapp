import { useEffect } from 'react';
import { Routes, useLocation , Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import OrderPage from './pages/PlaceOrder/OrderPage';
import Cart from './pages/Cart/Cart';
import Signin from './pages/Signin/Signin';
import Signup from './pages/signup/Signup';
import Payment from './pages/Payment/Payment';
import useZustandContext from './Zustand/useContextZustand';





function App() {
  const location = useLocation();
  const {authUser} = useZustandContext();

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
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={authUser ? <Navigate to='/Signin' / > : <Signup/>} />
        <Route path="/payment" element={<Payment/>} />
      
      </Routes>
    </>
  );
}

export default App;