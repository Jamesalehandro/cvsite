import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactElement } from 'react';

interface Props {
  width:
    | {
        base: string | number;
        md?: string | number;
        xl?: string | number;
        '2xl': string | number;
      }
    | string;
  height: string | number;
  color: string;
  bgColor: string;
  title: string;
  border?: string;
  leftIcon?: ReactElement;
  link?: string;
  internalLink?: string;
}

const ButtonComp = ({
  width,
  height,
  color,
  bgColor,
  title,
  border,
  leftIcon,
  link,
  internalLink,
}: Props) => {
  return (
    <Button
      minWidth={width}
      height={height}
      padding={'20px 30px 20px 30px'}
      color={color}
      bgColor={bgColor}
      borderRadius={'50px'}
      transition={'all linear 250ms'}
      border={border}
      fontSize={{ base: '20px', xl: '18px', '2xl': '24px' }}
      fontWeight={700}
      lineHeight={'36px'}
      textAlign={'center'}
      zIndex={1000}
      leftIcon={leftIcon}
      _hover={{
        bgColor: bgColor,
      }}
      _active={{
        bgColor: bgColor,
        transform: 'scale(0.989)',
      }}
    >
      {link ? (
        <a href={link}>{title}</a>
      ) : internalLink ? (
        <Link href={internalLink}>{title}</Link>
      ) : (
        title
      )}
    </Button>
  );
};

export default ButtonComp;
