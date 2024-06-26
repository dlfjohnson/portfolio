'use client';

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at <a className="" href="mailto:dlfjohnson@outlook.com">dlfjohnson@outlook.com</a> or through this form.
      </p>

      <form
        ref={formRef}
        action={async formData => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
          if (formRef.current) {
            formRef.current.reset();
          }
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        ></input>
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
