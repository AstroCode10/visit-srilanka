import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Landmark, Mountain } from "lucide-react";
import Link from "next/link";

const exploreDestinations = [
  {
    name: "Sigiriya Rock Fortress",
    description: "An ancient rock fortress with stunning views and historic frescoes.",
    image: "/images/sigiriya.jpg",
    href: "/explore/sigiriya",
  },
  {
    name: "Ella",
    description: "A peaceful mountain village surrounded by tea plantations and waterfalls.",
    image: "/images/ella.jpg",
    href: "/explore/ella",
  },
  {
    name: "Galle Fort",
    description: "A UNESCO World Heritage Site with colonial-era architecture and beaches.",
    image: "/images/galle.jpg",
    href: "/explore/galle",
  },
];

export default function ExploreHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white py-12 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Explore Top Destinations in Sri Lanka
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {exploreDestinations.map((destination, index) => (
          <Link key={index} href={destination.href}>
            <Card className="overflow-hidden cursor-pointer bg-white/5 border-white/10 hover:border-white transition border rounded-2xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-56 w-full object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={20} /> {destination.name}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/plan">
          <Button variant="default" size="lg">
            Start Planning Your Trip
          </Button>
        </Link>
      </div>
    </div>
  );
}