import React from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

type TimelineElementProps = (typeof experiencesData)[number];

export default function TimelineElement(item : TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: theme === 'light' ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
      intersectionObserverProps={{threshold: 0.5}}
    >
      <div className="flex items-baseline gap-1.5">
        <span ref={ref} className="font-semibold capitalize text-base">{item.title}</span>
        <span className="text-xs text-gray-500">{item.location}</span>
      </div>
      {item.role &&
        <h5 className="capitalize italic text-sm">{item.role}</h5>
      }
      <p className="!mt-1.5 !font-normal text-xs text-gray-700 dark:text-white/75">{item.description}</p>
    </VerticalTimelineElement>
  )
}
