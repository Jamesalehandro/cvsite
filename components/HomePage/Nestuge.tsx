import Images from '../../layout/Images';
import CaseLandingLayout from '../../layout/CaseLandingLayout';
import leftIcon from '../../assets/media/img/leftnestuge.jpeg';
import ProjectLayout from '../../layout/ProjectLayout';

const Nestuge = () => {
  return (
    <ProjectLayout>
      <Images centerIcon={leftIcon} />

      <CaseLandingLayout
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
        link={'https://www.nestuge.com/'}
      />
    </ProjectLayout>
  );
};

export default Nestuge;
