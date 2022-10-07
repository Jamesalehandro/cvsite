import Images from '../../layout/Images';
import HomeProjectListComponent from '../../layout/HomeProjectListComponent';
import centerIcon from '../../assets/media/img/netflix.jpeg';
import HomeProjectLayout from '../../layout/HomeProjectLayout';
import { cvRoutes } from '../../utils/routes';

const NetFlix = () => {
  return (
    <HomeProjectLayout>
      <HomeProjectListComponent
        header={'Netflix'}
        title={
          'This is a netflix clone where you can create account and sign in and list the list of different movies and shows.'
        }
        list={[
          'Platform: Web (app)',
          'Industry: Entertainment',
          'Produced: Yes',
          'Role: Front end Developer',
          'Tools: ReactJs,Firebase, Chakra UI',
        ]}
        link={cvRoutes.netflix}
      />

      <Images centerIcon={centerIcon} />
    </HomeProjectLayout>
  );
};

export default NetFlix;
