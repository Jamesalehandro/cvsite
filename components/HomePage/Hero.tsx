import HeroLayout from '../../layout/HeroLayout';
import Nav from '../NavBar/Nav';
import Image from 'next/future/image';
import ButtonComp from '../Button/Button';
import tree from '../../assets/media/img/tree.png';
import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';
import { cvRoutes } from '../../utils/routes';
import { resumeImg } from '../../store';

const Hero = () => {
  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: cvRoutes.resume, title: 'Online resume', icon: resumeImg },
        ]}
      />

      <Grid
        w={DEFAULT_STYLES.containerWidth}
        justifyContent={'center'}
        minH={'400px'}
        py={{ base: '50px', xl: '140px', '2xl': '180px' }}
        px={{ base: 10, xl: 0 }}
        gap={{ base: '30px', lg: 0, xl: '50px' }}
        zIndex={5}
        justifySelf={'center'}
        alignSelf={'center'}
        alignItems={'center'}
        justifyItems={'center'}
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
      >
        <Stack
          color={DEFAULT_STYLES.whiteColor}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          justifyContent={'center'}
          gap={{ base: 0, xl: '35px' }}
          minH={'500px'}
        >
          <Heading
            fontSize={{ base: 20, xl: 24 }}
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
              base: 20,
              xl: 25,
              '2xl': DEFAULT_STYLES.headerFontSize,
            }}
            lineHeight={'48px'}
            fontFamily={DEFAULT_STYLES.fontFamily}
          >
            Front End Developer
          </Heading>

          <Text
            w={{
              base: DEFAULT_STYLES.fullWidth,
              md: '500px',
              '2xl': '550px',
            }}
            fontSize={{ base: 13, xl: 18 }}
            textAlign={'left'}
            whiteSpace={'pre-wrap'}
            lineHeight={2}
            color={DEFAULT_STYLES.whiteColor}
            display={{ base: 'block', lg: 'none' }}
            fontWeight={400}
          >
            I am a front-end developer specialized in building and occasionally
            designing exceptional digital experiences. Currently, I am focused
            on building accessible and responsive web pages.
          </Text>

          <HStack
            pt={'48px'}
            align={'center'}
            gap={3}
            flexDirection={{
              base: 'column',
              md: 'row',
              lg: 'column',
              xl: 'row',
            }}
          >
            <ButtonComp
              bgColor={DEFAULT_STYLES.whiteColor}
              color={DEFAULT_STYLES.darkColor}
              title={'Download Resume'}
              link={'resume.pdf'}
              download
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
          position={'relative'}
          justifyContent={'flex-end'}
          align={'center'}
          minH={'400px'}
          px={{ base: 4, xl: 0 }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Box
            width={{ base: DEFAULT_STYLES.fullWidth, lg: '580px', xl: '600px' }}
            height={'400px'}
            position={'absolute'}
            top={{ base: 0, xl: '-75px', '2xl': '-70px' }}
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

          <Text
            w={{
              base: DEFAULT_STYLES.fullWidth,
              md: '500px',
              '2xl': '550px',
            }}
            fontSize={{ base: 14, xl: 18 }}
            textAlign={'justify'}
            whiteSpace={'pre-wrap'}
            lineHeight={1.7}
            zIndex={2}
            color={DEFAULT_STYLES.whiteColor}
          >
            I am a front-end developer specialized in building and occasionally
            designing exceptional digital experiences. Currently, I am focused
            on building accessible and responsive web pages.
          </Text>
        </Stack>
      </Grid>
    </HeroLayout>
  );
};

export default Hero;
