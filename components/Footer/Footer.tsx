import Image from 'next/future/image';
import footerbg from '../../assets/media/img/footerbg.png';
import ButtonComp from '../Button/Button';
import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { DEFAULT_STYLES } from '../../styles/customStyles';

const Footer = () => {
  return (
    <VStack bgColor={DEFAULT_STYLES.darkColor}>
      <Flex
        width={DEFAULT_STYLES.fullWidth}
        align={'center'}
        justifyContent={'center'}
      >
        <HStack w={{ base: DEFAULT_STYLES.fullWidth, md: '300px' }}>
          <ButtonComp
            width={DEFAULT_STYLES.fullWidth}
            bgColor={'transparent'}
            color={DEFAULT_STYLES.whiteColor}
            title={'Back to top'}
            onClick={() => window.scrollTo(0, 0)}
          />
        </HStack>
      </Flex>

      <Stack
        gap={4}
        align={'center'}
        pt={'70px'}
        pb={'64px'}
        width={DEFAULT_STYLES.fullWidth}
        px={4}
      >
        <Text
          minHeight={'36px'}
          fontSize={DEFAULT_STYLES.smallTextFontSize + 5}
          lineHeight={'36px'}
          textAlign={'center'}
          color={DEFAULT_STYLES.whiteColor}
        >
          Connect with me
        </Text>

        <Box w={{ base: '60%', md: '250px' }}>
          <ButtonComp
            bgColor={'transparent'}
            color={DEFAULT_STYLES.whiteColor}
            title={'Twitter'}
            border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
            leftIcon={<FaTwitter />}
            link={'https://www.twitter.com/Chigbo_James'}
            width={DEFAULT_STYLES.fullWidth}
          />
        </Box>

        <Box w={{ base: '70%', md: '319px' }}>
          <ButtonComp
            bgColor={'transparent'}
            border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
            color={DEFAULT_STYLES.whiteColor}
            title={'Send an email'}
            leftIcon={<AiFillMail color={DEFAULT_STYLES.whiteColor} />}
            width={DEFAULT_STYLES.fullWidth}
            link={'mailto:jamesalehandro@gmail.com'}
          />
        </Box>
      </Stack>

      <Flex
        width={DEFAULT_STYLES.fullWidth}
        height={'78px'}
        align={'center'}
        justifyContent={'center'}
        color={DEFAULT_STYLES.whiteColor}
        position={'relative'}
        px={4}
      >
        <Image
          src={footerbg}
          alt={'Chigbo James'}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Text
          fontSize={DEFAULT_STYLES.smallTextFontSize}
          minW={{ base: DEFAULT_STYLES.fullWidth, md: '308px' }}
          minHeight={'24px'}
          lineHeight={'24px'}
          textAlign={'center'}
          zIndex={5}
        >
          (c) All rights reserved, Chigbo James 2022.
        </Text>
      </Flex>
    </VStack>
  );
};

export default Footer;
