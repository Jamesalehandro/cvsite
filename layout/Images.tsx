import { Box } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/future/image';

type Props = {
  leftIcon: StaticImageData;
  centerIcon: StaticImageData;
  rightIcon: StaticImageData;
};

const Images = ({ leftIcon, centerIcon, rightIcon }: Props) => {
  return (
    <Box flex={1} position={'relative'} minH={'600px'}>
      <Box
        position={'absolute'}
        left={{ base: '100%', xl: '100px', '2xl': '180px' }}
        width={{ base: '100%', xl: '300px' }}
        height={'500px'}
        transform={'rotate(-30deg)'}
        bgColor={'#111111'}
        borderRadius={'5px'}
        bottom={'80px'}
      >
        <Image
          src={leftIcon}
          alt={'Nestuge'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box
        position={'absolute'}
        zIndex={3000}
        left={{ base: '100%', xl: '190px', '2xl': '340px' }}
        width={{ base: '100%', xl: '300px' }}
        height={'500px'}
        bgColor={'#333333'}
        borderRadius={'5px'}
        bottom={'80px'}
      >
        <Image
          src={centerIcon}
          alt={'Nestuge'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box
        position={'absolute'}
        left={{ base: '100%', xl: '350px', '2xl': '500px' }}
        width={{ base: '100%', xl: '300px' }}
        height={'500px'}
        transform={'rotate(30deg)'}
        bgColor={'#222222'}
        bottom={'80px'}
        borderRadius={'5px'}
      >
        <Image
          src={rightIcon}
          alt={'Nestuge'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default Images;
