import React from 'react';
import Image from 'next/image';

interface Solution {
  title: string;
  image: string;
}

const solutions: Solution[] = [
  { title: 'Factory of the Future', image: '/solution1.png' },
  { title: 'Manufacturing Operations Management', image: '/solution2.png' },
  { title: 'Product Lifecycle Management', image: '/product.png' },
  { title: 'Digital Manufacturing', image: '/solution3.png' },
  { title: 'SAP Implement Integration Services', image: '/sap.png' },
  { title: 'Cloud Enablement Migration', image: '/solution4.png' },
  { title: 'Analytics', image: '/analytics.png' },
  { title: 'Intelligence Finance', image: '/solution5.png' },
  { title: 'IOT Big Data', image: '/solution6.png' },
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="solutions-container py-12">
      <h2 className="text-3xl font-bold text-center mb-12"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-item flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <Image src={solution.image} alt={solution.title} width={50} height={50} className="mb-4 rounded-full" />
            <h3 className="text-lg font-medium">{solution.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
