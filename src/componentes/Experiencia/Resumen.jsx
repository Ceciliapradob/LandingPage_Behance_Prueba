import './Resumen.css'

const Resumen = () => {
  return (
  
    <section id="resume"  className=" flex flex-col items-center my-25 mx-50">
      <h5 className="text-[#FF014F]">7+ YEARS OF EXPERIENCE</h5>
      <h2 className="text-3xl font-bold mt-2 mb-6">My Resume</h2>

      {/* Cinta de botones */}
      <div className="flex w-full h-15 rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white justify-center items-center mb-5">
        <a href="#" className="w-1/4 h-15 flex justify-center items-center text-xs font-bold text-[#FF014F] shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white rounded-lg">
          Education
        </a>
        <a href="#" className="w-1/4 h-15 flex justify-center items-center text-xs font-bold text-[#212122]">
          Professional Skills
        </a>
        <a href="#" className="w-1/4 h-15 flex justify-center items-center text-xs font-bold text-[#212122]">
          Experience
        </a>
        <a href="#" className="w-1/4 h-15 flex justify-center items-center text-xs font-bold text-[#212122] rounded-r-lg">
          Interview
        </a>
      </div>

      {/* Contenedor de secciones Education y Experience */}
      <div className="flex gap-11">

        {/* Contenedor izquierdo: Education */}
        <div className="flex flex-col relative">
          {/* Encabezado Education */}
          <div>
            <h5 className="text-[#FF014F]">2007-2010</h5>
            <h2 className="text-2xl mb-0">Education Quality</h2>
          </div>

          {/* Tarjetas Education */}
          {/* BOX 1 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative ">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">Personal portfolio April Fools</h3>
                <h6 className="font-medium bg-transparent">University of DVI (1997-2001)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">4.30/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>The eduaction should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante.</p>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">Examples of Personal Porfolio</h3>
                <h6 className="font-medium bg-transparent">College os Studies (200-2002)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">4.50/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante.</p>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative ">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">Tips for Personal Portfolio</h3>
                <h6 className="font-medium bg-transparent">University of Studies (1997-2001)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">4.80/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante.</p>
            </div>
          </div>
        </div>

        {/* Contenedor derecho: Job experience */}
        <div className="flex flex-col relative">
          {/* Encabezado Experience */}
          <div>
            <h5 className="text-[#FF014F]">2007-2010</h5>
            <h2 className="text-2xl mb-0">Job Experience</h2>
          </div>

          {/* Tarjetas Experience */}
          {/* BOX 4 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative ">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">Diploma in Web Development</h3>
                <h6 className="font-medium bg-transparent">BSE in CSE (2004-2008)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">4.70/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoret sem in lobortis mauris hendrerit ante.</p>
            </div>
          </div>

          {/* BOX 5 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative ">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">The Personal Portfolio Mystery</h3>
                <h6 className="font-medium bg-transparent">Job At Rainbow-Themes (2008-2016)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">4.95/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>Generate Lorem impsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante.</p>
            </div>
          </div>

          {/* BOX 6 */}
          <div className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative ">
            <div className="flex h-15 items-center justify-between bg-transparent mb-7">
              <div className="flex flex-col justify-between gap-2 bg-transparent">
                <h3 className="font-semibold">Diploma in Computer Science</h3>
                <h6 className="font-medium bg-transparent">Work at Plugin Development (2016-2020)</h6>
              </div>
              <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
                <span className="bg-white text-[#FF014F] text-xs font-semibold">5.00/5</span>
              </div>
            </div>
            <div className="bg-transparent text-xs">
              <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumen;