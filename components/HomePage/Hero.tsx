import SummaryText from './SummaryText';
import Nav from '../NavBar/Nav';
import Image from 'next/future/image';
import ButtonComp from '../Button/Button';
import profile2 from '../../assets/media/img/profile2.png';
import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles';
import { cvRoutes } from '../../utils';
import { resumeImg } from '../../store';
import { HeroLayout } from '../../layout';

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
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(2,1fr)',
        }}
      >
        <Stack
          color={DEFAULT_STYLES.whiteColor}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          justifyContent={'center'}
          gap={{ base: 0, xl: '35px' }}
          minH={'500px'}
        >
          <Heading
            fontSize={{ base: '1.25rem', xl: '1.5rem' }}
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
              base: '1.25rem',
              xl: '1.6rem',
              '2xl': DEFAULT_STYLES.headerFontSize,
            }}
            lineHeight={'48px'}
            fontFamily={DEFAULT_STYLES.fontFamily}
          >
            Front End Developer
          </Heading>

          <SummaryText display={{ base: 'block', lg: 'none' }} />

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
              color={DEFAULT_STYLES.whiteColor}
              border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
              bgColor={'transparent'}
              title={'Connect with me'}
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
          display={{ base: 'none', lg: 'flex', xl: 'flex' }}
        >
          <Box
            width={{ base: DEFAULT_STYLES.fullWidth, lg: '580px', xl: '600px' }}
            height={'400px'}
            position={'absolute'}
            top={{ base: 0, xl: '-75px', '2xl': '-70px' }}
            transition={'all linear 350ms '}
          >
            <Image
              src={profile2}
              alt={'tree'}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1), transparent)',
              }}
            />
          </Box>

          {/* <Text
            w={{
              base: DEFAULT_STYLES.fullWidth,
              md: '500px',
              '2xl': '550px',
            }}
            fontSize={{ base: DEFAULT_STYLES.smallTextFontSize, xl: '1.12rem' }}
            textAlign={'justify'}
            whiteSpace={'pre-wrap'}
            lineHeight={1.7}
            zIndex={2}
            color={DEFAULT_STYLES.whiteColor}
            textShadow={'2px 2px 4px rgba(0,0,0,1)'}
          >
            I am a front-end developer specialized in building and occasionally
            designing exceptional digital experiences. Currently, I am focused
            on building accessible and responsive web pages.
          </Text> */}

          <SummaryText
            display={{ base: 'none', lg: 'block' }}
            xlFontSize="1.12rem"
            textAlign
            lineHeight={1.7}
          />
        </Stack>
      </Grid>
    </HeroLayout>
  );
};

export default Hero;
