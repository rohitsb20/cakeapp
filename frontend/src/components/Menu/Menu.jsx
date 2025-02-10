/* eslint-disable react/prop-types */
const cakes = [
  {
    name: "Orange Cake",
    image: "./src/assets/images/orange.png",
    category: "orange",
  },

  {
    name: "Chocolate Cake",
    image: "./src/assets/images/chocolate.png",
    category: "chocolate",
  },
  {
    name: "Pineapple Cake",
    image: "./src/assets/images/pineapple.png",
    category: "pineapple",
  },
  {
    name: "Strawberry Cake",
    image: "./src/assets/images/strawberry.png",
    category: "strawberry",
  },
  {
    name: "Oreo Cake",
    image: "./src/assets/images/oreo.png",
    category: "oreo",
  },

  {
    name: "Cherry Cake",
    image: "./src/assets/images/cherry.png",
    category: "cherry",
  },
  {
    name: "Vanilla Cake",
    image: "./src/assets/images/vanilla.png",
    category: "vanilla",
  },
];

const Menu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 mt-5 ">
      <h1 className="pl-[5%] md:pl-[14%] text-gray-700 font-semibold text-2xl">
        Explore Menu
      </h1>
      <p className="pl-[5%] md:pl-[14%] text-gray-600 text-lg">
        Choose your favorite cake from our delicious menu!
      </p>

      <div
        className="flex gap-5 px-4   overflow-x-scroll 
      horizontal-scrollbar transition-ease-in-out
       duration-500"
      >
        {cakes.map((cake, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === cake.category ? "All" : cake.category
              )
            }
            key={index}
            className="flex flex-col items-center  gap-y-1 p-1 "
          >
            <div className="w-[100px] h-[100px]  flex items-center justify-center">
              <img
                src={cake.image}
                alt={cake.name}
                className={`object-cover  transition  p-4 rounded-xl
            duration-300 ${
              category === cake.category ? "border-2 border-pink-400" : ""
            }`}
              />
            </div>
            <h3
              className={`${
                category === cake.category ? "text-pink-400" : ""
              } md:text-[1.4vw] text-[14px]
          cursor-pointer`}
            >
              {cake.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
