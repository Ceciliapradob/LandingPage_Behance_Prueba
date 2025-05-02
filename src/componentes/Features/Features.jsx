import {
    FaBars,
    FaBookOpen,
    FaTv,
    FaCommentDots,
    FaWifi,
    FaFan,
  } from "react-icons/fa";
  
  const Features = () => {
    const cards = [
      {
        icon: <FaBars className="text-[#FF014F] text-xl" />,
        title: "Business Stratagy",
        description:
          "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      },
      {
        icon: <FaBookOpen className="text-[#FF014F] text-xl" />,
        title: "App Development",
        description:
          "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
      },
      {
        icon: <FaTv className="text-[#FF014F] text-xl" />,
        title: "App Development",
        description:
          "I throw myself down among the tall grass by the stream as I lie close to the earth.",
      },
      {
        icon: <FaCommentDots className="text-[#FF014F] text-xl" />,
        title: "Mobile App",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority.",
      },
      {
        icon: <FaWifi className="text-[#FF014F] text-xl" />,
        title: "CEO Marketing",
        description:
          "Always free from repetition, injected humour, or non-characteristic words etc.",
      },
      {
        icon: <FaFan className="text-[#FF014F] text-xl" />,
        title: "Personal Portfolio April",
        description:
          "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
      },
    ];
  
    return (
      <section className="features  px-4 py-16">
        {/* bg-[#F7FAFC] */}
        <div className="max-w-6xl mx-auto text-left mb-12">
          <h5 className="text-[#FF014F] text-sm font-bold uppercase tracking-widest mb-2">
            Features
          </h5>
          <h2 className="text-[#212122] text-4xl font-extrabold">What I Do</h2>
        </div>
        
       {/* Aca iteramos el array para no repetir la estructura de la cards y reautilizar la misma  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#f0f2f5] rounded-2xl p-6 min-h-[220px]  shadow-[0_10px_40px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_50px_rgba(0,0,0,0.1)] transition duration-300"
              >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-[#212122] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  