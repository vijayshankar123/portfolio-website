import { motion, useScroll, useTransform } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import styles

const ExperienceSection = () => {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(
    scrollY,
    [window.innerHeight * 2, window.innerHeight * 3],
    [1, 0.4],
  );
  const moveUp = useTransform(
    scrollY,
    [window.innerHeight * 2, window.innerHeight * 3],
    ['0%', '0%'],
  );

  return (
    <motion.section
      style={{ y: moveUp, opacity: fadeOut }}
      className="min-h-screen bg-gray-900 text-white px-6 py-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          Professional Experience
        </motion.h2>

        {/* Timeline Component */}
        <VerticalTimeline>
          {/* Experience 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fas fa-briefcase"></i>} // FontAwesome icon or use custom SVG
            style={{
              background: 'rgb(25, 25, 25)', // Custom background color to match section
              color: '#fff', // Ensure text color is white for contrast
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
              marginLeft: 'auto', // Align to the right side
              marginRight: 'auto', // Align to the left side
            }}
          >
            <motion.h3
              className="vertical-timeline-element-title text-xl font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Software Engineer at ABC Corp.
            </motion.h3>
            <motion.p
              className="vertical-timeline-element-description"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Led a team to develop scalable web applications using React,
              Node.js, and MongoDB. Improved user experience and performance.
            </motion.p>
          </VerticalTimelineElement>

          {/* Experience 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - May 2020"
            iconStyle={{ background: 'rgb(255, 87, 34)', color: '#fff' }}
            icon={<i className="fas fa-briefcase"></i>}
            style={{
              background: 'rgb(25, 25, 25)', // Custom background color to match section
              color: '#fff',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
              marginLeft: 'auto', // Align to the right side
              marginRight: 'auto', // Align to the left side
            }}
          >
            <motion.h3
              className="vertical-timeline-element-title text-xl font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Junior Developer at XYZ Ltd.
            </motion.h3>
            <motion.p
              className="vertical-timeline-element-description"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Worked on various projects focused on backend development with
              Express.js and database management with PostgreSQL.
            </motion.p>
          </VerticalTimelineElement>

          {/* Experience 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2016 - Dec 2017"
            iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
            icon={<i className="fas fa-briefcase"></i>}
            style={{
              background: 'rgb(25, 25, 25)', // Custom background color to match section
              color: '#fff',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
              marginLeft: 'auto', // Align to the right side
              marginRight: 'auto', // Align to the left side
            }}
          >
            <motion.h3
              className="vertical-timeline-element-title text-xl font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Intern Developer at WebTech Solutions
            </motion.h3>
            <motion.p
              className="vertical-timeline-element-description"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Contributed to frontend development using HTML, CSS, and
              JavaScript. Assisted in building user interfaces and optimizing
              web pages.
            </motion.p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
