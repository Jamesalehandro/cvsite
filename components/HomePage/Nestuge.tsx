import Images from '../../layout/Images';
import HomeProjectListComponent from '../../layout/HomeProjectListComponent';
import centerIcon from '../../assets/media/img/leftnestuge.jpeg';
import HomeProjectLayout from '../../layout/HomeProjectLayout';
import { cvRoutes } from '../../utils/routes';

const Nestuge = () => {
  return (
    <HomeProjectLayout header>
      <Images centerIcon={centerIcon} />

      <HomeProjectListComponent
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
    </HomeProjectLayout>
  );
};

export default Nestuge;
