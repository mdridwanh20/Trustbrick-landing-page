import React from 'react';
import { motion } from "motion/react"

const services = [
  {
    title: 'Fast Operations',
    description:
      'Cobuild impresses you with fully responsiveness and highly customization.',
    icon: (
      <svg
        className="w-12 h-12 text-[var(--primaryColor)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Renovation',
    description:
      'Cobuild impresses you with fully responsiveness and highly customization.',
    icon: (
      <svg
        className="w-12 h-12 text-[var(--primaryColor)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: 'Construction',
    description:
      'Cobuild impresses you with fully responsiveness and highly customization.',
    icon: (
      <svg
        className="w-12 h-12 text-[var(--primaryColor)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"
        />
      </svg>
    ),
  },
  {
    title: 'Architecture',
    description:
      'Cobuild impresses you with fully responsiveness and highly customization.',
    icon: (
      <svg
        className="w-12 h-12 text-[var(--primaryColor)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">

        <h2 className="lg:text-4xl text-2xl pt-18 font-bold text-[var(--primaryColor)] mb-10">
          Our Services
        </h2>

        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi
          accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
          odio.
        </p>

        < div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
            key={index}
            whileTap={{ scale: 1.30 }}
            whileHover={{ scale: 1.05 }}
            transition={{duration: 0.5}}

            className="flex flex-col border p-5 border-gray-300 shadow items-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-normal mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>

          ))}
        </ div>


      </div>
    </section>
  );
}
