import React from 'react';
import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '../utils/motion';

import styles from '../styles';

const Slider = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        helo
      </motion.h1>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative text-white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat
        molestiae iste sed voluptate beatae harum repellendus. Deserunt, rerum
        vel.
      </motion.div>
    </motion.div>
  </section>
);

export default Slider;
