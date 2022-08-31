import Image from 'next/image';
import Link from 'next/link';
import { Flex, LinkBox } from '@chakra-ui/react';

interface NavLink {
  path: string;
  title: string;
  icon?: string;
}

interface Prop {
  navLink: NavLink[];
}

const Nav = ({ navLink }: Prop) => {
  // Renders
  const renderNav = navLink.map((nav, i) => {
    return (
      <LinkBox
        key={i}
        color={'white'}
        minWidth={'164px'}
        minH={'28px'}
        fontWeight={700}
        fontSize={'20px'}
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
          {nav.icon && <Image src={nav.icon} alt={nav.title} />}
        </Flex>
      </LinkBox>
    );
  });

  return (
    <Flex
      zIndex={1}
      w={'full'}
      justifyContent={'flex-end'}
      pr={{ base: '20px', xl: '50px' }}
      pt={7}
    >
      {renderNav}
    </Flex>
  );
};

export default Nav;
