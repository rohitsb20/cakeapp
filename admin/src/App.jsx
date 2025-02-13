import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {

  const location = useLocation();


  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <>
     hello
    </>
  );
}

export default App;
