import React from 'react';
// import logo from '../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta
import { FaBars } from 'react-icons/fa6'; // Asegúrate de tener instalado react-icons

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-around h-[50px] mt-[10px] mx-[50px] ml-[200px]">
        {/* Logo */}
        <a href="#home" className=''>
          {/* <img src={logo} alt="logo" className="w-[45px] h-[15px]" /> */}
          <span>Logo</span>
        </a>

        {/* Menú principal */}
        <div className="hidden md:flex items-center gap-[35px]">
          <ul className="flex gap-[35px]">
            <li><a href="#home" className="no-underline text-[#212122] text-[12px] font-bold">HOME</a></li>
            <li><a href="#features" className="no-underline text-[#212122] text-[12px] font-bold">FEATURES</a></li>
            <li><a href="#portfolio" className="no-underline text-[#212122] text-[12px] font-bold">PORTFOLIO</a></li>
            <li><a href="#resume" className="no-underline text-[#212122] text-[12px] font-bold">RESUME</a></li>
            <li><a href="#client" className="no-underline text-[#212122] text-[12px] font-bold">CLIENT</a></li>
            <li><a href="#pricing" className="no-underline text-[#212122] text-[12px] font-bold">PRICING</a></li>
            <li><a href="#blog" className="no-underline text-[#212122] text-[12px] font-bold">BLOG</a></li>
            <li><a href="#contact" className="no-underline text-[#212122] text-[12px] font-bold">CONTACT</a></li>
          </ul>

          {/* Botón BUY NOW */}
          <a href="#">
            <button className="text-[#FF014F] text-[12px] font-bold w-[100px] h-[35px] bg-gradient-to-br from-[#E2E8EC] to-[#FDFDFE] rounded-[5px] border-none shadow-[ -10px_-10px_10px_-5px_white] cursor-pointer">
              BUY NOW
            </button>
          </a>
        </div>

        {/* Botón menú para mobile */}
        <button className="md:hidden border-none bg-transparent text-[24px] flex items-center justify-center cursor-pointer">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Header;
