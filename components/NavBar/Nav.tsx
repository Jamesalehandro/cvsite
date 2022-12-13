import Image from 'next/future/image';
import Link from 'next/link';
import { Flex, LinkBox } from '@chakra-ui/react';
import { NavLink } from '../../models';
import { DEFAULT_STYLES } from '../../styles';

interface Prop {
  navLink: NavLink[];
}

const Nav = ({ navLink }: Prop) => {
  // Renders
  const renderNav = navLink.map((nav, i) => {
    return (
      <LinkBox
        key={`${nav.title}-${i}`}
        color={DEFAULT_STYLES.whiteColor}
        minH='28px'
        fontWeight={DEFAULT_STYLES.boldFontWeight}
        fontSize={DEFAULT_STYLES.smallTextFontSize}
        role='group'
      >
        <Flex
          gap='10px'
          align='center'
          _groupHover={{
            color: '#a5a1a1',
          }}
        >
          <Link href={nav.path}>{nav.title}</Link>
          {nav.icon && (
            <Image src={nav.icon} alt='Nav' priority quality={100} />
          )}
        </Flex>
      </LinkBox>
    );
  });

  return (
    <Flex
      w={DEFAULT_STYLES.fullWidth}
      justifyContent='flex-end'
      align='center'
      zIndex={1}
      pr={{ base: 5, xl: '50px' }}
      py={2}
      gap={5}
    >
      {renderNav}
    </Flex>
  );
};

export default Nav;
