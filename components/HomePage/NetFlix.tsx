import centerIcon from '../../assets/media/img/netflix.jpeg';
import {
  HomeProjectLayout,
  HomeProjectListComponent,
  Images,
} from '../../layout';
import { CvRoutes } from '../../utils';

const NetFlix = () => {
  return (
    <HomeProjectLayout>
      <HomeProjectListComponent
        header='Netflix'
        title='This is a netflix clone where you can create account and sign in and list the list of different movies and shows.'
        list={[
          'Platform: Web (app)',
          'Industry: Entertainment',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs,Firebase, Chakra UI',
        ]}
        link={CvRoutes.netflix}
      />

      <Images centerIcon={centerIcon} />
    </HomeProjectLayout>
  );
};

export default NetFlix;
