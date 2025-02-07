import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';





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
      <div className='font-normal text-3xl'>hello</div>
    </>
  );
}

export default App;