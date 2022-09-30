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
  download?: boolean;
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
  download,
}: Props) => {
  const style = {
    minWidth: width ?? '223px',
    height: height ?? '64px',
    color: color,
    bgColor: bgColor,
    borderRadius: '50px',
    transition: 'all linear 250ms',
    border: border,
    fontSize: '1rem',
    fontWeight: DEFAULT_STYLES.boldFontWeight,
    textAlign: 'center',
    display: 'flex',
    gap: 5,
    zIndex: 1000,
  };

  return (
    <>
      {internalLink ? (
        <Link href={internalLink}>
          <a>
            <Button
              sx={style}
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
        </Link>
      ) : link ? (
        <a
          href={link}
          target={'_blank'}
          download={download}
          rel="noopener noreferrer"
        >
          <Button
            sx={style}
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
          sx={style}
          onClick={onClick}
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
