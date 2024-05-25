import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

type TimelineElementProps = (typeof experiencesData)[number];

export default function TimelineElement(item : TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af"
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
      intersectionObserverProps={{threshold: 0.5}}
    >
      <h3 ref={ref}className="font-semibold capitalize">{item.title}</h3>
      <p className="font-normal !mt-0">{item.location}</p>
      <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
    </VerticalTimelineElement>
  )
}
