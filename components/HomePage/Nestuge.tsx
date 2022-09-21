import Image from 'next/image';
import CaseLandingLayout from '../../layout/CaseLandingLayout';
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
        minH={'600px'}
        align={'center'}
        color={DEFAULT_STYLES.whiteColor}
        zIndex={2}
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
      </Flex>
    </VStack>
  );
};

export default Nestuge;
