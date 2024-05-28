"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineElement from '@/components/timeline-element';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => (
            <TimelineElement key={index} {...item} />
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
