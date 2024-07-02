import Link from "next/link"

const NewsSpotlight = () => {
  return (
    <div>
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 max-w-6xl mx-auto px-4 py-8">
      <div>
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
          <img
            src="/placeholder.svg"
            alt="News Hero Image"
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              India Clinches Thrilling Victory Against Australia in Cricket World Cup
            </h1>
            <div className="flex items-center text-white space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <UserIcon className="w-4 h-4" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="w-4 h-4" />
                <span>April 10, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="prose max-w-none mt-8">
          <p>
            In a thrilling match at the Cricket World Cup, the Indian national team clinched a narrow victory against
            their fierce rivals, Australia. The match was a nail-biter, with both teams putting up a fierce fight
            throughout the game.
          </p>
          <p>
            The Indian team, led by their charismatic captain, put on a spectacular display of skill and determination.
            The bowlers managed to contain the Australian batsmen, while the Indian batsmen showed their prowess by
            scoring a formidable total.
          </p>
          <p>
            The match came down to the wire, with the Australian team making a late surge and nearly snatching victory
            from the jaws of defeat. However, the Indian team held their nerve and managed to secure the win, much to
            the delight of their passionate fans.
          </p>
          <p>
            The victory was a testament to the hard work and dedication of the Indian team, who have been preparing for
            this tournament for months. The win has also cemented their position as one of the favorites to lift the
            coveted trophy.
          </p>
          <p>
            As the team celebrates their hard-fought victory, the fans are already looking forward to the next match,
            where they hope to see their team continue their winning streak and bring home the championship.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Related News</h2>
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center space-x-4 bg-muted p-4 rounded-lg hover:bg-muted/50 transition-colors"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                alt="Related News Image"
                width={80}
                height={80}
                className="rounded-lg w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">India Defeats Pakistan in Thrilling Cricket Match</h3>
                <div className="text-sm text-muted-foreground">April 5, 2023</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-4 bg-muted p-4 rounded-lg hover:bg-muted/50 transition-colors"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                alt="Related News Image"
                width={80}
                height={80}
                className="rounded-lg w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">Cricket Legend Retires After Illustrious Career</h3>
                <div className="text-sm text-muted-foreground">March 28, 2023</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-4 bg-muted p-4 rounded-lg hover:bg-muted/50 transition-colors"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                alt="Related News Image"
                width={80}
                height={80}
                className="rounded-lg w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">Women's Cricket Team Wins Historic Tournament</h3>
                <div className="text-sm text-muted-foreground">February 15, 2023</div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-muted border-muted focus:border-primary focus:ring-primary"
            />
            <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </button>
            <p className="text-sm text-muted-foreground">
              Stay up-to-date with the latest news and updates from our cricket website.
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewsSpotlight

function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }