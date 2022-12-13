import Image from 'next/future/image';
import { Grid, Stack, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles';
import { customBg } from '../../store';
import { ItemListArray } from '../../layout';

const Section2 = () => {
  return (
    <VStack
      width={DEFAULT_STYLES.fullWidth}
      align='center'
      justify='center'
      position='relative'
      py={10}
      gap={10}
      px={{ base: 5, xl: 0 }}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <Image
        src={customBg}
        alt='Chigbo James'
        fill
        priority
        style={{ objectFit: 'cover' }}
      />

      <Grid
        w={DEFAULT_STYLES.containerWidth}
        color={DEFAULT_STYLES.whiteColor}
        gap={10}
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        zIndex={5}
      >
        <Stack alignItems='flex-start'>
          <ItemListArray
            header='Volunteer and service positions'
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
