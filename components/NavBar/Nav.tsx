import Image from 'next/future/image';
import Link from 'next/link';
import { Flex, LinkBox } from '@chakra-ui/react';
import { NavLink } from '../../models';
import { DEFAULT_STYLES } from '../../styles/customStyles';

interface Prop {
  navLink: NavLink[];
}

const Nav = ({ navLink }: Prop) => {
  // Renders
  const renderNav = navLink.map((nav, i) => {
    return (
      <LinkBox
        key={i}
        color={DEFAULT_STYLES.whiteColor}
        minWidth={'164px'}
        minH={'28px'}
        fontWeight={DEFAULT_STYLES.boldFontWeight}
        fontSize={DEFAULT_STYLES.smallTextFontSize}
        lineHeight={'30px'}
        role={'group'}
      >
        <Flex
          gap={'10px'}
          align={'center'}
          _groupHover={{
            color: '#a5a1a1',
          }}
        >
          <Link href={nav.path}>{nav.title}</Link>
          {nav.icon && (
            <Image src={nav.icon} alt={nav.title} priority quality={100} />
          )}
        </Flex>
      </LinkBox>
    );
  });

  return (
    <Flex
      zIndex={1}
      w={DEFAULT_STYLES.fullWidth}
      justifyContent={'flex-end'}
      pr={{ base: '20px', xl: '50px' }}
      pt={5}
    >
      {renderNav}
    </Flex>
  );
};

export default Nav;
