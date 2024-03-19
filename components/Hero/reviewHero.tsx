'use client';

import React from 'react';
const reviewHero = () => {
  const [review, setReview] = React.useState('“Best accessory to own”');

  const reviews: { [key: string]: string } = {
    VOGUE: '“Best accessory to own”',
    'THE ZOE REPORT': '“A must-have for the fashion-forward”',
    'NEW YORK TIMES': '“Revolutionizing style and comfort”',
    'MARIE CLAIRE': '“The ultimate statement piece”',
    "HARPER'S BAZAAR": '“Elegance and sophistication combined”'
  };
  return (
    <div className="flex h-[55vh] flex-col items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mb-6 text-sm uppercase tracking-widest text-white">In the news</div>
        <h1 className="mb-6 text-3xl font-semibold italic">{review}</h1>
        <div className="text-base font-normal tracking-wider text-white">
          {Object.keys(reviews).map((source, index) => (
            <React.Fragment key={source}>
              <a
                onClick={() => {
                  if (reviews[source]) {
                    setReview(reviews[source] as string);
                  }
                }}
                className="transition-colors duration-300 hover:text-[#fcd34d] hover:underline"
              >
                {source}
              </a>
              {index < Object.keys(reviews).length - 1 && <span className="mx-4">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default reviewHero;
