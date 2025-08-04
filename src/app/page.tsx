// app/page.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        <Image
          src="/images/hero-sigiriya.jpg"
          alt="Sigiriya"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Sri Lanka
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Explore hidden gems, iconic landmarks, and cultural treasures
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/explore">
              <Button variant="default" size="lg" as="a">Explore Destinations</Button>
            </Link>
            <Link href="/plan">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Top Experiences</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Beaches", img: "/images/beaches/mirissa.jpg", link: "/beaches" },
            { title: "Mountains", img: "/images/mountains/ella.jpg", link: "/mountains" },
            { title: "Temples", img: "/images/temples/dambulla.jpg", link: "/temples" },
            { title: "Food", img: "/images/food/kottu.jpg", link: "/food" },
          ].map((category) => (
            <Link key={category.title} href={category.link} className="block group">
              <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition">
                <Image
                  src={category.img}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">Discover the best {category.title.toLowerCase()} in Sri Lanka</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How to Explore */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How to Explore</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "1. Choose", desc: "Pick a category or destination to begin your journey." },
              { title: "2. Learn", desc: "Read curated highlights and local tips." },
              { title: "3. Plan", desc: "Make your travel itinerary with ease." },
            ].map((step) => (
              <div key={step.title} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destination of the Month */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Destination</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/images/featured/nuwara-eliya.jpg"
            alt="Nuwara Eliya"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold mb-4">August Pick: Nuwara Eliya</h3>
            <p className="text-gray-700 mb-4">
              Known as &quot;Little England,&quot; this hill country escape offers tea plantations, cool weather, and colonial charm.
            </p>
            <Link href="/mountains/nuwara-eliya">
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}