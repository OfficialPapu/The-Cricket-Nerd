import axios from "axios";
import * as cheerio from "cheerio"; // Import as a namespace
import Spotlight from "./Spotlight";

const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchSpotLightData(Slug) {
  try {
    const response = await axios.get(API_NEWS, {
      params: {
        FetchNewsDetails: true,
        Slug: Slug,
      },
    });

    return response.data.length > 0 ? response.data : [];
  } catch (error) {
    console.error("Error fetching spotlight data:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const spotlightData = await fetchSpotLightData(params.Slug);
  const currentItem = spotlightData[0];

  const stripHtml = (html) => {
    const $ = cheerio.load(html);
    return $.text();
  };
  const strippedDescription = currentItem ? stripHtml(currentItem.Description) : "";
  const Description = strippedDescription.slice(0, 150) + (strippedDescription.length > 150 ? "" : "");

  return {
    title: currentItem ? currentItem.Title : "The Cricket Nerd",
    description: Description,
    openGraph: {
      title: currentItem ? currentItem.Title : "The Cricket Nerd",
      images: currentItem ? `${API_BASE_URL + currentItem.Thumbnail}` : "",
      description: Description,
    },
  };
}

const Page = async ({ params }) => {
  const spotlightData = await fetchSpotLightData(params.Slug);

  return <Spotlight spotlightData={spotlightData} API_BASE_URL={API_BASE_URL} />;
};

export default Page;
