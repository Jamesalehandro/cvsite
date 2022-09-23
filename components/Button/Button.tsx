import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { DEFAULT_STYLES } from '../../styles/customStyles';
import { ReactNode } from 'react';

interface Props {
  width?: string;
  height?: string | number;
  color: string;
  bgColor: string;
  title: string;
  border?: string;
  leftIcon?: ReactNode;
  link?: string;
  internalLink?: string;
  onClick?: () => void;
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
  onClick,
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
            fontSize={18}
            fontWeight={DEFAULT_STYLES.boldFontWeight}
            textAlign={'center'}
            display={'flex'}
            gap={5}
            onClick={onClick}
            zIndex={1000}
            _hover={{
              bgColor: bgColor,
            }}
            _active={{
              bgColor: bgColor,
              transform: 'scale(0.989)',
            }}
          >
            <>
              {leftIcon && leftIcon}
              {title}
            </>
          </Button>
        </Link>
      ) : link ? (
        <a href={link} target={'_blank'} rel="noopener noreferrer">
          <Button
            minWidth={width ?? '223px'}
            height={height ?? '64px'}
            color={color}
            bgColor={bgColor}
            borderRadius={'50px'}
            transition={'all linear 250ms'}
            border={border}
            fontSize={18}
            fontWeight={DEFAULT_STYLES.boldFontWeight}
            textAlign={'center'}
            onClick={onClick}
            display={'flex'}
            gap={5}
            zIndex={1000}
            _hover={{
              bgColor: bgColor,
            }}
            _active={{
              bgColor: bgColor,
              transform: 'scale(0.989)',
            }}
          >
            <>
              {leftIcon && leftIcon}
              {title}
            </>
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
          fontSize={18}
          fontWeight={DEFAULT_STYLES.boldFontWeight}
          onClick={onClick}
          textAlign={'center'}
          zIndex={1000}
          display={'flex'}
          gap={5}
          _hover={{
            bgColor: bgColor,
          }}
          _active={{
            bgColor: bgColor,
            transform: 'scale(0.989)',
          }}
        >
          <>
            {leftIcon && leftIcon}
            {title}
          </>
        </Button>
      )}
    </>
  );
};

export default ButtonComp;
