import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Bloom & Co.",
    avatar: "/yorum_profil1.jpg",
    text: "Working with this team transformed our brand. Our engagement doubled within the first three months and the results keep coming.",
  },
  {
    name: "David Chen",
    role: "Founder, Northpeak",
    avatar: "/yorum_profil2.jpg",
    text: "Creative, data-driven, and genuinely invested in our success. The campaigns they built delivered real, measurable growth.",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Lead, Vela",
    avatar: "/yorum_profil3.jpg",
    text: "From strategy to execution, everything was seamless. They understood our vision and brought it to life beyond expectations.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex h-[85vh] flex-col">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          className="-z-10 object-cover"
        />

        <Header />

        <div className="flex flex-1 items-center justify-center px-6 pb-56">
          <h1 className="font-fraunces text-center text-5xl font-semibold uppercase text-white sm:text-7xl lg:text-8xl">
            We Are Creatives
          </h1>
        </div>

        <a
          href="#content"
          aria-label="Scroll down"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white transition-opacity hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </section>

      <section id="content" className="grid grid-cols-1 gap-0 bg-white md:grid-cols-2">
        <div className="flex flex-col justify-center bg-white p-10 sm:p-16 md:aspect-[5/4] lg:p-20">
          <h2 className="font-fraunces text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            We Grow Brands That People Love
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
            From strategy to standout campaigns, we craft marketing that turns
            attention into lasting growth. Our team blends data, creativity, and
            storytelling to help your brand connect with the right audience.
          </p>
          <a
            href="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
        <div className="relative aspect-[5/4] bg-gray-200">
          <Image src="/1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[5/4] bg-gray-300">
          <Image src="/2.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center bg-white p-10 sm:p-16 md:aspect-[5/4] lg:p-20">
          <h2 className="font-fraunces text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Campaigns That Drive Real Results
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
            We design and launch performance-driven campaigns across every
            channel. Measurable impact, sharper targeting, and creative that
            keeps your audience coming back for more.
          </p>
          <a
            href="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
        <div className="relative aspect-[5/4] bg-gray-500">
          <Image src="/3.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 sm:p-16">
            <h3 className="font-fraunces text-4xl font-bold leading-tight text-emerald-900 sm:text-5xl">
              Creative Strategy
            </h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-emerald-900 sm:text-lg">
              Ideas rooted in insight, built to make your brand unforgettable.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative aspect-[5/4] bg-gray-600">
          <Image src="/4.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 sm:p-16">
            <h3 className="font-fraunces text-4xl font-bold leading-tight text-blue-950 sm:text-5xl">
              Digital Growth
            </h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-blue-950 sm:text-lg">
              Data-driven marketing that scales your reach and revenue.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-16 py-24 sm:px-24 lg:px-32">
        <h2 className="font-fraunces text-4xl font-bold text-gray-900 sm:text-5xl">
          What Our Clients Say
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="flex flex-col">
              <p className="flex-1 text-base leading-relaxed text-gray-700 sm:text-lg">
                “{review.text}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-0 bg-white md:grid-cols-4">
        <div className="relative aspect-[4/5] bg-gray-200">
          <Image src="/5.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] bg-gray-300">
          <Image src="/6.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] bg-gray-400">
          <Image src="/7.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] bg-gray-500">
          <Image src="/8.jpg" alt="" fill className="object-cover" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
