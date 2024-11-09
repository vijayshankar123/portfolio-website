import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  // const { scrollY } = useScroll();
  // const fadeOut = useTransform(
  //   scrollY,
  //   [window.innerHeight - 64, window.innerHeight * 2],
  //   [1, 0.4],
  // );
  // const moveUp = useTransform(
  //   scrollY,
  //   [window.innerHeight - 64, window.innerHeight * 2],
  //   ['0%', '0%'],
  // );

  return (
    <motion.section
      // style={{ opacity: fadeOut, y: moveUp }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white px-4 py-10"
    >
      <div className="text-center max-w-4xl mx-auto mb-8">
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph with animation */}
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        >
          I’m a dedicated software engineer with a passion for technology and
          problem-solving. With experience in web development and building
          scalable applications, I always strive to learn and grow. When I’m not
          coding, you’ll find me exploring new technologies or enjoying outdoor
          adventures.
        </motion.p>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-3xl">
        <motion.h3
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
        >
          My Skills
        </motion.h3>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[
            { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
            { name: 'React', icon: faReact, color: '#61DAFB' },
            { name: 'HTML', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS', icon: faCss3, color: '#004AE1' },
            { name: 'TypeScript', icon: faCodeBranch, color: '#007ACC' },

            { name: 'Node.js', icon: faNodeJs, color: '#339933' },
            { name: 'Python', icon: faPython, color: '#3776AB' },
            { name: 'Database', icon: faDatabase, color: '#47A248' },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center aspect-square items-center bg-gray-900 rounded-lg p-4 shadow-md hover:bg-gray-500 transition-colors duration-300"
            >
              {
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-4xl mb-2"
                  style={{ color: skill.color }}
                />
              }

              <span className="text-lg text-gray-300">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
