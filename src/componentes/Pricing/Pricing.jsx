import { useState } from "react";
import { FaCheck, FaClock, FaSync } from "react-icons/fa";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Standard");

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Título a la izquierda, alineado verticalmente */}
        <div className="text-center md:text-left md:w-1/3">
          <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase mb-2">
            Pricing
          </p>
          <h2 className="text-5xl font-bold text-gray-800">My Pricing</h2>
        </div>

        {/* Caja de precios */}
        <div className="bg-white shadow-xl rounded-2xl w-full lg:w-1/2 p-6 relative">
          {/* Tabs */}
          <div className="flex justify-between bg-gray-100 rounded-xl overflow-hidden mb-6">
            {["Static", "Standard", "Premium"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? "bg-white text-pink-500 shadow-sm"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === "Standard" && activeTab === "Standard" && (
                  <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full ml-2">
                    Recommended
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Detalles del plan */}
          <div className="text-left">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Design Make this Page
                </h3>
                <p className="text-sm text-gray-500">Elementor</p>
              </div>
              <div className="bg-white shadow-md px-4 py-2 rounded-md text-pink-500 font-bold text-xl">
                $50.00
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Making this the first true generator on the Internet. It uses a
              dictionary & plugin Development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-6">
              {[
                "1 Page with Elementor",
                "Design Customization",
                "Responsive Design",
                "Content Upload",
                "Design Customization",
                "2 Plugins/Extensions",
                "multipage Elementor",
                "Design Figma",
                "MAintaince Design",
                "Content Upload",
                "Design With XD",
                "8 Plugins/Extensions",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <FaCheck className="text-pink-500 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Botón */}
            <div className="flex  sm:flex-row sm:items-center sm:justify-between">
              <button className="bg-white border border-gray-200 shadow-md hover:shadow-lg text-pink-500 font-semibold py-3 px-6 rounded-xl w-full sm:w-auto mb-4 sm:mb-0">
                ORDER NOW <span className="ml-2">→</span>
              </button> 
            
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaClock /> 2 Days Delivery
                </div>
                <div className="flex items-center gap-1">
                  <FaSync /> Unlimited Revisions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
