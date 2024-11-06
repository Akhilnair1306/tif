import { Button } from '@/components/ui/button';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-8 items-center md:h-[468px] h-auto mt-[-100px] md:mt-4"> 
      <div className="flex-1 pr-0 md:pr-8 mb-4 md:mb-0">
        <img 
          src="/about.jpg" 
          alt="About Us" 
          className="w-[384px] h-[468px] hidden md:block md:ml-16" 
        /> 
      </div>
      <div className="flex-1 md:pl-8 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4"> 
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-blue-950 font-poppins">About Us</h2>
        <p className="text-md md:text-lg font-sans mb-6">
          Lorem Ipsum is simply dummy text of the printing and <br className="hidden md:inline"/> 
          typesetting industry. Lorem Ipsum has been the industry's <br className="hidden md:inline"/> 
          standard dummy text ever since the 1500s, when an unknown <br className="hidden md:inline"/> 
          printer took a galley of type and scrambled it to make a type <br className="hidden md:inline"/> 
          specimen book. It has survived not only five centuries.
        </p>
        <Button
          variant="outline"
          className="rounded-full h-12 bg-red-500 text-white mt-5"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

export default About;
