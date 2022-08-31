import HeroLayout from '../../layout/HeroLayout';
import Nav from '../NavBar/Nav';
import resumeIcon from '../../assets/media/img/onlineresume.svg';
import tree from '../../assets/media/img/tree.svg';
import Image from 'next/image';
import ButtonComp from '../Button/Button';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { cvRoutes } from '../../utils/routes';

const Hero = () => {
  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: '/resume', title: 'Online resume', icon: resumeIcon },
        ]}
      />

      <Flex
        justifyContent={'center'}
        maxW={'1200px'}
        minH={'400px'}
        py={'100px'}
        gap={{ base: '30px', xl: '100px', '2xl': '150px' }}
        zIndex={2}
        justifySelf={'center'}
        alignSelf={'center'}
      >
        <Stack
          color={'white'}
          justifyContent={'center'}
          fontWeight={700}
          gap={'35px'}
          flex={1}
        >
          <Heading height={'48px'} fontSize={'24px'} lineHeight={'36px'}>
            Hi, I am
          </Heading>

          <Heading fontSize={{ base: '30px', xl: '56px' }} lineHeight={'84px'}>
            Chigbo James
          </Heading>

          <Heading
            fontSize={{ base: '25px', xl: '25px', '2xl': '32px' }}
            lineHeight={'48px'}
          >
            Front End Developer
          </Heading>

          <HStack pt={'48px'} align={'center'} gap={3}>
            <ButtonComp
              width={'223px'}
              height={'64px'}
              bgColor={'#FFFFFF'}
              color={'#121212'}
              title={'Case studies'}
              internalLink={cvRoutes.caseStudy}
            />

            <ButtonComp
              width={'223px'}
              height={'64px'}
              bgColor={'transparent'}
              color={'#FFFF'}
              title={'Connect with me'}
              border={'1px solid #FFF'}
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
            zIndex={1000}
            width={'600px'}
            height={'400px'}
            position={'absolute'}
            top={{ base: 0, xl: '-90px', '2xl': '-70px' }}
          >
            <Image
              src={tree}
              alt={'full'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </Box>

          <Flex zIndex={2000} color={'white'} gap={2} alignItems={'flex-start'}>
            <Text
              w={{ base: '100%', xl: '400px', '2xl': '550px' }}
              fontSize={'20px'}
              textAlign={'justify'}
              whiteSpace={'pre-wrap'}
              lineHeight={1.7}
              fontWeight={400}
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
