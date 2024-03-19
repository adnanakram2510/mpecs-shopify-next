'use client';
import { Inter, Oswald } from 'next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutContent from './AboutContent'; // Make sure the path is correct

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });

const about = () => {
  return (
    <ParallaxProvider>
      <AboutContent inter={inter} oswald={oswald} />
    </ParallaxProvider>
  );
};

export default about;
