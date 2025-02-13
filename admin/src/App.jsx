import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

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
      <div className="min-h-screen border-2 border-blue-400">
        <Navbar />
        <div className="flex  ">
          <div className="max-w-[20%] ">
            <Sidebar />
          </div>
          <div className="min-w-[90%] flex">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
