import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';

const Certificate = () => {
  return (
    <Flex
      width={DEFAULT_STYLES.fullWidth}
      bg={DEFAULT_STYLES.darkColor}
      align={'center'}
      justify={'center'}
    >
      <Flex
        w={DEFAULT_STYLES.containerWidth}
        minH={'400px'}
        justifyContent={'center'}
        align={'center'}
        color={DEFAULT_STYLES.whiteColor}
        gap={{ base: 0, lg: 20 }}
        flexDirection={{ base: 'column', lg: 'row' }}
        py={{ base: 10, lg: 0 }}
      >
        <Text
          width={{ base: DEFAULT_STYLES.fullWidth, md: '480px' }}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Professionally certified by Side Hustle Internship. <br />{' '}
          <span
            style={{
              fontWeight: 400,
              fontSize: DEFAULT_STYLES.smallTextFontSize,
            }}
          >
            See official certificate{' '}
            <a
              href="https://certificate.terrahq.co/44564AHQC22"
              target={'_blank'}
              rel="noopener noreferrer"
              style={{
                color: '#0075FF',
                fontWeight: 400,
              }}
            >
              here
            </a>{' '}
          </span>
        </Text>

        <Box width={'340px'} height={'340px'} position={'relative'}>
          <Image
            src={
              'https://terrahq.nyc3.cdn.digitaloceanspaces.com/certificates/44564AHQC22.png'
            }
            alt="certificate"
            layout={'fill'}
            objectFit={'contain'}
            priority
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Certificate;
