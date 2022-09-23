import Images from '../../layout/Images';
import ProjectListComponent from '../../layout/ProjectListComponent';
import leftIcon from '../../assets/media/img/netflix.jpeg';
import ProjectLayout from '../../layout/ProjectLayout';

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
        link={'https://netflixbyjames.netlify.app/'}
      />

      <Images centerIcon={leftIcon} />
    </ProjectLayout>
  );
};

export default NetFlix;
