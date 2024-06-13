"use client";

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

type ProjectImgProps = {
  index: number;
  title: string;
  url: string | StaticImageData;
};

const ProjectImg = ({
  index,
  title,
  url
}: ProjectImgProps) => (
  <Image
    src={url}
    alt={title}
    quality={95}
    className={clsx({
      'top-12 -right-40 group-even:-left-40': index === 0,
      'bottom-0 -right-[9rem] group-even:-left-[9rem]': index === 1,
      'absolute hidden sm:block w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial]': true
    })}
  />
);

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrls
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={clsx({
          'relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[38rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white': true,
          'sm:!h-[20rem]': !imageUrls,
        })}
      >
      <div
        className={clsx({
          'pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]': true,
          'sm:!ml-0 sm:!max-w-[100%] sm:!pl-0': !imageUrls,
        })}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {
              tags.map((tag, index) => (
                <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</li>
              ))
            }
          </ul>
      </div>
      {imageUrls &&
        imageUrls.map((url, i) => (
          <ProjectImg
            key={i}
            index={i}
            title={title}
            url={url}
          />
        ))
      }
      </section>
    </motion.div>
  );
}