import Images from '../../layout/Images';
import HomeProjectListComponent from '../../layout/HomeProjectListComponent';
import centerIcon from '../../assets/media/img/dyserf.png';
import HomeProjectLayout from '../../layout/HomeProjectLayout';
import { cvRoutes } from '../../utils/routes';

const Dyserf = () => {
  return (
    <HomeProjectLayout footer>
      <HomeProjectListComponent
        header={'DYSERF'}
        title={
          ' This was built as a project for a product designer. The project shows what the company does and why you should hire them. This was built with NextJS,AOS for scrolling animations and Chakra UI as the design system.'
        }
        list={[
          'Platform: Web',
          'Industry: Productivity and development',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs(NextJs), AOS,Chakra UI',
        ]}
        link={cvRoutes.dyserf}
      />

      <Images centerIcon={centerIcon} />
    </HomeProjectLayout>
  );
};

export default Dyserf;
