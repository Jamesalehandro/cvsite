import HeroLayout from '../../layout/HeroLayout';
import ProjectLayout from '../../layout/ProjectLayout';
import Nav from '../NavBar/Nav';
import { cvRoutes } from '../../utils/routes';
import { Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';
import { heroProjects, resumeImg } from '../../store';

const ProjectHero = () => {
  // Renders
  const renderProjects = heroProjects.map((project) => (
    <ProjectLayout key={project.id} project={project} />
  ));

  return (
    <HeroLayout>
      <Nav
        navLink={[
          { path: cvRoutes.home, title: 'Home' },
          { path: cvRoutes.resume, title: 'Online resume', icon: resumeImg },
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
      >
        <Heading
          fontFamily={DEFAULT_STYLES.fontFamily}
          fontSize={{ base: 30, lg: 55 }}
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
          justifyContent={'center'}
          minH={'400px'}
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
