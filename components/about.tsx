'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in International Business, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is
        building user interfaces that prioritize modern design and exceptional functionality. 
        The realm of web development in 2024 is rapidly evolving. I'm always looking to
        learn new technologies and explore future trends including Progressive Web Apps, Cybersecurity, and AI-Driven Development.
      </p>
      <p>
        Outside work, I enjoy listening to or playing music, being on the tennis court, and playing with my pup, Kahlúa. I also enjoy traveling with my family, experiencing different cultures, and learning new things. I'm currently learning about voice user interface design and voice search optimization.
      </p>
    </motion.section>
  )
}
