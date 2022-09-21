import { StaticImageData } from 'next/image';

export interface NavLink {
  path: string;
  title: string;
  icon?: StaticImageData;
}
