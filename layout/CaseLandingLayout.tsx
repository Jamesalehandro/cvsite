import ButtonComp from '../components/Button/Button';
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

interface Props {
  header: string;
  title: string;
  list: string[];
  onclick?: () => void;
}

const CaseLandingLayout = ({ header, title, list, onclick }: Props) => {
  // Render
  const renderList = list?.map((item, i) => (
    <ListItem key={i} fontSize={'20px'} lineHeight={'30px'} fontWeight={400}>
      {item}
    </ListItem>
  ));

  return (
    <VStack
      color={'white'}
      align={'flex-start'}
      justify={'center'}
      px={'30px'}
      gap={2}
    >
      <Heading
        minWidth={'85px'}
        height={'48px'}
        color={'white'}
        fontWeight={700}
        fontSize={'32px'}
        lineHeight={'48px'}
        textAlign={'center'}
        textTransform={'capitalize'}
      >
        {header}
      </Heading>

      <Text
        width={'456px'}
        minHeight={'60px'}
        color={'white'}
        fontWeight={400}
        fontSize={'20px'}
        lineHeight={'30px'}
      >
        {title}
      </Text>

      <Box width={'456px'} border={'1.5px solid #FFFFFF '} />

      <UnorderedList minWidth={'471px'} minHeight={'150px'} pl={5} pb={'40px'}>
        {renderList}
      </UnorderedList>

      <ButtonComp
        width={{ base: '319px', xl: '200px', '2xl': '319px' }}
        height={'68px'}
        bgColor={'#FFFFFF'}
        color={'#121212'}
        title={'View project'}
      />
    </VStack>
  );
};

export default CaseLandingLayout;
