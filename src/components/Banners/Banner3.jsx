import Bannerpng from "../../assets/banner-bg.jpg";
import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";
import { IoBagHandle } from "react-icons/io5";

const bgStyle = {
  backgroundImage: `url(${Bannerpng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-0 py-14 rounded-3xl"
      >
        {/* {Blank div} */}
        <div></div>
        {/* {brand info} */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>

            {/* {button section} */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandle />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
