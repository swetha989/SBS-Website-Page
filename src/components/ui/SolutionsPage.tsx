import React from 'react';
// import Image from 'next/image';
import { FocusCards } from './focus-cards';

interface Card {
  title: string;
  src: string;
}

const solutions: Card[]= [
  { title: 'Factory of the Future', src: '/solution1.png' },
  { title: 'Manufacturing Operations Management', src: '/solution2.png' },
  { title: 'Product Lifecycle Management', src: '/product.png' },
  { title: 'Digital Manufacturing', src: '/solution3.png' },
  { title: 'SAP Implement Integration Services', src: '/sap.png' },
  { title: 'Cloud Enablement Migration', src: '/solution4.png' },
  { title: 'Analytics', src: '/analytics.png' },
  { title: 'Intelligence Finance', src: '/solution5.png' },
  { title: 'IOT Big Data',src: '/solution6.png' },
];

const SolutionsPage: React.FC = () => {
  return (
    <FocusCards cards={solutions} />
  );
};

export default SolutionsPage;
