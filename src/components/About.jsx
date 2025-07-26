
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import propTypes from 'prop-types';
// const ServiceCard = () => {
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

ServiceCard.propTypes = {
  index: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A multidisciplinary developer and designer with a B.Sc. in Computer Science and Engineering. I specialize in full-stack web development using the MERN stack and have hands-on experience in both technical and creative fields, including graphic design and video editing.

        Currently, I&apos;m actively working on three real-life projects:

        All Muslim Living - a lifestyle platform for the Muslim community,

        Dunlin Nextera Ltd - a consultancy-focused platform,

        and another upcoming large-scale e-commerce system

        These projects focus on practical, real-world use cases involving complex data, user management, and scalable architectures.

        Previously, I led my team to win 3rd place in a national hackathon with our environmental tech project, &quot;ClimateWatch&quot;, which featured a carbon footprint calculator and a point-based reward system for eco-friendly actions.

        I’m passionate about building purposeful technology and always exploring ways to merge design, development, and impact-driven innovation.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 md:col-2'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}
            {...service} />
        )
        )
        }
      </div>
    </>
  )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
// export default About