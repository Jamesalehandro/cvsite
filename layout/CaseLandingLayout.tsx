import ButtonComp from '../components/Button/Button';
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles/customStyles';

interface Props {
  header: string;
  title: string;
  list: string[];
  onclick?: () => void;
}

const CaseLandingLayout = ({ header, title, list, onclick }: Props) => {
  // Render
  const renderList = list?.map((item, i) => (
    <ListItem key={i} lineHeight={1.8}>
      {item}
    </ListItem>
  ));

  return (
    <VStack align={'flex-start'} width={'456px'} gap={2} zIndex={3000}>
      <Heading
        color={DEFAULT_STYLES.whiteColor}
        fontWeight={DEFAULT_STYLES.boldFontWeight}
        fontSize={DEFAULT_STYLES.headerFontSize}
        fontFamily={DEFAULT_STYLES.fontFamily}
        textAlign={'center'}
        textTransform={'capitalize'}
      >
        {header}
      </Heading>

      <Text color={DEFAULT_STYLES.whiteColor} lineHeight={1.8}>
        {title}
      </Text>

      <Box
        width={DEFAULT_STYLES.fullWidth}
        border={`1px solid ${DEFAULT_STYLES.whiteColor} `}
        opacity={0.5}
      />

      <UnorderedList pl={3.5} pb={'40px'}>
        {renderList}
      </UnorderedList>

      <ButtonComp
        bgColor={DEFAULT_STYLES.whiteColor}
        color={DEFAULT_STYLES.darkColor}
        title={'View project'}
      />
    </VStack>
  );
};

export default CaseLandingLayout;
