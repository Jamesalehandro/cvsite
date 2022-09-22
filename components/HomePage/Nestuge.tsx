import Images from '../../layout/Images';
import Image from 'next/image';
import CaseLandingLayout from '../../layout/CaseLandingLayout';
import leftIcon from '../../assets/media/img/nestuge.png';
import centerIcon from '../../assets/media/img/nestuge.png';
import rightIcon from '../../assets/media/img/nestuge.png';
import { Flex, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';
import { customBg } from '../../store';

const Nestuge = () => {
  return (
    <VStack
      width={DEFAULT_STYLES.fullWidth}
      align={'center'}
      justify={'center'}
      position={'relative'}
    >
      <Image
        src={customBg}
        alt={'Chigbo James'}
        layout={'fill'}
        objectFit={'cover'}
        priority
        loading={'eager'}
      />
      <Flex
        w={DEFAULT_STYLES.containerWidth}
        minH={'700px'}
        align={'center'}
        color={DEFAULT_STYLES.whiteColor}
        zIndex={2}
        position={'relative'}
      >
        <CaseLandingLayout
          header={'Nestuge'}
          title=" A web app that helps you create and manage access to your online events on WhatsApp, Google Meet  collect payments and enagage your audience from one place."
          list={[
            'Platform: Web (app)',
            'Industry: Productivity',
            'Produced: Yes',
            'Role: Front end Developer',
            'Tools: ReactJs(NextJs), Firebase,Chakra ui',
          ]}
        />

        <Images
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          centerIcon={centerIcon}
        />
      </Flex>
    </VStack>
  );
};

export default Nestuge;
