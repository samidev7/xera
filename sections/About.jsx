'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Lorem ipsom" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'about', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Xera</span> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quasi velit voluptas
        consequatur blanditiis consequuntur culpa.
        <span className="font-extrabold text-white">
          Lorem ipsum dolor sit amet.
        </span>{' '}
        Lorem ipsum dolor sit.{' '}
        <span className="font-extrabold text-white">AB</span> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Minus quod deserunt voluptatum
        nulla. Nesciunt debitis corporis libero? Earum, consequuntur ea?
        <span className="font-extrabold text-white">explore</span> Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
