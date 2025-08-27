import React from 'react';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import PricingPage from '../pages/PricingPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import NexifyOnePage from '../pages/NexifyOnePage';
import BriefPage from '../pages/BriefPage';
import CareerPage from '../pages/CareerPage';
import DigitalUniversePage from '../pages/DigitalUniversePage';


interface Route {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const routes: Route[] = [
  { path: '/', component: HomePage, exact: true },
  { path: '/o-nas', component: AboutUsPage },
  { path: '/sluzby', component: ServicesPage },
  { path: '/projekty', component: ProjectsPage },
  { path: '/cennik', component: PricingPage },
  { path: '/blog', component: BlogPage },
  { path: '/kontakt', component: ContactPage },
  { path: '/nexify-one', component: NexifyOnePage },
  { path: '/brief', component: BriefPage },
  { path: '/kariera', component: CareerPage },
  { path: '/digitalny-vesmir', component: DigitalUniversePage },
  
  // Example nested routes - these can be built out later
  // For now they will all render the main services page
  { path: '/sluzby/apps', component: ServicesPage },
  { path: '/sluzby/seo', component: ServicesPage },
  { path: '/sluzby/design', component: ServicesPage },
  { path: '/sluzby/commerce', component: ServicesPage },
  { path: '/sluzby/cards', component: ServicesPage },
  { path: '/sluzby/labs', component: ServicesPage },
];