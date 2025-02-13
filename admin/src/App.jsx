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
      <div className="text-3xl text-red-300">hello <br /> <button className="btn btn-primary">flyonui</button></div>
    </>
  );
}

export default App;
