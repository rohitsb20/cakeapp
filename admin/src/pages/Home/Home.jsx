
import AddCakes from "../AddCakes/AddCakes";
import { Routes, Route } from "react-router-dom";
import RemoveCakes from "../RemoveItems/RemoveCakes";
import ListCakes from "../ListCakes/ListCakes";


const Home = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddCakes />} />
      <Route path="/orders" element={<ListCakes />} />
      <Route path="/remove" element={<RemoveCakes />} />
    </Routes>
  );
};

export default Home;
