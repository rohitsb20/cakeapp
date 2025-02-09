import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import FoodDisplay from "../../components/FoodDisplay/FoodDislpay";

const Home = () => {
  const [category, setCategory] = useState('All');
  return <div>
    <Hero />
    <Menu  category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
  </div>;
};

export default Home;
