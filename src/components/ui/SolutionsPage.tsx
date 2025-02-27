import React from 'react';
import Image from 'next/image';

interface Solution {
  title: string;
  image: string;
}

const solutions: Solution[] = [
  { title: 'Smart Factory', image: '/solution1.png' },
  { title: 'Manufacturing Execution Systems', image: '/solution2.png' },
  { title: 'Product Development Management', image: '/product.png' },
  { title: 'Advanced Manufacturing', image: '/solution3.png' },
  { title: 'SAP Integration Solutions', image: '/sapimage.png' },
  { title: 'Cloud Deployement Solutions', image: '/solution4.png' },
  { title: 'Data Analytics', image: '/analytics.png' },
  { title: 'Finance Analytics', image: '/solution5.png' },
  { title: 'IOT Big Data', image: '/solution6.png' },
];

const SolutionsPage: React.FC = () => {
  return (
    <div className="solutions-container py-12">
      <h2 className="text-3xl font-bold text-center mb-12"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-item flex flex-col items-center text-center p-4 bg-[#b7e1f1] rounded-lg ">
            <Image src={solution.image} alt={solution.title} width={300} height={300} className="mb-4 rounded-full" />
            <h3 className="text-sm font-medium">{solution.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
