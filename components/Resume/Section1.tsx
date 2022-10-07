import ItemList from '../../layout/ItemList';
import ItemListArray from '../../layout/ItemListArray';
import { Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';

const Section1 = () => {
  return (
    <Flex
      width={DEFAULT_STYLES.fullWidth}
      bg={DEFAULT_STYLES.darkColor}
      align={'center'}
      justify={'center'}
      py={10}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <VStack
        w={DEFAULT_STYLES.containerWidth}
        color={DEFAULT_STYLES.whiteColor}
        minH={'400px'}
        justifyContent={'center'}
        align={'flex-start'}
        px={{ base: 5, xl: 0 }}
      >
        <Heading
          fontSize={DEFAULT_STYLES.smallTextFontSize}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          fontFamily={DEFAULT_STYLES.fontFamily}
        >
          Career History
        </Heading>

        <Grid
          w={DEFAULT_STYLES.fullWidth}
          justifyContent={'center'}
          minH={'400px'}
          py={10}
          gap={{ base: '30px', lg: 10, xl: '50px' }}
          zIndex={5}
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
        >
          <Stack gap={3}>
            <Text
              fontWeight={DEFAULT_STYLES.boldFontWeight}
              fontSize={DEFAULT_STYLES.smallTextFontSize}
            >
              NESTUGE TECHNOLOGIES • Enugu, Nigeria • June 2022 to Present
            </Text>

            <ItemList header={'Role'} description={'Front end developer'} />
            <ItemList
              header={'Achievements'}
              description={
                'Won the Supervisor bonus in the first month of working there'
              }
            />

            <ItemListArray
              header={'Tasks and duties:'}
              list={[
                'I develop the Website of Nestuge Company.',
                'I built the landing page of the site with NextJS to improve the Search engine optimization of the website and loading speed.',
                'I built the events page which I connected with the backend and made request calls to it.',
                'I authenticated user’s login process to make sure the login process is secure',
                'I built the dashboard for the users.',
              ]}
            />
          </Stack>

          <Stack gap={3}>
            <Text
              fontWeight={DEFAULT_STYLES.boldFontWeight}
              fontSize={DEFAULT_STYLES.smallTextFontSize}
            >
              Techathon Internship • Nigeria • June 2022 to Present
            </Text>

            <ItemList header={'Role'} description={'Front end developer'} />

            <ItemListArray
              header={'Tasks and duties:'}
              list={[
                'I taught ReactJs to a group of 175 students.',
                'I grade and access their progress in ReactJs with assignments and test.',
                'I built four pages of the dashboard which include the resources page, the certificate page, the my team page and the dashboard landing page.',
              ]}
            />
          </Stack>
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Section1;
