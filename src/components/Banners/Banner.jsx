import Bannerpng from "../../assets/fruits-splash.png";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-0 py-14">
        {/* {Banner img} */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Bannerpng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* {brand info} */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:etxt-6xl font-bold uppercase"
            >
              Brand Info
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
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
