import { IoBagHandle } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* {Brand Info} */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left py-14 space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </h1>
            <p className="text-2xl tracking-wide">
              Order Now For Fresh Healthy Life
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a
              tempora vitae facere praesentium itaque doloribus sit sunt
              consequatur nesciunt, ipsa quasi doloremque animi ratione officia
              culpa ex earum quos.
            </p>
            {/* {button section} */}
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex gap-2">
                <span>
                  <IoBagHandle />
                </span>
                Order Now
              </button>
            </div>
          </div>
        </div>
        {/* {Hero Images} */}
        <div className="flex justify-center items-center">
          <img
            src={HeroPng}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          ></img>
        </div>

        {/* {Leaf Image} */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <img src={LeafPng} alt="" className="w-full md:max-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
