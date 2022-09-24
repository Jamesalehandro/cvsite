import { Flex, Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles/customStyles';

type Props = {
  header: string;
  description: string;
};

const ItemList = (props: Props) => {
  return (
    <Flex>
      <Text
        fontSize={DEFAULT_STYLES.smallTextFontSize}
        fontWeight={DEFAULT_STYLES.boldFontWeight}
        fontFamily={DEFAULT_STYLES.fontFamily}
      >
        {props.header}:{' '}
        <span
          style={{
            fontWeight: 400,
            fontSize: DEFAULT_STYLES.smallTextFontSize,
          }}
        >
          {props.description}
        </span>
      </Text>
    </Flex>
  );
};

export default ItemList;
