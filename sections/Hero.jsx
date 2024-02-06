'use client';

// Libraries
import { motion } from 'framer-motion';
import Image from 'next/image';

// Utils
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

// Images
import aboutHero from '../assets/logos/aboutHero.png';

// Styles
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          XERA
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="flex justify-center items-center">
          <Image
            src={aboutHero}
            alt="hero_cover"
            className="w-full object-top sm:h-[500px] h-[350px] object-contain z-10 relative heroImage"
          />
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.3, 2)}
          className="w-full flex justify-end  -mt-[200px] ml-[50px]  relative z-10"
        >
          <img
            src="/Sphere05.png"
            alt="stamp"
            className="sm:w-[355px] w-[300px] sm:h-[355px] h-[300px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
