import { Box } from '@chakra-ui/react';

const Images = () => {
  return (
    <Box flex={1} position={'relative'} minH={'600px'}>
      <Box
        position={'absolute'}
        left={{ base: '100%', xl: '50px', '2xl': '180px' }}
        top={'-50px'}
        width={{ base: '100%', xl: '300px', '2xl': '360px' }}
        height={'600px'}
        transform={'rotate(-30deg)'}
        bgColor={'#111111'}
        borderRadius={'5px'}
        sx={{
          '@media (min-width: 1440px) and (max-width:1800px)': {
            width: '330px',
          },
        }}
      />

      <Box
        position={'absolute'}
        zIndex={3000}
        left={{ base: '100%', xl: '150px', '2xl': '340px' }}
        width={{ base: '100%', xl: '300px', '2xl': '360px' }}
        height={'600px'}
        bgColor={'#333333'}
        borderRadius={'5px'}
        sx={{
          '@media (min-width: 1440px) and (max-width:1800px)': {
            width: '330px',
          },
        }}
      />

      <Box
        position={'absolute'}
        left={{ base: '100%', xl: '300px', '2xl': '500px' }}
        top={3}
        width={{ base: '100%', xl: '300px', '2xl': '360px' }}
        height={'600px'}
        transform={'rotate(30deg)'}
        bgColor={'#222222'}
        borderRadius={'5px'}
        sx={{
          '@media (min-width: 1440px) and (max-width:1800px)': {
            width: '330px',
          },
        }}
      />
    </Box>
  );
};

export default Images;
