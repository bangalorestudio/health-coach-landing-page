import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { YouTubePlayer } from './YouTubePlayer';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />

    <YouTubePlayer
      title="We've had Hundreds of Success Stories"
      description="We take the best of what has worked in the past, and make a plan unique to you. Reach out to learn more."
      videoId={'9lsk6Akx1Ys'}
      reverse
    />
    <Footer />
  </div>
);

export { Base };
