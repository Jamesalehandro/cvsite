import { Text } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles';

interface Props {
  xlFontSize?: string;
  textAlign?: boolean;
  lineHeight?: number;
  display: { base: string; lg: string };
}

const SummaryText = ({ xlFontSize, textAlign, lineHeight, display }: Props) => {
  return (
    <Text
      w={{
        base: DEFAULT_STYLES.fullWidth,
        md: '500px',
        '2xl': '550px',
      }}
      fontSize={{
        base: DEFAULT_STYLES.smallTextFontSize,
        xl: xlFontSize ?? '1rem',
      }}
      textAlign={textAlign ? 'justify' : 'left'}
      whiteSpace={'pre-wrap'}
      lineHeight={lineHeight ?? 2}
      zIndex={2}
      color={DEFAULT_STYLES.whiteColor}
      display={display}
      textShadow={'2px 2px 4px rgba(0,0,0,1)'}
    >
      I am a front-end developer specialized in building and occasionally
      designing exceptional digital experiences. Currently, I am focused on
      building accessible and responsive web pages.
    </Text>
  );
};

export default SummaryText;
