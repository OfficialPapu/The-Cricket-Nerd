"use client"
import axios from "axios";
import RelatedNews from "../Related News";
import { useEffect, useState } from "react";
const Spotlight=({params})=> {
  let Slug=params.Slug;
  useEffect(() => {
    FetchSpotLightData();
  }, [])
  const [SpotlightData, setSpotlightData] = useState([]);
  const FetchSpotLightData = async () => {
    let response = await axios.get("http://localhost/The Cricket Nerd/API/GET/News.php", {
      params: {
        FetchNewsDetails: true,
        Slug:Slug,
      }
    })
    if(response.data > 0){
      setSpotlightData(response.data);
    }else{
      alert("nothing found")
    }

  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-4 bg-muted flex md:justify-start justify-center relative">
        <div className="container px-4 md:px-6  relative z-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2  hero-section ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Virat Kohli Scores Stunning Century in ODI Series
              </h1>
              <p className="text-muted-foreground md:text-xl">By John Doe</p>
            </div>
          </div>
        </div>
        <div className="hero-section-blur absolute h-[100%] w-[100%] top-0 left-0 z-1"></div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 px-4 md:px-6 py-12 w-[100vw]">
        <article className="prose prose-gray dark:prose-invert">
          <h2>Kohli Shines as India Clinch Series</h2>
          <p>
            In a thrilling display of cricketing prowess, Virat Kohli led India to a series victory with a stunning
            century in the final ODI. The former Indian captain's masterful innings of 120 runs off just 112 balls
            propelled the team to a commanding total, setting the stage for a comprehensive win.
          </p>
          <p>
            Kohli's knock was a testament to his skill and determination, as he navigated the challenging pitch
            conditions with ease. His ability to time the ball to perfection and find the gaps in the field left the
            opposing bowlers scrambling for answers.
          </p>
          <p>
            The victory was particularly significant for Kohli, who has been working tirelessly to regain his form after
            a recent slump. This innings not only showcased his class but also served as a reminder of the impact he can
            have on the game when he is at his best.
          </p>
          <p>
            "It's always special to contribute to a team's success," Kohli said in the post-match interview. "I'm
            grateful for the support\n of my teammates and the fans, and I'm looking forward to\n continuing to work
            hard and help the team achieve more\n victories."
          </p>
          <p>
            The series win is a crucial step for India as they prepare for the upcoming World Cup, and Kohli's
            performance will undoubtedly boost the team's confidence and morale.
          </p>
        </article>
        <RelatedNews />
      </div>
    </div>
  )
}

export default Spotlight;