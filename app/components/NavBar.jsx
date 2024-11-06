import { Button } from '@/components/ui/button';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 mt-2 mr-6">
      <img src="/logo.png" alt="Logo" className="h-16 w-auto ml-16" />
      <Button variant="outline" className="rounded-full font-sans h-10">
        Get in Touch
      </Button>
    </div>
  );
}

export default NavBar;

