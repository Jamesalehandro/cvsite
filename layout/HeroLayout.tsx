import mostusedbg from '../assets/media/img/mostusedbg.svg';
import herobg from '../assets/media/img/herobg.svg';
import { VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from 'next/image';

interface Prop {
  children: ReactNode;
}

const HeroLayout = ({ children }: Prop) => {
  return (
    <VStack width={'100%'} minHeight={'100vh'} position={'relative'}>
      <Image
        src={mostusedbg}
        alt={'Chigbo James'}
        layout="fill"
        objectFit="cover"
      />
      <Image
        src={herobg}
        alt={'Chigbo James'}
        layout="fill"
        objectFit="cover"
      />
      {children}
    </VStack>
  );
};

export default HeroLayout;
