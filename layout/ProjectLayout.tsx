import ButtonComp from '../components/Button/Button';
import Image from 'next/future/image';
import { Grid, Heading, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles/customStyles';
import { customBg } from '../store';
import { LayoutProps } from '../models';

interface Props extends LayoutProps {
  header?: boolean;
  footer?: boolean;
}

const ProjectLayout = (props: Props) => {
  return (
    <VStack
      width={DEFAULT_STYLES.fullWidth}
      align={'center'}
      justify={'center'}
      position={'relative'}
      pt={5}
      pb={10}
    >
      <Image
        src={customBg}
        alt={'Chigbo James'}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {props.header && (
        <Heading
          color={DEFAULT_STYLES.whiteColor}
          fontWeight={DEFAULT_STYLES.mediumFontWeight}
          fontSize={24}
          lineHeight={'36px'}
          textAlign={'center'}
          zIndex={2}
          fontFamily={DEFAULT_STYLES.fontFamily}
        >
          Featured Projects
        </Heading>
      )}

      <Grid
        w={DEFAULT_STYLES.containerWidth}
        minH={'700px'}
        color={DEFAULT_STYLES.whiteColor}
        zIndex={2}
        gap={20}
        gridTemplateColumns={'repeat(2,1fr)'}
        alignItems={'center'}
        justifyItems={'center'}
      >
        {props.children}
      </Grid>
      {props.footer && (
        <ButtonComp
          bgColor={'transparent'}
          color={DEFAULT_STYLES.whiteColor}
          title={'See all case studies'}
          border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
          width={'300px'}
        />
      )}
    </VStack>
  );
};

export default ProjectLayout;
