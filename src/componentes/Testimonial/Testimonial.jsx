import { FaQuoteRight, FaStar } from "react-icons/fa";
import perfil2 from "../../assets/perfil2.jpg"; // ajusta la ruta si es necesario

const Testimonial = () => {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Título */}
        <p className="text-sm font-semibold text-[#FF014F] tracking-wide uppercase">
          What Clients Say
        </p>
        <h2 className="text-4xl font-bold text-[#212122] mb-12">Testimonial</h2>

      
        {/* Comillas fondo central */}
        <FaQuoteRight className="absolute text-[5rem] text-gray-300 opacity-20 left-[47%] -translate-x-1/2 top-[5rem] z-0 hidden md:block"/>


        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
          {/* Tarjeta izquierda */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[300px]">
            <img
              src={perfil2}
              alt="Nevine Acotanza"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-xs font-bold text-[#FF014F] uppercase text-justify">
              Rainbow - Themes
            </p>
            <h3 className="text-lg font-semibold text-[#212122] text-justify">
              Nevine Acotanza
            </h3>
            <p className="text-sm text-[#212122] text-justify">
              Chief Operating Officer
            </p>
          </div>

          {/* Tarjeta derecha */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[500px]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-lg text-[#212122]">
                Android App Development
              </h4>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#212122] mb-4 text-justify">
              via Upwork • Mar 4, 2015 – Aug 30, 2021
            </p>
            <p className="text-sm text-[#212122] text-justify">
              Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam
              sodales phasellus smauris.
            </p>
          </div>
        </div>

        {/* Dots de paginación */}
        <div className="flex justify-center mt-10 space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF014F] cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
