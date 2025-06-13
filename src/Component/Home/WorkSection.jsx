import {motion} from "framer-motion"

const workTimeline = [
  {
    title: 'Modern Office Building',
    location: 'New Kingston',
    date: 'Jan 2024 – Apr 2024',
    description: 'Constructed a 5-story commercial building with eco-efficient systems and modern architecture.',
  },
  {
    title: 'Highway Construction',
    location: 'Spanish Town',
    date: 'May 2023 – Dec 2023',
    description: 'Expanded major transportation routes to improve traffic flow and reduce congestion.',
  },
  {
    title: 'Landscape Planning',
    location: 'Negril',
    date: 'Mar 2023 – Jul 2023',
    description: 'Designed and executed sustainable landscaping for a coastal resort development.',
  },
  {
    title: 'Bridge Project',
    location: 'Portmore',
    date: 'Aug 2022 – Feb 2023',
    description: 'Built a structurally reinforced bridge to connect key residential zones and reduce commute times.',
  },
  {
    title: 'Urban City Planning',
    location: 'Downtown Kingston',
    date: 'Jan 2022 – Jun 2022',
    description: 'Created zoning strategies and infrastructure layouts for long-term sustainable city growth.',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-white  ">
      <div className="">
        <h2 className="lg:text-4xl text-2xl pt-27  font-bold text-center text-[var(--primaryColor)] mb-10">Project Timeline</h2>
        <div className="relative border-l-4 border-[var(--primaryColor)] pl-6 space-y-12">

          {workTimeline.map((item, idx) => (

            <motion.div 
            key={idx} 

            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 40}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}

            className="relative group">
              <div className="absolute -left-[9px] w-5 h-5 rounded-full bg-[var(--primaryColor)] ring-4 ring-white"></div>
              <div className="bg-gray-50 p-6 rounded-lg shadow group-hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 italic mb-1">{item.location} — {item.date}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}
