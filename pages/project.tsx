import { GetStaticProps } from 'next';
import { ProjectHero } from '../components';
import { ProjectProps } from '../models';
import { heroProjects } from '../store';

const Projects = ({ data }: ProjectProps) => {
  return <ProjectHero data={data} />;
};

export default Projects;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      data: heroProjects,
    },
    revalidate: 10,
  };
};
