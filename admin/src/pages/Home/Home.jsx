
import AddCakes from "../AddCakes/AddCakes";
import { Routes, Route } from "react-router-dom";
import RemoveCakes from "../RemoveItems/RemoveCakes";
import ListCakes from "../ListCakes/ListCakes";


const Home = () => {
  return (
    <div className="p-1 md:p-5">
      <Routes>
        <Route path="/add" element={<AddCakes />} />
        <Route path="/orders" element={<ListCakes />} />
        <Route path="/remove" element={<RemoveCakes />} />
      </Routes>
    </div>
  );
};

export default Home;
