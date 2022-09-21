import Image from 'next/image';
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
        layout={'fill'}
        objectFit={'cover'}
        priority
        loading={'eager'}
      />
      <Image
        src={herobg}
        alt={'Chigbo James'}
        layout={'fill'}
        objectFit={'cover'}
        priority
        loading={'eager'}
      />
      {children}
    </VStack>
  );
};

export default HeroLayout;
