import HeroLayout from '../../layout/HeroLayout';
import Nav from '../NavBar/Nav';
import ItemList from '../../layout/ItemList';
import ItemListArray from '../../layout/ItemListArray';
import { cvRoutes } from '../../utils/routes';
import { Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';

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
        gap={'23px'}
        px={{ base: 4, xl: 0 }}
      >
        <Heading
          fontFamily={DEFAULT_STYLES.fontFamily}
          fontSize={{ base: 30, lg: 55 }}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
        >
          My resume
        </Heading>

        <Text
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          fontSize={DEFAULT_STYLES.smallTextFontSize}
        >
          • Enugu State, Nigeria • <a href="#"> Contact me</a>
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
                'HTML | CSS | Javascript | ReactJs | NextJs | Github | Typescript | Firebase| TailwindCss | Chakra UI'
              }
            />

            <ItemList
              header={'Current projects'}
              description={
                ' Implememting  Nestuge’s landing page and dashboard and web-based productivity platform for virtual hosts and creators.'
              }
            />

            <ItemListArray
              header={'Education:'}
              list={[
                'Bachelor of Art Mass Communication University of Nigeria,Nsukka Enugu State Nigeria.(2019)',
                'Frontend Development – Side Hustle Internship, (2022)',
                ' Advanced software engineering Diploma, APTECH Enugu state (In progress)',
              ]}
            />
          </Stack>

          <ItemListArray
            header={'Summary of skills:'}
            list={[
              'Experienced in creating pixel perfect implementations of designs.',
              'Recruiting participants, developing interview goals and questions, and conducting user interviews.',
              'Experienced in defining problem statements, crafting user stories and modeling user journey maps.',
              ' Experienced in creating effective competitive audit and competitive audit reports.',
              'Experienced in building out effective research plans on business needs of products.',
              'Notable observation techniques,  while conducting usability studies',
              'Visualization using big picture and close-up storyboards illustrating user pain points and solution proposals.',
            ]}
          />
        </Grid>
      </VStack>
    </HeroLayout>
  );
};

export default ResumeHero;
