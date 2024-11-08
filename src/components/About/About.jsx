import styles from "./about.module.css";
import BioDataTable from "../BioDataTable/BioDataTable";
import { Link } from "react-router-dom";
import { handleDownloadResume } from "../../utils/download";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.bioSectionWrapper}>
          <h1 className={styles.title} data-aos="slide-right">
            About Me
          </h1>
          <p data-aos="slide-right">I like Building Solutions </p>
          <Link
            data-aos="slide-right"
            className={styles.downloadBtn}
            onClick={() => handleDownloadResume()}>
            <i></i>
            <i></i>
            <span>Download CV</span>
          </Link>
          <BioDataTable />

          <div className={styles.socials}></div>
        </div>

        <div className={styles.storyWrapper} data-aos="zoom-in">
          <p className={styles.story}>
            My journey began as a litigation lawyer in Nigeria. While I enjoyed
            the legal profession, the routine 9-5 work left me yearning for more
            creative outlets beyond traditional lawyering. In November 2020,
            during the Covid-19 pandemic, I discovered my passion for software
            engineering. I started as a self-taught developer, balancing
            learning to code with my full-time legal career. The path wasn't
            easy, but my determination kept me going.
          </p>

          <p className={styles.story}>
            In 2022, I came across the ALX Software Engineering programme.
            Despite my demanding schedule as a lawyer, I seized the opportunity
            and enrolled. The intensive one-year curriculum at ALX Africa proved
            to be transformative, helping me build a solid foundation in
            software development while expanding my technical expertise.
          </p>

          <p className={styles.story}>
            Driven by my growing passion for technology and armed with new
            skills, I made the bold decision to transition fully into software
            development. This move allowed me to focus entirely on what had
            become my true calling - building innovative solutions that bridge
            the gap between technology and business needs.
          </p>

          <p className={styles.story}>
            Today, I'm motivated by technology's transformative power across
            industries. My unique background in law, combined with my software
            engineering skills, gives me a distinct advantage in approaching
            problems from multiple angles. I'm passionate about creating
            impactful software solutions that not only meet technical
            requirements but also deliver real value through user-centric and
            business-focused approaches.
          </p>

          <p className={styles.story}>
            Looking ahead, I aim to leverage my dual expertise in law and
            technology to create innovative solutions that can revolutionize
            legal tech and beyond. My journey from law to code has taught me
            that the most meaningful innovations often happen at the
            intersection of different disciplines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
