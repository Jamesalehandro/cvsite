import Image from 'next/future/image';
import herobg from '../assets/media/img/herobg.png';
import { VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles';
import { LayoutProps } from '../models';
import { customBg } from '../store';

const HeroLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <VStack
        width={DEFAULT_STYLES.fullWidth}
        minHeight={{ base: '600px', xl: '800px' }}
        position='relative'
      >
        <Image
          src={customBg}
          alt='Chigbo James'
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />

        <Image
          src={herobg}
          alt='Chigbo James'
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />
        {children}
      </VStack>
    </>
  );
};

export default HeroLayout;
