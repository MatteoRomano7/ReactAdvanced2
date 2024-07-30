import React from 'react';

const MyFooter = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <span className="text-gray-600">© {new Date().getFullYear()} BookShelf!</span>
        <blockquote className="text-gray-500 mt-2 italic">
          All rights reserved. <br /> No, they're not. That's a fake page
        </blockquote>
      </div>
    </footer>
  );
};

export default MyFooter;