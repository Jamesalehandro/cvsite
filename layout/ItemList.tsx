import { Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../styles';

type Props = {
  header: string;
  description: string;
};

const ItemList = (props: Props) => {
  return (
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
  );
};

export default ItemList;
