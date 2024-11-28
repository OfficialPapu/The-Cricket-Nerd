import Loder from '@/Components/Loder';
import dynamic from 'next/dynamic';

const Matches = dynamic(() => import('@/app/(Routing)/Home/Matches'), {
  ssr: false,
});

const LatestNews = dynamic(() => import('@/app/(Routing)/Home/Latest News'), {
  loading: () => <Loder />,
  ssr: false,
});

const YoutubeSlider = dynamic(() => import('@/app/(Routing)/Home/YouTube Video'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <head>
        <title>The Cricket Nerd | Nepal Cricket News, Matches, Players</title>
        <meta name="description" content="The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket" />
        <meta name="keywords" content="Cricket news, cricket updates, match previews, cricket articles, cricket insights, player news, cricket blog, cricket analysis, upcoming matches, cricket stories." />
        <meta name="twitter:card" content="https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png" />
        <meta name="twitter:title" content="The Cricket Nerd | Nepal Cricket News, Matches, Players" />
        <meta name="twitter:description" content="The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket" />
        <meta property="og:description" content="The Cricket Nerd is your go-to source for the latest cricket news, match previews, player updates, and in-depth cricket analysis. Stay informed with detailed articles, match summaries, and expert opinions on everything cricket" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Cricket Nerd | Nepal Cricket News, Matches, Players" />
        <meta property="og:image" content="https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png" />
        <meta name="twitter:image" content="https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png" />
        <meta property="og:url" content="https://www.thecricketnerd.com" />
        <link rel="canonical" href="https://www.thecricketnerd.com" />
        <meta property="og:locale" content="en_US" />
      </head>
      <h1 className="hidden">The Cricket Nerd | Nepal Cricket News, Matches, Players</h1>
      <Matches />
      <LatestNews />
      <YoutubeSlider />
    </>
  );
}
