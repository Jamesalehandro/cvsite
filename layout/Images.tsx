import Image, { StaticImageData } from 'next/future/image';
import { Flex } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles';

type Props = {
  centerIcon: StaticImageData;
};

const Images = ({ centerIcon }: Props) => {
  return (
    <Flex
      position={'relative'}
      align={'center'}
      zIndex={3}
      width={{ base: DEFAULT_STYLES.fullWidth, xl: '600px' }}
      height={{ base: '400px', lg: '500px' }}
      borderRadius={'5px'}
      overflow={'hidden'}
      shadow={'2xl'}
    >
      <Image
        src={centerIcon}
        alt={'Chigbo James'}
        quality={'100'}
        fill
        style={{
          borderRadius: '5px',
          objectPosition: 'center',
          objectFit: 'cover',
        }}
      />
    </Flex>
  );
};

export default Images;
