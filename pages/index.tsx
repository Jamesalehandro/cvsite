import Hero from '../components/HomePage/Hero';
import type { NextPage } from 'next';
import { DEFAULT_STYLES } from '../styles/customStyles';
import Certificate from '../components/HomePage/Certificate';
import Nestuge from '../components/HomePage/Nestuge';

const Home: NextPage = () => {
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
