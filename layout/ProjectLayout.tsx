import Image from 'next/future/image';
import { Flex, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import { Project } from '../models';
import { DEFAULT_STYLES } from '../styles';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  project: Project;
};

const ProjectLayout = ({ project }: Props) => {
  return (
    <Stack
      height={DEFAULT_STYLES.fullWidth}
      borderBottom={DEFAULT_STYLES.borderRadius}
      justifyContent={'flex-end'}
      position={'relative'}
      role={'group'}
      minH={'400px'}
      shadow={{ base: 'lg', xl: '2xl' }}
      data-aos={'zoom-in'}
      data-aos-duration={'1000'}
    >
      <Image
        src={project.icon}
        alt={project.description}
        fill
        priority
        style={{
          objectFit: 'cover',
          borderRadius: DEFAULT_STYLES.borderRadius,
        }}
      />

      <a
        href={project.path}
        target={'_blank'}
        referrerPolicy={'no-referrer'}
        rel={'noopener noreferrer'}
        style={{
          zIndex: 5000,
        }}
      >
        <VStack
          color={DEFAULT_STYLES.whiteColor}
          borderBottomRadius={DEFAULT_STYLES.borderRadius}
          minH={'150px'}
          bgColor={'#222222'}
          transition={'all linear .5s'}
          alignItems={'flex-start'}
          _groupHover={{
            bgColor: DEFAULT_STYLES.whiteColor,
            color: DEFAULT_STYLES.darkColor,
          }}
          p={3}
          gap={3}
        >
          <Flex
            width={DEFAULT_STYLES.fullWidth}
            align={'center'}
            justify={'space-between'}
          >
            <Heading
              fontFamily={DEFAULT_STYLES.fontFamily}
              fontWeight={DEFAULT_STYLES.boldFontWeight}
              fontSize={'1.12rem'}
            >
              {project.title}
            </Heading>

            <Icon
              as={BsArrowRight}
              fontSize={DEFAULT_STYLES.headerFontSize}
              display={'none'}
              _groupHover={{
                display: 'flex',
              }}
            />
          </Flex>

          <Text fontSize={DEFAULT_STYLES.smallTextFontSize} lineHeight={1.5}>
            {project.description}
          </Text>
        </VStack>
      </a>
    </Stack>
  );
};

export default ProjectLayout;
