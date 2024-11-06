import { Button } from '@/components/ui/button';
import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="w-80 h-96 flex flex-col justify-between">
      <a href="#" className="block rounded-lg p-0 shadow-sm shadow-indigo-100">
        <div className="flex justify-center mt-3">
          <img
            alt={article.title}
            src={article.image}
            className="h-52 w-72 rounded-md object-cover"
          />
        </div>
        <div className="mt-4 space-y-2 px-2 ml-4">
          <h3 className="text-lg font-bold font-poppins text-blue-950">{article.title}</h3>
          <p className="text-sm text-gray-500 font-sans">
            {article.description}
          </p>
        </div>
        <div className='ml-4 mt-5 mb-5'>
          <Button
            variant="outline"
            className="rounded-full font-sans border border-black text-black"
          >
            Read More
          </Button>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
