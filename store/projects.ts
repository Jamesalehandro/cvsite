import dyserf from '../assets/media/img/dyserf.png';
import nestuge from '../assets/media/img/leftnestuge.jpeg';
import netflix from '../assets/media/img/netflix.jpeg';
import admin from '../assets/media/img/dashboard.jpeg';
import invest from '../assets/media/img/investment.jpeg';
import briskpay from '../assets/media/img/briskpay.png';
import { cvRoutes } from '../utils/routes';
import { Project } from '../models';

export const heroProjects: Project[] = [
  {
    id: 1,
    icon: nestuge,
    title: 'Nestuge',
    description:
      'A web app that helps you create and manage access to your online events on WhatsApp, Google Meet collect payments and enagage your audience from one place.',
    path: cvRoutes.nestuge,
  },
  {
    id: 2,
    icon: netflix,
    description:
      'This is a netflix clone where you can create account and sign in and list the list of different movies and shows.',
    path: cvRoutes.netflix,
    title: 'Netflix',
  },
  {
    id: 3,
    icon: dyserf,
    description:
      ' This was built as a project for a product designer. The project shows what the company does and why you should hire them. This was built with NextJS,AOS for scrolling animations and Chakra UI as the design system.',
    path: cvRoutes.dyserf,
    title: 'DYSERF',
  },
  {
    id: 4,
    icon: briskpay,
    title: 'BriskPay',
    description:
      ' This was for a hackathon competition. With the help of BriskPay, hundreds of millions of customers may easily pay for goods and services using the data already saved in their BrisksPay accounts.',
    path: 'https://rapyd-hackathon.vercel.app',
  },
  {
    id: 5,
    icon: invest,
    title: 'Gary Morgan',
    description:
      'This is website that a user can see different crypto currencies. It was built with react and firebase.',
    path: 'https://garymorgan.netlify.app/',
  },
  {
    id: 6,
    icon: admin,
    title: 'Admin Dashboard',
    description:
      'This was built during the side hustle internship as part of the grading system. I built the login page and the layout used for the dashboard and the first page you see when you enter the dashboard',
    path: 'https://adminlogin10.netlify.app/',
  },
];
