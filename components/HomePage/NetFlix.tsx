import Images from '../../layout/Images';
import ProjectListComponent from '../../layout/ProjectListComponent';
import centerIcon from '../../assets/media/img/netflix.jpeg';
import ProjectLayout from '../../layout/ProjectLayout';
import { cvRoutes } from '../../utils/routes';

const NetFlix = () => {
  return (
    <ProjectLayout footer>
      <ProjectListComponent
        header={'Netflix'}
        title={
          'This is a netflix clone where you can create account and sign in and list the list of different movies and shows.'
        }
        list={[
          'Platform: Web (app)',
          'Industry: Entertainment',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs,Firebase, Chakra ui',
        ]}
        link={cvRoutes.netflix}
      />

      <Images centerIcon={centerIcon} />
    </ProjectLayout>
  );
};

export default NetFlix;
