import { StaticImageData } from 'next/future/image';

export interface NavLink {
  path: string;
  title: string;
  icon?: StaticImageData;
}
