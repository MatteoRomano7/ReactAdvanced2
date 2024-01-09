import React from 'react';

const MyFooter = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center">
      <div className="container">
        <span className="text-muted">© {new Date().getFullYear()} BookShelf!</span>
        <blockquote className="text-muted">All rights reserved. <br /> No, they're not. That's a fake page</blockquote>
      </div>
    </footer>
  );
};

export default MyFooter;