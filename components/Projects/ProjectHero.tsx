import Nav from '../NavBar/Nav';
import { CvRoutes } from '../../utils';
import { Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles';
import { resumeImg } from '../../store';
import { HeroLayout, ProjectLayout } from '../../layout';
import { ProjectProps } from '../../models';

const ProjectHero = ({ data }: ProjectProps) => {
  // Renders
  const renderProjects = data.map((project) => (
    <ProjectLayout key={project.id} project={project} />
  ));

  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: CvRoutes.home, title: 'Home' },
          { path: CvRoutes.resume, title: 'Online resume', icon: resumeImg },
        ]}
      />

      <VStack
        w={DEFAULT_STYLES.containerWidth}
        minH='700px'
        zIndex={5}
        alignItems='flex-start'
        color={DEFAULT_STYLES.whiteColor}
        py={{ base: 10, lg: '100px' }}
        gap='30px'
        px={{ base: 4, xl: 0 }}
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <Heading
          fontFamily={DEFAULT_STYLES.fontFamily}
          fontSize={{ base: '1.87rem', lg: '3.43rem', xl: '3.43rem' }}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
        >
          My Projects
        </Heading>

        <Text
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          fontSize={DEFAULT_STYLES.smallTextFontSize}
        >
          Here are some of my works. In each project, I prioritized setting up
          the potential users for success, while also minding business goals and
          specifications.
        </Text>

        <Grid
          w={DEFAULT_STYLES.fullWidth}
          justifyContent='center'
          minH='400px'
          gap={{ base: '30px', lg: 10, xl: '50px' }}
          zIndex={5}
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(3,1fr)',
          }}
        >
          {renderProjects}
        </Grid>
      </VStack>
    </HeroLayout>
  );
};

export default ProjectHero;
