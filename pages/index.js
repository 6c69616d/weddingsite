import Section from '../components/Section/Section';
import Intro from './home';
import Timeline from './timeline';
import Location from './location';
import Accomodation from './accomodation';
import RSVP from './rsvp';
import Faq from './faq';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <style jsx global>{`
        body {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 85%,
            #914555 100%
          );
        }
      `}</style>
      <Section sectionId='home'>
        <Intro />
      </Section>
      <Section sectionId='location'>
        <Location />
      </Section>
      <Section sectionId='accomodation'>
        <Accomodation />
      </Section>
      <Section sectionId='timeline'>
        <Timeline />
      </Section>
      <Section sectionId='rsvp'>
        <RSVP />
      </Section>
      <Section sectionId='faq'>
        <Faq />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
