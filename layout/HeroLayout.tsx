import Image from 'next/future/image';
import herobg from '../assets/media/img/herobg.png';
import { VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles/customStyles';
import { LayoutProps } from '../models';
import { customBg } from '../store/shared';

const HeroLayout = ({ children }: LayoutProps) => {
  return (
    <VStack
      width={DEFAULT_STYLES.fullWidth}
      minHeight={DEFAULT_STYLES.fullHeight}
      position={'relative'}
    >
      <Image
        src={customBg}
        alt={'Chigbo James'}
        fill
        style={{
          objectFit: 'cover',
        }}
        priority
      />

      <Image
        src={herobg}
        alt={'Chigbo James'}
        fill
        style={{
          objectFit: 'cover',
        }}
        priority
      />
      {children}
    </VStack>
  );
};

export default HeroLayout;
