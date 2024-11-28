import Loder from '@/Components/Loder';
import dynamic from 'next/dynamic';

const Matches = dynamic(() => import('@/app/(Routing)/Home/Matches'), {
  ssr: false,
});

const LatestNews = dynamic(() => import('@/app/(Routing)/Home/Latest News'), {
  loading: () =><Loder />,
  ssr: false,
});

const YoutubeSlider = dynamic(() => import('@/app/(Routing)/Home/YouTube Video'), {
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
