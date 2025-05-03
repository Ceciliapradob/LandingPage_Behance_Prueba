// src/components/Footer.jsx
import React from "react";
import footerImg from "../../assets/footer.jpg"; 

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-7">
      <img
        src={footerImg}
        alt="Footer avatar"
        className="w-16 h-16 rounded-full object-cover"
      />
      <h3 className="text-[25px] font-semibold mt-4">INBIO</h3>
      <p className="text-gray-500 mt-1">Rainbow-Themes.</p>
    </div>
  );
};

export default Footer;
