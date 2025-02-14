import AddCakes from "../AddCakes/AddCakes";
import { Routes, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import ListCakes from "../ListCakes/ListCakes";

const Home = () => {
  return (
    <div className="p-1 md:p-5">
      <Routes>
        <Route path="/list" element={<ListCakes />} />
        <Route path="/add" element={<AddCakes />} />
        <Route path="/" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default Home;
