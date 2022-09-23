import ButtonComp from '../components/Button/Button';
import Image from 'next/future/image';
import { Grid, Heading, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles/customStyles';
import { customBg } from '../store';
import { LayoutProps } from '../models';
import { cvRoutes } from '../utils/routes';

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
        priority
        style={{ objectFit: 'cover' }}
      />

      {props.header && (
        <Heading
          color={DEFAULT_STYLES.whiteColor}
          fontWeight={DEFAULT_STYLES.mediumFontWeight}
          fontFamily={DEFAULT_STYLES.fontFamily}
          fontSize={24}
          lineHeight={'36px'}
          textAlign={'center'}
          zIndex={2}
        >
          Featured Projects
        </Heading>
      )}

      <Grid
        w={DEFAULT_STYLES.containerWidth}
        minH={'700px'}
        color={DEFAULT_STYLES.whiteColor}
        gap={10}
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
          title={'See all projects'}
          border={`1px solid ${DEFAULT_STYLES.whiteColor}`}
          width={'300px'}
          internalLink={cvRoutes.project}
        />
      )}
    </VStack>
  );
};

export default ProjectLayout;
