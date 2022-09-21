import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { DEFAULT_STYLES } from '../../styles/customStyles';

interface Props {
  width?: string;
  height?: string | number;
  color: string;
  bgColor: string;
  title: string;
  border?: string;
  leftIcon?: IconType;
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
    <>
      {internalLink ? (
        <Link href={internalLink}>
          <Button
            minWidth={width ?? '223px'}
            height={height ?? '64px'}
            color={color}
            bgColor={bgColor}
            borderRadius={'50px'}
            transition={'all linear 250ms'}
            border={border}
            fontSize={20}
            fontWeight={DEFAULT_STYLES.boldFontWeight}
            lineHeight={'36px'}
            textAlign={'center'}
            zIndex={1000}
            // leftIcon={leftIcon}
            _hover={{
              bgColor: bgColor,
            }}
            _active={{
              bgColor: bgColor,
              transform: 'scale(0.989)',
            }}
          >
            {title}
          </Button>
        </Link>
      ) : link ? (
        <a href={link}>
          <Button
            minWidth={width ?? '223px'}
            height={height ?? '64px'}
            color={color}
            bgColor={bgColor}
            borderRadius={'50px'}
            transition={'all linear 250ms'}
            border={border}
            fontSize={20}
            fontWeight={DEFAULT_STYLES.boldFontWeight}
            lineHeight={'36px'}
            textAlign={'center'}
            zIndex={1000}
            // leftIcon={leftIcon}
            _hover={{
              bgColor: bgColor,
            }}
            _active={{
              bgColor: bgColor,
              transform: 'scale(0.989)',
            }}
          >
            {title}
          </Button>
        </a>
      ) : (
        <Button
          minWidth={width ?? '223px'}
          height={height ?? '64px'}
          color={color}
          bgColor={bgColor}
          borderRadius={'50px'}
          transition={'all linear 250ms'}
          border={border}
          fontSize={20}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          lineHeight={'36px'}
          textAlign={'center'}
          zIndex={1000}
          // leftIcon={leftIcon}
          _hover={{
            bgColor: bgColor,
          }}
          _active={{
            bgColor: bgColor,
            transform: 'scale(0.989)',
          }}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default ButtonComp;
