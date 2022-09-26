import Image from 'next/future/image';
import { Box, Flex, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';

const Certificate = () => {
  return (
    <Flex
      width={DEFAULT_STYLES.fullWidth}
      bg={DEFAULT_STYLES.darkColor}
      align={'center'}
      justify={'center'}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <Flex
        w={DEFAULT_STYLES.containerWidth}
        color={DEFAULT_STYLES.whiteColor}
        minH={'400px'}
        justifyContent={'center'}
        align={'center'}
        gap={{ base: 4, lg: 20 }}
        flexDirection={{ base: 'column', md: 'row', xl: 'row' }}
        py={{ base: 10, lg: 0 }}
        px={{ base: 5, xl: 0 }}
      >
        <Text
          width={{ base: DEFAULT_STYLES.fullWidth, md: '480px' }}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          textAlign={{ base: 'center', md: 'left' }}
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

        <Box
          width={{ base: DEFAULT_STYLES.fullWidth, md: '340px' }}
          height={'340px'}
          position={'relative'}
        >
          <Image
            src={
              'https://terrahq.nyc3.cdn.digitaloceanspaces.com/certificates/44564AHQC22.png'
            }
            alt="certificate"
            fill
            priority
            quality={100}
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Certificate;
