import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { email } from '../utils/constants';

const ContactSection = () => {
  //   const { scrollY } = useScroll();
  //   const fadeOut = useTransform(
  //     scrollY,
  //     [window.innerHeight * 2, window.innerHeight * 3],
  //     [1, 0.4],
  //   );
  //   const moveUp = useTransform(
  //     scrollY,
  //     [window.innerHeight * 2, window.innerHeight * 3],
  //     ['0%', '0%'],
  //   );
  return (
    <motion.section
      // style={{ y: moveUp, opacity: fadeOut }}
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 py-16"
    >
      <div className="text-center max-w-3xl mb-16">
        <motion.h2
          className="text-4xl font-bold mb-8 text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          Feel free to reach out to me via email, or if you’re nearby, let’s
          connect in person!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        {/* Email Section */}
        <motion.div
          className="bg-gray-800 text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-yellow-400 text-4xl mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Email Me</h3>
          <p className="text-gray-500 text-lg">{email}</p>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="bg-gray-800 text-center rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-yellow-400 text-4xl mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Location</h3>
          <p className="text-gray-500 text-lg">Kerala, India</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
