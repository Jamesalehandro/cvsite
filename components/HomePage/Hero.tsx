import HeroLayout from '../../layout/HeroLayout';
import Nav from '../NavBar/Nav';
import Image from 'next/future/image';
import ButtonComp from '../Button/Button';
import resumeIcon from '../../assets/media/img/onlineresume.png';
import tree from '../../assets/media/img/tree.png';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { cvRoutes } from '../../utils/routes';
import { DEFAULT_STYLES } from '../../styles/customStyles';

const Hero = () => {
  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: '/resume', title: 'Online resume', icon: resumeIcon },
        ]}
      />

      <Flex
        w={DEFAULT_STYLES.containerWidth}
        justifyContent={'center'}
        minH={'400px'}
        py={{ base: '50px', xl: '140px', '2xl': '180px' }}
        gap={{ base: '30px', xl: '50px' }}
        zIndex={2}
        justifySelf={'center'}
        alignSelf={'center'}
      >
        <Stack
          color={DEFAULT_STYLES.whiteColor}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          justifyContent={'center'}
          gap={'35px'}
          flex={1}
        >
          <Heading
            fontSize={24}
            fontFamily={DEFAULT_STYLES.fontFamily}
            lineHeight={'36px'}
          >
            Hi, I am
          </Heading>

          <Heading
            fontFamily={DEFAULT_STYLES.fontFamily}
            fontSize={{ base: '30px', xl: '56px' }}
            lineHeight={'84px'}
          >
            Chigbo James
          </Heading>

          <Heading
            fontSize={{
              base: 25,
              xl: 25,
              '2xl': DEFAULT_STYLES.headerFontSize,
            }}
            lineHeight={'48px'}
            fontFamily={DEFAULT_STYLES.fontFamily}
          >
            Front End Developer
          </Heading>

          <HStack pt={'48px'} align={'center'} gap={3}>
            <ButtonComp
              bgColor={DEFAULT_STYLES.whiteColor}
              color={DEFAULT_STYLES.darkColor}
              title={'Case studies'}
              internalLink={cvRoutes.caseStudy}
            />

            <ButtonComp
              bgColor={'transparent'}
              color={DEFAULT_STYLES.whiteColor}
              title={'Connect with me'}
              border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
              link={'https://www.twitter.com/Chigbo_James'}
            />
          </HStack>
        </Stack>

        <Stack
          flex={1}
          position={'relative'}
          justifyContent={'flex-end'}
          align={'center'}
        >
          <Box
            width={'600px'}
            height={'400px'}
            position={'absolute'}
            top={{ base: 0, xl: '-90px', '2xl': '-70px' }}
            userSelect={'none'}
          >
            <Image
              src={tree}
              alt={'tree'}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>

          <Flex
            color={DEFAULT_STYLES.whiteColor}
            zIndex={2}
            gap={2}
            alignItems={'flex-start'}
          >
            <Text
              w={{
                base: DEFAULT_STYLES.fullWidth,
                xl: '400px',
                '2xl': '550px',
              }}
              fontSize={18}
              textAlign={'justify'}
              whiteSpace={'pre-wrap'}
              lineHeight={1.7}
            >
              I am a front-end developer specialized in building and
              occasionally designing exceptional digital experiences. Currently,
              I am focused on building accessible and responsive web pages
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </HeroLayout>
  );
};

export default Hero;
