import type { NextPage } from 'next';
import Hero from '../components/HomePage/Hero';

const Home: NextPage = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Hero />
    </div>
  );
};

export default Home;
