import { useState } from "react";
import { FaCheck, FaClock, FaSync } from "react-icons/fa";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Standard");

  // Datos para cada pestaña
  const pricingData = {
    Static: {
      title: "Basic Static Page",
      price: "$30.00",
      description: "Ideal for simple static websites that don't require frequent updates or complex functionality.",
      features: [
        "1 Static Page Design",
        "Basic Design Customization",
        "Responsive Design",
        "Content Upload (1 time)",
        "Contact Form Integration",
        "1 Plugin/Extension",
        "SEO Basic Setup",
        "Basic Performance Optimization",
        "1 Revision Round",
        "Email Support (1 week)",
        "Basic Security Setup",
        "Delivery in 5 Days"
      ],
      delivery: "5 Days Delivery",
      revisions: "1 Revision"
    },
    Standard: {
      title: "Design Make this Page",
      price: "$50.00",
      description: "Making this the first true generator on the Internet. It uses a dictionary & plugin Development.",
      features: [
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
        "8 Plugins/Extensions"
      ],
      delivery: "2 Days Delivery",
      revisions: "Unlimited Revisions"
    },
    Premium: {
      title: "Premium Custom Design",
      price: "$120.00",
      description: "Complete solution for businesses needing a high-end, fully customized web presence with ongoing support.",
      features: [
        "5 Pages with Elementor",
        "Full Design Customization",
        "Mobile-First Responsive",
        "Unlimited Content Upload",
        "Advanced Animations",
        "10+ Plugins/Extensions",
        "E-commerce Integration",
        "Custom Figma Designs",
        "1 Month Maintenance",
        "Priority Support",
        "Custom XD Designs",
        "SEO Advanced Setup"
      ],
      delivery: "1 Day Delivery",
      revisions: "Unlimited Revisions + Priority"
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-10">
        {/* Título a la izquierda */}
        <div className="text-center md:text-left md:w-1/3 px-4 md:px-0">
          <p className="text-sm font-semibold text-pink-500 tracking-wide uppercase mb-2">
            Pricing
          </p>
          <h2 className="sm:text-5xl text-[#212122] text-4xl font-extrabold">My Pricing</h2>
        </div>

        {/* Caja de precios */}
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md mx-auto lg:w-1/2 lg:max-w-none p-6 sm:p-8 flex flex-col min-h-[600px]">
          {/* Tabs */}
          <div className="flex justify-between bg-gray-100 rounded-xl overflow-hidden mb-6">
            {["Static", "Standard", "Premium"].map((tab) => (
              <button
                key={tab}
                className={`cursor-pointer flex-1 py-3 text-xs sm:text-sm font-medium relative ${
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

          {/* Contenido dinámico según pestaña */}
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {pricingData[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Elementor</p>
              </div>
              <div className="bg-white shadow-md px-3 sm:px-4 py-2 rounded-md text-pink-500 font-bold text-lg sm:text-xl">
                {pricingData[activeTab].price}
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              {pricingData[activeTab].description}
            </p>

            {/* Lista de características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm text-gray-700 mb-6 flex-grow">
              {pricingData[activeTab].features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheck className="text-pink-500 flex-shrink-0 text-xs sm:text-sm" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Botón e info */}
            <div className="mt-6 sm:mt-10">
              <button className="bg-white border border-gray-200 shadow-md hover:shadow-lg text-pink-500 font-semibold py-3 px-6 rounded-xl w-full mb-3 cursor-pointer text-sm sm:text-base transition-all duration-300">
                ORDER NOW <span className="ml-2">→</span>
              </button>
              
              <div className="flex justify-center gap-4 text-[10px] sm:text-xs text-gray-500 pb-1 mt-3 sm:mt-5">
                <div className="flex items-center gap-1">
                  <FaClock className="text-xs" /> {pricingData[activeTab].delivery}
                </div>
                <div className="flex items-center gap-1">
                  <FaSync className="text-xs" /> {pricingData[activeTab].revisions}
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