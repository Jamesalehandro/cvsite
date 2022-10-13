import { Heading, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles';

type Props = {
  list: string[];
  header: string;
};

const ItemListArray = ({ list, header }: Props) => {
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
    <VStack alignItems={'flex-start'}>
      <Heading fontSize={'1rem'} fontFamily={DEFAULT_STYLES.fontFamily}>
        {header}
      </Heading>

      <UnorderedList pl={4}>{renderList}</UnorderedList>
    </VStack>
  );
};

export default ItemListArray;
