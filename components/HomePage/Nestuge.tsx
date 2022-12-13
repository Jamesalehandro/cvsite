import centerIcon from '../../assets/media/img/leftnestuge.jpeg';
import {
  HomeProjectLayout,
  HomeProjectListComponent,
  Images,
} from '../../layout';
import { CvRoutes } from '../../utils';

const Nestuge = () => {
  return (
    <HomeProjectLayout header>
      <Images centerIcon={centerIcon} />

      <HomeProjectListComponent
        header='Nestuge'
        title='A web app that helps you create and manage access to your events on WhatsApp, Google Meet,Slack,Telegram,live venues and collect payments and enagage your audience from one place.'
        list={[
          'Platform: Web (app)',
          'Industry: Productivity',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs(NextJs),Firebase,TypeScript,AOS,Chakra UI',
        ]}
        link={CvRoutes.nestuge}
      />
    </HomeProjectLayout>
  );
};

export default Nestuge;
