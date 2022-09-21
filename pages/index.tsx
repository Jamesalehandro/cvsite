import Hero from '../components/HomePage/Hero';
import type { NextPage } from 'next';
import { DEFAULT_STYLES } from '../styles/customStyles';

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: DEFAULT_STYLES.fullWidth,
        minHeight: DEFAULT_STYLES.fullHeight,
      }}
    >
      <Hero />
    </div>
  );
};

export default Home;
