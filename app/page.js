import dynamic from 'next/dynamic';

const Matches = dynamic(() => import('@/app/(Routing)/Home/Matches'), {
  loading: () => <p>Loading Matches...</p>,  // Fallback UI
  ssr: false, 
});

const LatestNews = dynamic(() => import('@/app/(Routing)/Home/Latest News'), {
  loading: () => <p>Loading Latest News...</p>,  // Fallback UI
  ssr: false, 
});

const YoutubeSlider = dynamic(() => import('@/app/(Routing)/Home/YouTube Video'), {
  loading: () => <p>Loading YouTube Slider...</p>,  // Fallback UI
  ssr: false, 
});

export default function Home() {
  return (
    <>
      <Matches />
      <LatestNews />
      <YoutubeSlider />
    </>
  );
}
