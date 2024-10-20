import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit1,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.09",
    img: Fruit2,
  },
  {
    id: 3,
    title: "Fresh Avacado",
    link: "/",
    price: "$5.00",
    img: Fruit3,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: Fruit4,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-2xl font-bold text-left pb-10">Our Menu</h1>
        <div>
          {MenusData.map((menu) => (
            <div key={menu.id}>
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-125 transform -translate-y-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
