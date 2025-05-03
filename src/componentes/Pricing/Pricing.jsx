import { useState } from "react";
import { FaCheck, FaClock, FaSync } from "react-icons/fa";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Standard");

  return (
    <section className="py-20 px-4 sm:px-6"> {/* Añadido sm:px-6 para mejor padding en móviles */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-10">
        {/* Título a la izquierda - Ajustado para móvil */}
        <div className="text-center md:text-left md:w-1/3 px-4 md:px-0"> {/* Añadido px-4 en móvil */}
          <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase mb-2">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">My Pricing</h2> {/* Texto más pequeño en móvil */}
        </div>

        {/* Caja de precios - Ajustes responsive */}
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md mx-auto lg:w-1/2 lg:max-w-none p-6 sm:p-8 flex flex-col min-h-[600px]">
          {/* Tabs */}
          <div className="flex justify-between bg-gray-100 rounded-xl overflow-hidden mb-6">
            {["Static", "Standard", "Premium"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-xs sm:text-sm font-medium ${
                  activeTab === tab
                    ? "bg-white text-pink-500 shadow-sm"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === "Standard" && activeTab === "Standard" && (
                  <span className="text-[8px] sm:text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full ml-1 sm:ml-2">
                    Recommended
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Contenido ajustado */}
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Design Make this Page
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Elementor</p>
              </div>
              <div className="bg-white shadow-md px-3 sm:px-4 py-2 rounded-md text-pink-500 font-bold text-lg sm:text-xl">
                $50.00
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Making this the first true generator on the Internet. It uses a
              dictionary & plugin Development.
            </p>

            {/* Lista más compacta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm text-gray-700 mb-6 flex-grow">
              {[
                "1 Page with Elementor",
                "Design Customization",
                "Responsive Design",
                "Content Upload",
                "Design Customization",
                "2 Plugins/Extensions",
                "multipage Elementor",
                "Design Figma",
                "Maintaince Design",
                "Content Upload",
                "Design With XD",
                "8 Plugins/Extensions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheck className="text-pink-500 flex-shrink-0 text-xs sm:text-sm" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Botón e info ajustados */}
            <div className="mt-6 sm:mt-10">
              <button className="bg-white border border-gray-200 shadow-md hover:shadow-lg text-pink-500 font-semibold py-3 px-6 rounded-xl w-full mb-3 cursor-pointer text-sm sm:text-base">
                ORDER NOW <span className="ml-2">→</span>
              </button>
              
              <div className="flex justify-center gap-4 text-[10px] sm:text-xs text-gray-500 pb-1 mt-3 sm:mt-5">
                <div className="flex items-center gap-1">
                  <FaClock className="text-xs" /> 2 Days Delivery
                </div>
                <div className="flex items-center gap-1">
                  <FaSync className="text-xs" /> Unlimited Revisions
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