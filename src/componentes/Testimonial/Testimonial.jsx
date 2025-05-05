import { useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import perfil2 from "../../assets/perfil2.jpg"; // ajusta la ruta si es necesario

const Testimonial = () => {
  // Datos de los testimonios
  const testimonials = [
    {
      id: 1,
      image: perfil2,
      company: "Rainbow - Themes",
      name: "Nevine Acotanza",
      position: "Chief Operating Officer",
      service: "Android App Development",
      date: "via Upwork • Mar 4, 2015 – Aug 30, 2021",
      text: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris.",
      rating: 5
    },
    {
      id: 2,
      image: perfil2,
      company: "Tech Solutions Inc.",
      name: "John Smith",
      position: "Product Manager",
      service: "Web Development",
      date: "via Freelancer • Jan 10, 2018 – Present",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.",
      rating: 4
    },
    {
      id: 3,
      image: perfil2,
      company: "Digital Creatives",
      name: "Sarah Johnson",
      position: "Marketing Director",
      service: "UI/UX Design",
      date: "via LinkedIn • Jun 5, 2020 – Dec 15, 2022",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.",
      rating: 5
    },
    {
      id: 4,
      image: perfil2,
      company: "Innovate Labs",
      name: "Michael Brown",
      position: "CTO",
      service: "Full Stack Development",
      date: "via Toptal • Sep 1, 2019 – May 30, 2023",
      text: "Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Función para cambiar testimonio
  const changeTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Título */}
        <p className="text-sm font-semibold text-[#FF014F] tracking-wide uppercase">
          What Clients Say
        </p>
        <h2 className="text-[#212122] text-4xl font-extrabold mb-12">Testimonial</h2>

        {/* Comillas fondo central */}
        <FaQuoteRight className="absolute text-[5rem] text-gray-300 opacity-20 left-[47%] -translate-x-1/2 top-[5rem] z-0 hidden md:block"/>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
          {/* Tarjeta izquierda - Imagen */}
          <div className="cursor-pointer bg-white shadow-md rounded-xl p-6 w-full md:w-[300px] transition-all duration-300 hover:shadow-lg">
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-xs font-bold text-[#FF014F] uppercase text-justify">
              {testimonials[activeTestimonial].company}
            </p>
            <h3 className="text-lg font-semibold text-[#212122] text-justify">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="text-sm text-[#212122] text-justify">
              {testimonials[activeTestimonial].position}
            </p>
          </div>

          {/* Tarjeta derecha - Detalles */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[500px] transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-lg text-[#212122]">
                {testimonials[activeTestimonial].service}
              </h4>
              <div className="flex text-yellow-400">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#212122] mb-4 text-justify">
              {testimonials[activeTestimonial].date}
            </p>
            <p className="text-sm text-[#212122] text-justify">
              {testimonials[activeTestimonial].text}
            </p>
          </div>
        </div>

        {/* Dots de paginación */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeTestimonial === index ? 'bg-[#FF014F] w-4' : 'bg-gray-300'}`}
              onClick={() => changeTestimonial(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


