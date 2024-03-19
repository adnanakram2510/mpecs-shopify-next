import Footer from 'components/footer';
import { Oxanium } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax } from 'react-scroll-parallax';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';

interface AboutContentProps {
  inter: { className: string };
  oswald: { className: string };
}
const oxanium = Oxanium({
  weight: '200',
  subsets: ['latin']
});

const oxaniumm = Oxanium({
  weight: '400',
  subsets: ['latin']
});

const AboutContent = ({ inter, oswald }: AboutContentProps) => {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        parallax.ref.current.style.setProperty('--progress', progress.toString());
        console.log(progress.toString());
      }
    }
  });

  const [isMobile, setIsMobile] = useState(false);
  const [translateYValues, setTranslateYValues] = useState<[number, number]>([0, -100]);
  const [translateYAboutText, setTranslateYAboutText] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth <= 500;

    const calculateTranslateYValues = (): [number, number] => {
      return isMobile ? [0, -50] : [0, -100];
    };

    setIsMobile(checkIsMobile());
    setTranslateYValues(calculateTranslateYValues());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
      setTranslateYValues(calculateTranslateYValues());
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newTranslateY = Math.max(0, scrollPosition / 5); // Adjust the divisor to control the speed of the effect
      setTranslateYAboutText(newTranslateY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    {
      src: './watch-strap-1.jpg'
    },
    {
      src: './watch-strap-2.jpg'
    },
    {
      src: './watch-strap-3.jpg'
    },
    {
      src: './watch-strap-4.jpg'
    }
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="relative h-screen bg-black text-white">
        <div className={inter?.className}></div>
        <main className="flex h-1/3 items-center justify-center text-center md:h-2/3">
          <Parallax translateY={[0, 0]}>
            <div className={oxaniumm?.className}>
              <div
                className="text-stroke"
                ref={parallax.ref as React.RefObject<HTMLHeadingElement>}
                style={
                  {
                    '--progress': parallax.ref.current
                      ? parallax.ref.current.style.getPropertyValue('--progress')
                      : '0',
                    letterSpacing: `calc(0.5vw - 1vw * var(--progress))`
                  } as React.CSSProperties
                }
              >
                <h1 className="text-5xl font-semibold uppercase md:text-9xl">ABOUT MPECS</h1>
              </div>
            </div>
          </Parallax>
        </main>

        <div className="flex items-center justify-center bg-black">
          <div className="about-image h-[500px] w-[350px] md:h-[800px] md:w-[1150px]">
            <Parallax translateY={translateYValues}>
              <ParallaxBanner className="rounded-3xl" style={{ aspectRatio: '2 / 1.2' }}>
                <div className="">
                  {isMobile ? (
                    <ParallaxBannerLayer
                      image="./mpecs-logo-2.png" // A different image optimized for mobile
                      speed={20}
                    />
                  ) : (
                    <ParallaxBannerLayer image="./mpecs-logo-2.png" speed={20} />
                  )}
                </div>
              </ParallaxBanner>
            </Parallax>
          </div>
        </div>

        <main
          className={oxanium?.className}
          style={{ transform: `translateY(-${translateYAboutText}px)` }}
        >
          <div className="about-text -pt-8 absolute flex w-screen -translate-y-[300px] bg-black px-8 pb-32 text-lg md:px-40 md:text-2xl">
            With over 40 years of experience, we are a manufacturer specializing in the production
            of various watch parts. Our expertise encompasses a wide range of components, including
            leather watch straps, stainless steel watch straps, watch cases, buckles, clasps, and
            watch boxes. Our proficiency in the field ensures high-quality products tailored to meet
            the diverse needs of the watch industry.
            <br />
            As major suppliers, we cater to a broad spectrum of clients, including OEMs, online
            retailers, and reputed private label brands on a global scale. Our comprehensive
            offering is designed to meet the exacting standards and specific requirements of our
            clientele, ensuring that we provide exceptional value and service in every transaction.
            <br /> <br /> <br />
            In addition to serving the manufacturing sector, we boast our own distribution network.
            This network is dedicated to the replacement and aftermarket, catering to dealers and
            distributors worldwide. Our presence in these markets allows us to deliver our
            high-quality watch parts and accessories to a wide audience, ensuring that we remain a
            key player in the watch manufacturing and distribution industry.
          </div>
        </main>
        <div className="parent-gallery bg-black">
          <div className="gallery-container mt-[0px] pb-12 md:mt-[00px]">
            {duplicatedImages.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image.src} />
              </div>
            ))}
          </div>
          <style jsx>{`
            @media (max-width: 390px) {
              .gallery-container {
                margin-top: 800px !important;
              }
            }
            @media (min-width: 391px) and (max-width: 430px) {
              .gallery-container {
                margin-top: 700px !important;
              }
            }
          `}</style>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutContent;
