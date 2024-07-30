import React from 'react';

const Welcome = () => {
  return (
    <div className="container mx-auto px-4 mb-8 bg-yellow-400">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 animate-slide-in-left">
          <h3 className="text-2xl font-bold mb-4">Welcome to BookShelf!</h3>
          <h5 className="text-lg">
            If you're too lazy to get up off the couch, dress up and go to a
            real library, that's the place for you!
          </h5>
        </div>
        <div className="md:w-1/2 animate-slide-in-right">
          <img
            src="../assets/images/bookshelf.jpg"
            alt="bookshelf"
            className="w-4/5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

// Aggiungi questi stili al tuo file CSS globale o usa una soluzione CSS-in-JS
const styles = `
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.5s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out;
}
`;

export default Welcome;