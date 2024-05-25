"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineElement from '@/components/timeline-element';

export default function Experience() {
  return (
    <section
      id="experience"
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
