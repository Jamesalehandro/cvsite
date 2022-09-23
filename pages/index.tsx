import Hero from '../components/HomePage/Hero';
import Certificate from '../components/HomePage/Certificate';
import Nestuge from '../components/HomePage/Nestuge';
import Dyserf from '../components/HomePage/Dyserf';
import NetFlix from '../components/HomePage/NetFlix';
import { DEFAULT_STYLES } from '../styles/customStyles';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div
      style={{
        width: DEFAULT_STYLES.fullWidth,
        minHeight: DEFAULT_STYLES.fullHeight,
      }}
    >
      <Hero />
      <Certificate />
      <Dyserf />
      <Nestuge />
      <NetFlix />
      <Footer />
    </div>
  );
};

export default Home;
