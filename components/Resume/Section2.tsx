import Image from 'next/future/image';
import ItemListArray from '../../layout/ItemListArray';
import { Grid, Stack, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';
import { customBg } from '../../store';

const Section2 = () => {
  return (
    <VStack
      width={DEFAULT_STYLES.fullWidth}
      align={'center'}
      justify={'center'}
      position={'relative'}
      py={10}
      gap={10}
      px={{ base: 5, xl: 0 }}
    >
      <Image
        src={customBg}
        alt={'Chigbo James'}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />

      <Grid
        w={DEFAULT_STYLES.containerWidth}
        color={DEFAULT_STYLES.whiteColor}
        gap={10}
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        justifyItems={'center'}
        zIndex={5}
      >
        <Stack>
          <ItemListArray
            header={'Volunteer and service positions'}
            list={[
              'Director of Games  -  Mass communication department, University of Nigeria, Nsukka.',
              'Independent National Electoral Commission Ad hoc Staff',
            ]}
          />
        </Stack>
      </Grid>
    </VStack>
  );
};

export default Section2;
