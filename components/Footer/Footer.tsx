import Image from 'next/future/image';
import footerbg from '../../assets/media/img/footerbg.png';
import ButtonComp from '../Button/Button';
import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { DEFAULT_STYLES } from '../../styles';
import { CvRoutes } from '../../utils';

const Footer = () => {
  return (
    <VStack bgColor={DEFAULT_STYLES.darkColor}>
      <HStack w={{ base: DEFAULT_STYLES.fullWidth, md: '300px' }}>
        <ButtonComp
          width={DEFAULT_STYLES.fullWidth}
          bgColor='transparent'
          color={DEFAULT_STYLES.whiteColor}
          title='Back to top'
          onClick={() => {
            scrollTo(0, 0);
          }}
        />
      </HStack>

      <Stack
        width={DEFAULT_STYLES.fullWidth}
        gap={4}
        align='center'
        pt='70px'
        pb='64px'
        px={4}
      >
        <Text
          fontSize={DEFAULT_STYLES.smallTextFontSize}
          color={DEFAULT_STYLES.whiteColor}
          minHeight='36px'
          lineHeight='36px'
          textAlign='center'
        >
          Connect with me
        </Text>

        <Box w={{ base: '60%', md: '250px' }}>
          <ButtonComp
            bgColor='transparent'
            color={DEFAULT_STYLES.whiteColor}
            title='Twitter'
            border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
            leftIcon={<FaTwitter />}
            link={CvRoutes.twitterUrl}
            width={DEFAULT_STYLES.fullWidth}
          />
        </Box>

        <Box w={{ base: '70%', md: '319px' }}>
          <ButtonComp
            bgColor='transparent'
            border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
            color={DEFAULT_STYLES.whiteColor}
            title='Send an email'
            leftIcon={<AiFillMail color={DEFAULT_STYLES.whiteColor} />}
            width={DEFAULT_STYLES.fullWidth}
            link={`mailto:${CvRoutes.gmailUrl}`}
          />
        </Box>
      </Stack>

      <Flex
        width={DEFAULT_STYLES.fullWidth}
        color={DEFAULT_STYLES.whiteColor}
        height='78px'
        align='center'
        justifyContent='center'
        position='relative'
        px={4}
      >
        <Image
          src={footerbg}
          alt='Chigbo James'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Text
          fontSize={DEFAULT_STYLES.smallTextFontSize}
          minW={{ base: DEFAULT_STYLES.fullWidth, md: '308px' }}
          minHeight='24px'
          lineHeight='24px'
          textAlign='center'
          zIndex={5}
        >
          (c) All rights reserved, Chigbo James 2022.
        </Text>
      </Flex>
    </VStack>
  );
};

export default Footer;
