"use client";
import RelatedNews from "../Related News";
import Head from "next/head";
import Loader from '@/Components/Loader';
import { format, formatDistance, parseISO } from 'date-fns';


const formatPostDate = (dateString) => {
  const postDate = parseISO(dateString);
  const now = new Date();

  const isToday = now.toDateString() === postDate.toDateString();
  const daysAgo = Math.floor((now - postDate) / (1000 * 60 * 60 * 24)); 

  if (isToday) {
    return formatDistance(postDate, now).replace(/about /, '').replace(/ ago/, '') + " ago";
  } else if (daysAgo === 1) {
    return "1 day ago"; // Singular for 1 day
  } else if (daysAgo === 2) {
    return "2 days ago"; // Singular for 2 days
  } else {
    return format(postDate, 'MMM d, yyyy'); // Formatted date for anything older than 2 days
  }
};

const Spotlight = ({ spotlightData, API_BASE_URL }) => {
  if (!spotlightData || spotlightData.length === 0) {
    return <div>No data available.</div>;
  }

  const currentItem = spotlightData[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{currentItem ? currentItem.Title : <Loader />}</title>
        {currentItem && (
          <>
            <meta property="og:title" content={currentItem.Title} />
            <meta property="og:image" content={`${API_BASE_URL + currentItem.Thumbnail}`} />
            <meta property="og:description" content={(currentItem.Description).slice(0, 150) + '...'} />
          </>
        )}
      </Head>
      <section className="w-full bg-muted pb-12 md:pb-24 lg:pb-20 pt-10">
        <div className="px-4 space-y-10 xl:space-y-16">
          <div className="flex justify-center">
            {spotlightData.map((Item) => (
              <img
                key={Item['ID']}
                src={`${API_BASE_URL + Item.Thumbnail}`}
                width={800}
                alt="Featured Image"
                className="w-full h-[200px] md:h-[400px] rounded-lg md:object-contain object-cover"
              />
            ))}
          </div>
          <div className="flex flex-col items-start space-y-4">
            {spotlightData.map((Item) => (
              <div key={Item['ID']}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2e3192] mb-2">
                  {Item.Title}
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div>{Item.Author}</div>
                  <div>|</div>
                  <div>{formatPostDate(Item['Post Date'])}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="w-full px-4 md:px-10">
          {spotlightData.map((Item) => (
            <div
              key={Item['ID']}
              dangerouslySetInnerHTML={{
                __html: Item.Description.replace(/\n/g, '<br />'),
              }}
            />
          ))}
        </section>

        <section className="w-full bg-muted py-12 md:py-24 lg:py-32 px-4">
          <h2 className="text-2xl font-bold pb-4 text-[#2e3192]">Related News</h2>
          <div className="px-4 flex justify-center flex-col items-center">
            <RelatedNews />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Spotlight;
