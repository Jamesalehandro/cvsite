import Images from '../../layout/Images';
import ProjectListComponent from '../../layout/ProjectListComponent';
import centerIcon from '../../assets/media/img/dyserf.png';
import ProjectLayout from '../../layout/ProjectLayout';

const Dyserf = () => {
  return (
    <ProjectLayout footer>
      <ProjectListComponent
        header={'DYSERF'}
        title={
          ' This was built as a project for a product designer. The project shows what the company does and why you should hire them. This was built with NextJS,AOS for scrolling animations and Chakra UI as the design system.'
        }
        list={[
          'Platform: Web (app)',
          'Industry: Productivity and development',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs(NextJs), AOS,Chakra ui',
        ]}
        link={'https://dyserf.vercel.app/'}
      />

      <Images centerIcon={centerIcon} />
    </ProjectLayout>
  );
};

export default Dyserf;
