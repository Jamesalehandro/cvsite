import { StaticImageData } from 'next/future/image';

export interface Project {
  id: number;
  icon: StaticImageData;
  description: string;
  title: string;
  path: string;
}

export type ProjectProps = {
  data: Project[];
};
