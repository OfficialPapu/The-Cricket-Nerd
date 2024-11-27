import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold text-[#2E3192] md:text-4xl">
            Contact Us
          </h1>

          <p className="mb-6 text-gray-700">
            We’d love to hear from you! Whether you have questions, feedback, or
            collaboration ideas, feel free to reach out to us.
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
              How to Reach Us
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@thecricnerd.com"
                  className="text-[#2E3192] underline"
                >
                  info@thecricnerd.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+9779827304128"
                  className="text-[#2E3192] underline"
                >
                  +9779827304128
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
              Follow Us on Social Media
            </h2>
            <p className="text-gray-700">
              Stay connected with The Cricket Nerd for the latest updates, news,
              and behind-the-scenes content. You can follow us on:
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://www.facebook.com/thecricketnerd01"
                target="_blank"
                className="text-[#2E3192] underline"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/thecricketnerd17/"
                target="_blank"
                className="text-[#2E3192] underline"
              >
                Instagram
              </Link>
              <Link
                href="https://www.youtube.com/@thecricketnerd17"
                target="_blank"
                className="text-[#2E3192] underline"
              >
                YouTube
              </Link>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-[#2E3192]">
              Feedback and Inquiries
            </h2>
            <p className="text-gray-700">
              Have suggestions to improve The Cricket Nerd? Want to collaborate
              or advertise with us? Don’t hesitate to contact us!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
