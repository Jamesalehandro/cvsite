import Hero from '../components/HomePage/Hero';
import Certificate from '../components/HomePage/Certificate';
import Nestuge from '../components/HomePage/Nestuge';
import { DEFAULT_STYLES } from '../styles/customStyles';

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
      <Nestuge />
    </div>
  );
};

export default Home;
