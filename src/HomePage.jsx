import React from "react";
import Header from "./Header";

const portfolio = [
  {
    id: 1,
    title: "Modern Farmhouse Reno",
    location: "Dallas, TX",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    title: "Urban Oasis Kitchen",
    location: "Austin, TX",
    img: "https://images.unsplash.com/photo-1505691723518-36a2b7f30f2b?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 3,
    title: "Timeless Traditional",
    location: "San Antonio, TX",
    img: "https://images.unsplash.com/photo-1505691723518-36a2b7f30f2b?auto=format&fit=crop&w=1200&q=60",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="relative bg-gray-50 rounded-lg overflow-hidden my-8">
          <div className="h-96 sm:h-[480px] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1600585154514-9cbf9b7a5e6d?auto=format&fit=crop&w=1800&q=70"
              alt="Beautiful white kitchen with island"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8">
              <a
                href="#portfolio"
                className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded shadow-md hover:bg-gray-800 transition-colors"
              >
                VIEW PORTFOLIO
              </a>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Designing Stunning, Functional Kitchens for Modern Living
            </h1>
            <p className="mt-6 text-gray-600 max-w-prose">
              With a passion for transforming spaces, I create bespoke kitchen designs
              that blend aesthetics with practicality. From concept to completion, my
              focus is delivering tailored solutions that elevate your home.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="border rounded-lg p-6">
              <h3 className="font-medium">Request a Consultation</h3>
              <p className="mt-2 text-sm text-gray-600">Start your kitchen transformation today.</p>
              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">Contact</button>
            </div>
          </div>
        </section>

        {/* Portfolio Thumbnails */}
        <section id="portfolio" className="my-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <article key={p.id} className="bg-white rounded shadow-sm overflow-hidden group">
                <img src={p.img} alt={`${p.title} - ${p.location}`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4">
                  <h4 className="font-medium text-sm">{p.title} - <span className="text-gray-500">{p.location}</span></h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-16 mb-24 border-t pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to design your dream kitchen?</h3>
              <p className="text-gray-600">Let's discuss styles, budgets, and timelines.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 px-5 py-3 rounded hover:bg-gray-50 transition-colors">View Portfolio</button>
              <button className="bg-gray-900 text-white px-5 py-3 rounded hover:bg-gray-800 transition-colors">Book Consultation</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}