import Nav from '../NavBar/Nav';
import { cvRoutes } from '../../utils/routes';
import { Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles';
import { HeroLayout, ItemList, ItemListArray } from '../../layout';

const ResumeHero = () => {
  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: cvRoutes.home, title: 'Home' },
          { path: cvRoutes.project, title: 'Projects' },
        ]}
      />

      <VStack
        w={DEFAULT_STYLES.containerWidth}
        minH={'700px'}
        zIndex={5}
        alignItems={'flex-start'}
        color={DEFAULT_STYLES.whiteColor}
        py={{ base: 10, lg: '100px' }}
        gap={'30px'}
        px={{ base: 4, xl: 0 }}
        data-aos={'fade-up'}
        data-aos-duration={'1000'}
      >
        <Heading
          fontFamily={DEFAULT_STYLES.fontFamily}
          fontSize={{ base: '1.87rem', lg: '3.43rem', xl: '3.43rem' }}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
        >
          My resume
        </Heading>

        <Text
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          fontSize={DEFAULT_STYLES.smallTextFontSize}
        >
          • Enugu State, Nigeria •{' '}
          <a href="https://www.linkedin.com/in/alejandro-james-571418225/">
            Contact me
          </a>
        </Text>

        <Text
          width={{ base: DEFAULT_STYLES.fullWidth, lg: '800px' }}
          fontSize={DEFAULT_STYLES.smallTextFontSize}
          lineHeight={1.7}
        >
          I am a meticulous Front-End Web developer with experience who has
          passion for responsive website design and a firm believer in the
          mobile-first approach. I have worked with teams of various size and
          made meaningful contributions. I am a determined individual that is
          goal oriented pays attention to details, good listener and strong
          organizational skills.
        </Text>

        <Grid
          w={DEFAULT_STYLES.fullWidth}
          justifyContent={'center'}
          minH={'400px'}
          pt={10}
          gap={{ base: '30px', lg: 10, xl: '50px' }}
          zIndex={5}
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
        >
          <Stack gap={3}>
            <ItemList
              header={'Core skills'}
              description={
                'HTML | CSS | Javascript | ReactJs | React Native | NextJs | Github | Typescript | Firebase | TailwindCss | Chakra UI|'
              }
            />

            <ItemList
              header={'Current projects'}
              description={
                'Implementing Nestuge’s landing page and dashboard which is a web-based productivity platform for hosts and creators. Which allows them to automatically share secured access to their online communities, events, resources and more.'
              }
            />

            <ItemListArray
              header={'Education:'}
              list={[
                'Bachelor of Art Mass Communication University of Nigeria,Nsukka Enugu State Nigeria.(2019)',
                'Frontend Development – Side Hustle Internship, (2022)',
                'Advanced software engineering Diploma, APTECH Enugu state (In progress)',
              ]}
            />
          </Stack>

          <ItemListArray
            header={'Summary of skills:'}
            list={[
              'Experienced in creating pixel perfect implementations of designs.',
              'Experienced in separating the UI from the logic',
              'Experienced in the usage of firebase and its functionalities to make web applications secure',
              'Experienced in making sure that sensitive information is not exposed to the client browser',
              'Notable observation techniques to make sure I implement the application to the test of the client',
              'Experienced in writing clean and understandable codes',
            ]}
          />
        </Grid>
      </VStack>
    </HeroLayout>
  );
};

export default ResumeHero;
