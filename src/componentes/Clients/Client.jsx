import React, { useState } from "react";

const categories = [
  "JavaScript",
  "Product Design",
  "Wordpress",
  "HTML to React",
  "React To Laravel",
  "Python",
];

const clients = [
  { name: "John Due", logo: "MS" },
  { name: "Smiths Marth", logo: "Jes Wedding" },
  { name: "Add Dev", logo: "Handcrafted" },
  { name: "Jone Due", logo: "Studio by A.Lin" },
  { name: "John Due", logo: "MS" },
  { name: "Adon Smith", logo: "Live Style" },
  { name: "Smitha Mila", logo: "MS" },
  { name: "Sultana Mila", logo: "Jes Wedding" },
  { name: "Jannat", logo: "MS" },
  { name: "Mila Dus", logo: "Live Style" },
  { name: "Marth Smiths", logo: "MS" },
  { name: "Marth Smiths", logo: "Handcrafted" },
];

export default function ClientsSection() {
  const [activeCategory, setActiveCategory] = useState("Product Design");

  return (
    <section className="py-17">
      <div className="max-w-7xl mx-auto px-4 text-justify">
        <p className="text-pink-600 font-semibold uppercase mb-2 ml-35">Popular Clients</p>
        <h2 className="text-4xl font-bold mb-12 ml-35">Awesome Clients</h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-20">
          {/* Categories */}
          <div className="w-full max-w-xs rounded-md" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full px-6 py-4 text-left text-lg font-medium transition-all duration-200 
                    ${activeCategory === category
                      ? "bg-pink-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white w-40 h-36 rounded-xl shadow-sm flex flex-col mr-3 justify-center text-center p-4"
                style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="text-xl font-semibold mb-2">{client.logo}</div>
                <div className="text-sm text-gray-600">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
