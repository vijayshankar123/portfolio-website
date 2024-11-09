import { Helmet } from 'react-helmet';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
// import ExperienceSection from '../components/ExperienceSection';
import { FC } from 'react';
import ContactSection from '../components/ContactSection';

type Props = {
  refMapping: {
    about: React.RefObject<HTMLDivElement>;
    experience: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  scrollToSection: Function;
};

const Homepage: FC<Props> = ({ refMapping, scrollToSection }) => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to Vijay Shankar's portfolio website"
        />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Vijay Shankar's portfolio website"
        />
      </Helmet>
      <MainSection scrollToSection={scrollToSection} />
      {/* section for scroll */}
      <div ref={refMapping.about} className="relative -top-10"></div>
      <AboutSection />
      <div ref={refMapping.experience} className="relative -top-10"></div>
      {/* <ExperienceSection /> */}
      <div ref={refMapping.contact} className="relative -top-10"></div>

      <ContactSection />
    </div>
  );
};

export default Homepage;
