import { Carousel } from 'components/carousel';
import { Suspense } from 'react';
import DetailsHero from '../components/Hero/detailsHero';
import EmailModal from '../components/Hero/emailModal';
import VideoHero from '../components/Hero/videoHero';
import WatchHero from '../components/Hero/watchHero';
import Footer from '../components/footer';
export const runtime = 'edge';

export const metadata = {
  description: 'Welcome to MPECS! We sell leather products and watch straps.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <EmailModal />
      <VideoHero />
      <WatchHero />
      <DetailsHero />
      <Suspense>
        <Carousel />
      </Suspense>
      <Footer />
    </>
  );
}
