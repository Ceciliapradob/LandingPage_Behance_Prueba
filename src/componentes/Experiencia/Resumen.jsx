import React from "react";

const Resume = () => {
    // HAY QUE MODIFICAR ESTE COMPONENTE 
  return (
    <section className="flex flex-col items-center justify-center my-12">
      <h5 className="text-gray-500">7+ YEARS OF EXPERIENCE</h5>
      <h2 className="text-2xl font-bold mb-8">My Resume</h2>

      {/* Cinta de botones */}
      <div className="flex justify-center items-center space-x-4 w-full mb-8">
        <a
          href="#"
          className="w-1/4 h-16 text-center font-bold bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl"
        >
          Education
        </a>
        <a
          href="#"
          className="w-1/4 h-16 text-center font-bold bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl"
        >
          Professional Skills
        </a>
        <a
          href="#"
          className="w-1/4 h-16 text-center font-bold bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl"
        >
          Experience
        </a>
        <a
          href="#"
          className="w-1/4 h-16 text-center font-bold bg-gradient-to-br from-white via-gray-100 to-white rounded-xl shadow-xl"
        >
          Interview
        </a>
      </div>

      {/* Contenedor de secciones Education y Experience */}
      <div className="flex gap-12">

        {/* Contenedor izquierdo: Education */}
        <div className="relative flex flex-col">
          <div className="absolute top-24 left-24 w-[4px] h-[690px] bg-gray-300">
            <div className="absolute top-8 w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-[150px] w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-[290px] w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-24 left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
            <div className="absolute top-[150px] left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
            <div className="absolute top-[290px] left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
          </div>
          <div className="mb-6">
            <h5 className="text-gray-500">2007-2010</h5>
            <h2 className="text-xl font-semibold">Education Quality</h2>
          </div>

          {/* Tarjetas Education */}
          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>Personal portfolio April Fools</h3>
                <h6>University of DVI (1997-2001)</h6>
              </div>
              <div className="point">
                <span>4.30/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>The education should be very interactive. Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>

          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>Examples of Personal Portfolio</h3>
                <h6>College os Studies (200-2002)</h6>
              </div>
              <div className="point">
                <span>4.50/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>

          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>Tips for Personal Portfolio</h3>
                <h6>University of Studies (1997-2001)</h6>
              </div>
              <div className="point">
                <span>4.80/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>
        </div>

        {/* Contenedor derecho: Job Experience */}
        <div className="relative flex flex-col">
          <div className="absolute top-24 left-24 w-[4px] h-[690px] bg-gray-300">
            <div className="absolute top-8 w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-[150px] w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-[290px] w-[25px] h-[4px] bg-gray-300"></div>
            <div className="absolute top-24 left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
            <div className="absolute top-[150px] left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
            <div className="absolute top-[290px] left-[calc(100%-15px)] w-[10px] h-[10px] bg-gray-200 border-2 border-gray-400 rounded-full"></div>
          </div>
          <div className="mb-6">
            <h5 className="text-gray-500">2007-2010</h5>
            <h2 className="text-xl font-semibold">Job Experience</h2>
          </div>

          {/* Tarjetas Experience */}
          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>Diploma in Web Development</h3>
                <h6>BSE in CSE (2004-2008)</h6>
              </div>
              <div className="point">
                <span>4.70/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>

          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>The Personal Portfolio Mystery</h3>
                <h6>Job At Rainbow-Themes (2008-2016)</h6>
              </div>
              <div className="point">
                <span>4.95/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>Generate Lorem ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>

          <div className="card-resume mb-6">
            <div className="card-r-encabezado">
              <div className="card-titulo">
                <h3>Diploma in Computer Science</h3>
                <h6>Work at Plugin Development (2016-2023)</h6>
              </div>
              <div className="point">
                <span>5/5</span>
              </div>
            </div>
            <div className="card-r-parrafo">
              <p>The best diploma I have! Ut tincidunt est ac dolor aliquam sodales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
