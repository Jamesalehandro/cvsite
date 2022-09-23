import Image, { StaticImageData } from 'next/future/image';
import { Flex } from '@chakra-ui/react';

type Props = {
  centerIcon: StaticImageData;
};

const Images = ({ centerIcon }: Props) => {
  return (
    <Flex
      position={'relative'}
      align={'center'}
      zIndex={3000}
      width={{ base: '100%', xl: '600px' }}
      height={'500px'}
      borderRadius={'5px'}
      overflow={'hidden'}
      shadow={'xl'}
    >
      <Image
        src={centerIcon}
        alt={'Nestuge'}
        quality={100}
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
