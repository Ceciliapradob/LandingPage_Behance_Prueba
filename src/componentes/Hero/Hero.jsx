import React from "react";
import perfil from "../../assets/perfil.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaInvision,
  FaSketch,
  FaFigma,
} from "react-icons/fa";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex flex-col lg:flex-row justify-center gap-17 mx-[30px] lg:mx-[150px] mt-[100px] mb-[100px]"
    >
      {/* Sección izquierda */}
      <section className="flex flex-col justify-center w-full lg:w-[45%] gap-10">
        <div className="presentacion space-y-4">
          <h5 className="text-[12px] text-gray-700 text-[#212122]">
            WELCOME TO MY WORLD
          </h5>
          <h1 className="text-[32px] md:text-[45px] font-bold text-[#212122]">
            Hi, I'm <span className="text-[#FF014F]">Sheroz Mir</span>
          </h1>
          <h2 className="text-[24px] md:text-[35px] font-semibold text-[#212122] mb-[20px]">
            <span className="text-[#FF014F]">a</span> UX UI Designer
            <span className="font-light">|</span>
          </h2>
          <p className="text-[14px] text-gray-700 leading-[25px] text-[#212122]">
            I use animation as a third dimension by which to simplify experience
            and <br />
            guiding through each and every interaction. I'm not adding motion
            just to spruce <br />
            things up, but doing it in ways that.
          </p>
        </div>

        {/*------------------------------------ Parte inferior de redes ----------------------------------- */}
        <div className="redes-main flex flex-col md:flex-row justify-between gap-10 text-[14px] font-medium">
          {/* Redes sociales */}
          <div className="redes-m flex flex-col gap-3">
            <span className="text-[#212121] font-semibold">FIND WITH ME</span>
            <div className="flex gap-4">
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaFacebookF className="text-[#212121] text-xl" />
              </button>
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaInstagram className="text-[#212121] text-xl" />
              </button>
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaLinkedinIn className="text-[#212121] text-xl" />
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="redes-m flex flex-col gap-3">
            <span className="text-[#212121] font-semibold">BEST SKILL ON</span>
            <div className="flex gap-4">
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaInvision className="text-[#FF3366] text-xl" />
              </button>
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaSketch className="text-[#F5C52E] text-xl" />
              </button>
              <button className="cursor-pointer w-[60px] h-[60px] bg-white rounded-[10px] shadow-md flex items-center justify-center hover:shadow-lg transition">
                <FaFigma className="text-[#A259FF] text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*------------------ Seccion derecha imagen --------------- */}
      <section className="main-der flex justify-center items-center">
        <img
          src={perfil}
          alt="perfil"
          className="w-[280px] md:w-[320px] lg:w-[370px] h-[350px] md:h-[380px] lg:h-[400px] rounded-[10px] shadow-lg cursor-pointer"
        />
      </section>
    
    </main>
    
  );
};

export default Hero;
