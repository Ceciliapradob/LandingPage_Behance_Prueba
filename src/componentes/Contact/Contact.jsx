import React from "react";
import manos from "../../assets/manos.jpg"; // ajustá la ruta si es distinta

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mx-auto my-[var(--margen-seccion)]"
      id="contact"
    >
      <h5 className="text-[#FF014F]">CONTACT</h5>
      <h2>Contact With Me</h2>

      <div className="flex justify-between">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-between w-[35%] h-[500px] rounded-[10px] p-5 shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white">
          <img
            src={manos}
            alt="manos"
            className="w-full h-[200px] rounded-[10px]"
          />
          <h3>Nevine Acotanza</h3>
          <p className="bg-transparent text-[13px]">Chief Operating Officer</p>
          <p>
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <div className="bg-transparent text-[13px]">
            <p>Phone: +01234567890</p>
            <p>Email: admin@example.com</p>
          </div>

          <span className="flex flex-col justify-between bg-transparent h-[70px] text-[11px]">
            <span className="bg-transparent">FIND WITH ME</span>
            <span className="flex gap-[15px] bg-transparent">
              <button className="btn-red">
                <a href="#" className="btn-red">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </button>
              <button className="btn-red">
                <a href="#" className="btn-red">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </button>
              <button className="btn-red">
                <a href="#" className="btn-red">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </button>
            </span>
          </span>
        </div>

        {/* Columna derecha: formulario */}
        <form
          className="flex flex-col justify-between p-5 w-[50%] h-[500px] rounded-[10px] shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white"
          id="formularios"
        >
          <div className="flex justify-between bg-transparent text-[11px]">
            <div className="flex flex-col gap-[10px] w-[48%] bg-transparent">
              <label htmlFor="name" className="bg-transparent">YOUR NAME</label>
              <input type="text" id="name" required className="rounded-[5px] border border-gray-300 bg-white h-[32px] p-[10px]"/>
            </div>

            <div className="flex flex-col gap-[10px] w-[48%] bg-transparent">
              <label htmlFor="phone" className="bg-transparent">PHONE NUMBER</label>
              <input type="number" id="phone" required className="rounded-[5px] border border-gray-300 bg-white h-[32px] p-[10px]"/>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] bg-transparent text-[11px]">
            <label htmlFor="email" className="bg-transparent">EMAIL</label>
            <input type="email" id="email" required className="rounded-[5px] border border-gray-300 bg-white h-[32px] p-[10px]"/>
          </div>

          <div className="flex flex-col gap-[10px] bg-transparent text-[11px]">
            <label htmlFor="subject" className="bg-transparent">SUBJECT</label>
            <input type="text" id="subject" required className="rounded-[5px] border border-gray-300 bg-white h-[32px] p-[10px]"/>
          </div>

          <div className="flex flex-col gap-[10px] bg-transparent text-[11px]">
            <label htmlFor="message" className="bg-transparent">YOUR MESSAGE</label>
            <textarea
              id="message"
              cols={30}
              rows={7}
              required
              className="rounded-[5px] border border-gray-300 bg-white p-[10px]"
            ></textarea>
            <button type="submit"   className="h-[40px] bg-[#FF014F] text-white text-[10px] rounded-[5px] mt-[5px] cursor-pointer"
            >SEND MESSAGE</button>
          </div>

          <div className="msjEnviado" id="msjEnviado"></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
