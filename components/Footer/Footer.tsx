import Image from 'next/future/image';
import footerbg from '../../assets/media/img/footerbg.png';
import ButtonComp from '../Button/Button';
import { Flex, Stack, Text, VStack } from '@chakra-ui/react';
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
        <ButtonComp
          width={'300px'}
          bgColor={'transparent'}
          color={DEFAULT_STYLES.whiteColor}
          title={'Back to top'}
          onClick={() => window.scrollTo(0, 0)}
        />
      </Flex>

      <Stack gap={4} align={'center'} pt={'70px'} pb={'64px'}>
        <Text
          minHeight={'36px'}
          fontSize={DEFAULT_STYLES.smallTextFontSize + 5}
          lineHeight={'36px'}
          textAlign={'center'}
          color={DEFAULT_STYLES.whiteColor}
        >
          Connect with me
        </Text>

        <ButtonComp
          width={'300px'}
          bgColor={'transparent'}
          color={DEFAULT_STYLES.whiteColor}
          title={'Twitter'}
          border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
          leftIcon={<FaTwitter />}
          link={'https://www.twitter.com/Chigbo_James'}
        />

        <ButtonComp
          width={'319px'}
          bgColor={'transparent'}
          border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
          color={DEFAULT_STYLES.whiteColor}
          title={'Send an email'}
          leftIcon={<AiFillMail color={DEFAULT_STYLES.whiteColor} />}
          link={'mailto:jamesalehandro@gmail.com'}
        />
      </Stack>

      <Flex
        width={DEFAULT_STYLES.fullWidth}
        height={'78px'}
        align={'center'}
        justifyContent={'center'}
        color={DEFAULT_STYLES.whiteColor}
        position={'relative'}
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
          minW={'308px'}
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
