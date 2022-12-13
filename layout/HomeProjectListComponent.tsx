import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { ButtonComp } from '../components';
import { DEFAULT_STYLES } from '../styles';

interface Props {
  header: string;
  title: string;
  list: string[];
  link: string;
}

const HomeProjectListComponent = ({ header, title, list, link }: Props) => {
  // Render
  const renderList = list.map((item, i) => (
    <ListItem
      key={i}
      lineHeight={1.8}
      fontSize={DEFAULT_STYLES.smallTextFontSize}
    >
      {item}
    </ListItem>
  ));

  return (
    <VStack
      width={{ base: DEFAULT_STYLES.fullWidth, lg: '456px' }}
      gap={2}
      zIndex={3000}
      align='flex-start'
    >
      <Heading
        color={DEFAULT_STYLES.whiteColor}
        fontWeight={DEFAULT_STYLES.boldFontWeight}
        fontSize={DEFAULT_STYLES.headerFontSize}
        fontFamily={DEFAULT_STYLES.fontFamily}
        textAlign='center'
        textTransform='capitalize'
      >
        {header}
      </Heading>

      <Text
        color={DEFAULT_STYLES.whiteColor}
        fontSize={{ base: DEFAULT_STYLES.smallTextFontSize, xl: '1rem' }}
        lineHeight={1.8}
      >
        {title}
      </Text>

      <Box
        width={DEFAULT_STYLES.fullWidth}
        border={`1px solid ${DEFAULT_STYLES.whiteColor} `}
        opacity={0.5}
      />

      <UnorderedList pl={3.5} pb='40px'>
        {renderList}
      </UnorderedList>

      <ButtonComp
        bgColor={DEFAULT_STYLES.whiteColor}
        color={DEFAULT_STYLES.darkColor}
        title='View project'
        link={link}
      />
    </VStack>
  );
};

export default HomeProjectListComponent;
