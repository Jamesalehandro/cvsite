import Images from '../../layout/Images';
import ProjectListComponent from '../../layout/ProjectListComponent';
import centerIcon from '../../assets/media/img/leftnestuge.jpeg';
import ProjectLayout from '../../layout/ProjectLayout';
import { cvRoutes } from '../../utils/routes';

const Nestuge = () => {
  return (
    <ProjectLayout header>
      <Images centerIcon={centerIcon} />

      <ProjectListComponent
        header={'Nestuge'}
        title={
          'A web app that helps you create and manage access to your online events on WhatsApp, Google Meet collect payments and enagage your audience from one place.'
        }
        list={[
          'Platform: Web (app)',
          'Industry: Productivity',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs(NextJs),Firebase, AOS,Chakra ui',
        ]}
        link={cvRoutes.nestuge}
      />
    </ProjectLayout>
  );
};

export default Nestuge;
