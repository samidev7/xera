'use client';

// Libraries
import { motion } from 'framer-motion';
import Image from 'next/image';

// Utils
import { navVariants } from '../utils/motion';

// Images
import logo from '../assets/logos/Logo.svg';

// Styles
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 flexResponsive`}
    >
      <Image src={logo} alt="search" />

      <a
        className="btn"
        target="_blank"
        rel="noreferrer"
        href="https://app.xera.pro"
      >
        Go to platform
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
