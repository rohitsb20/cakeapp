import { useEffect } from 'react';
import { Routes, useLocation , Route} from 'react-router-dom';
import Home from './pages/Home/Home';





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
    
      </Routes>
    </>
  );
}

export default App;