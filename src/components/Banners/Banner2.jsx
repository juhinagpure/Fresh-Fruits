import Bannerpng from "../../assets/fruit-plate2.png";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* {brand info} */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dolorum eaque quis cumque laboriosam est, debitis aliquid nam
              sequi at eligendi labore ipsum itaque. Illo aliquid nam quod
              magnam explicabo!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              numquam ipsa asperiores ratione inventore fuga aliquam id amet
              iure natus et odit illo explicabo voluptatibus excepturi minus
              adipisci? Deleniti, atque?
            </motion.p>
            {/* {button section} */}
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* {Banner img} */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Bannerpng}
            alt=""
            className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
