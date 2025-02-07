import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  const [category, setCategory] = useState('All');
  return <div>
    <Hero />
    <Menu  category={category} setCategory={setCategory}/>
  </div>;
};

export default Home;
