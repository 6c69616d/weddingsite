import Section from '../components/Section/Section';
import Intro from './home';
import Timeline from './timeline';
import Location from './location';
import Accomodation from './accomodation';
import RSVP from './rsvp';
import Faq from './faq';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
