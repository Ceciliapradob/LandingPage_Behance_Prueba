import { useState } from "react";

const Resumen = () => {
  const [activeTab, setActiveTab] = useState("Education");

  // Datos para cada pestaña
  const tabData = {
    Education: {
      leftTitle: "Education Quality",
      leftItems: [
        {
          period: "2007-2010",
          title: "Personal portfolio April Fools",
          subtitle: "University of DVI (1997-2001)",
          rating: "4.30/5",
          description: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante."
        },
        {
          period: "2007-2010",
          title: "Examples of Personal Porfolio",
          subtitle: "College os Studies (200-2002)",
          rating: "4.50/5",
          description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante."
        },
        {
          period: "2007-2010",
          title: "Tips for Personal Portfolio",
          subtitle: "University of Studies (1997-2001)",
          rating: "4.80/5",
          description: "If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante."
        }
      ],
      rightTitle: "Job Experience",
      rightItems: [
        {
          period: "2007-2010",
          title: "Diploma in Web Development",
          subtitle: "BSE in CSE (2004-2008)",
          rating: "4.70/5",
          description: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoret sem in lobortis mauris hendrerit ante."
        },
        {
          period: "2007-2010",
          title: "The Personal Portfolio Mystery",
          subtitle: "Job At Rainbow-Themes (2008-2016)",
          rating: "4.95/5",
          description: "Generate Lorem impsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante."
        },
        {
          period: "2007-2010",
          title: "Diploma in Computer Science",
          subtitle: "Work at Plugin Development (2016-2020)",
          rating: "5.00/5",
          description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, labortis mauris hendrerit ante."
        }
      ]
    },
    "Professional Skills": {
      leftTitle: "Technical Skills",
      leftItems: [
        {
          period: "Frontend",
          title: "React & Next.js Expert",
          subtitle: "7+ years experience",
          rating: "5.00/5",
          description: "Advanced knowledge in React hooks, context API, Redux, and modern frameworks like Next.js with SSR capabilities."
        },
        {
          period: "Backend",
          title: "Node.js & Express",
          subtitle: "5+ years experience",
          rating: "4.80/5",
          description: "Building RESTful APIs and microservices with Node.js, Express, and MongoDB/Mongoose for database management."
        },
        {
          period: "UI/UX",
          title: "Figma & Adobe XD",
          subtitle: "Design Systems",
          rating: "4.70/5",
          description: "Creating responsive designs and interactive prototypes with attention to user experience principles."
        }
      ],
      rightTitle: "Soft Skills",
      rightItems: [
        {
          period: "Communication",
          title: "Client Presentations",
          subtitle: "Team Collaboration",
          rating: "4.90/5",
          description: "Excellent communication skills with clients and team members, able to explain technical concepts clearly."
        },
        {
          period: "Management",
          title: "Agile Methodologies",
          subtitle: "Scrum Certified",
          rating: "4.85/5",
          description: "Experience leading teams using Agile methodologies with Jira and Trello for project management."
        },
        {
          period: "Problem Solving",
          title: "Debugging Complex Issues",
          subtitle: "Optimization",
          rating: "5.00/5",
          description: "Strong analytical skills for troubleshooting and optimizing application performance."
        }
      ]
    },
    Experience: {
      leftTitle: "Work History",
      leftItems: [
        {
          period: "2018-2023",
          title: "Senior Frontend Developer",
          subtitle: "Tech Solutions Inc.",
          rating: "5.00/5",
          description: "Led a team of 5 developers to build enterprise-level applications using React and TypeScript."
        },
        {
          period: "2015-2018",
          title: "Full Stack Developer",
          subtitle: "Digital Creatives",
          rating: "4.90/5",
          description: "Developed and maintained multiple web applications using MERN stack (MongoDB, Express, React, Node.js)."
        },
        {
          period: "2013-2015",
          title: "Junior Web Developer",
          subtitle: "StartUp Ventures",
          rating: "4.70/5",
          description: "Built responsive websites and assisted in developing the company's main SaaS product."
        }
      ],
      rightTitle: "Key Projects",
      rightItems: [
        {
          period: "2022",
          title: "E-commerce Platform",
          subtitle: "React + Node.js",
          rating: "5.00/5",
          description: "Developed a high-performance e-commerce platform handling 10k+ daily transactions."
        },
        {
          period: "2020",
          title: "Healthcare Management System",
          subtitle: "Next.js + Firebase",
          rating: "4.95/5",
          description: "Created a secure patient management system with real-time data synchronization."
        },
        {
          period: "2019",
          title: "Educational Platform",
          subtitle: "MERN Stack",
          rating: "4.85/5",
          description: "Built an interactive learning platform with video streaming and progress tracking."
        }
      ]
    },
    Interview: {
      leftTitle: "Interview Process",
      leftItems: [
        {
          period: "Step 1",
          title: "Technical Screening",
          subtitle: "Code Review",
          rating: "4.80/5",
          description: "Initial technical assessment to evaluate coding skills and problem-solving approach."
        },
        {
          period: "Step 2",
          title: "Live Coding Session",
          subtitle: "Pair Programming",
          rating: "4.90/5",
          description: "Collaborative coding session to assess real-time problem solving and communication."
        },
        {
          period: "Step 3",
          title: "System Design",
          subtitle: "Architecture Review",
          rating: "5.00/5",
          description: "Discussion about designing scalable systems and architecture decisions."
        }
      ],
      rightTitle: "Interview Feedback",
      rightItems: [
        {
          period: "Strengths",
          title: "Clean Code Advocate",
          subtitle: "Best Practices",
          rating: "5.00/5",
          description: "Consistently praised for writing maintainable, well-documented code following best practices."
        },
        {
          period: "Approach",
          title: "User-Centric Development",
          subtitle: "UX Focus",
          rating: "4.95/5",
          description: "Strong focus on user experience and accessibility in all development decisions."
        },
        {
          period: "Growth",
          title: "Continuous Learner",
          subtitle: "Skill Expansion",
          rating: "5.00/5",
          description: "Demonstrated commitment to learning new technologies and improving existing skills."
        }
      ]
    }
  };

  // Función para renderizar items
  const renderItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="flex flex-col p-7 mt-7 w-100 h-47 border-none rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white relative">
        <div className="flex h-15 items-center justify-between bg-transparent mb-7">
          <div className="flex flex-col justify-between gap-2 bg-transparent">
            <h3 className="font-semibold">{item.title}</h3>
            <h6 className="font-medium bg-transparent">{item.subtitle}</h6>
          </div>
          <div className="text-center w-14 h-7 bg-white rounded shadow-[8px_8px_10px_-8px_grey]">
            <span className="bg-white text-[#FF014F] text-xs font-semibold">{item.rating}</span>
          </div>
        </div>
        <div className="bg-transparent text-xs">
          <p>{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section id="resume" className="flex flex-col items-center my-25 mx-50">
      <h5 className="text-[#FF014F]">7+ YEARS OF EXPERIENCE</h5>
      <h2 className="text-[#212122] text-4xl font-extrabold mt-2 mb-6">My Resume</h2>

      {/* Cinta de botones - ahora con manejo de estado */}
      <div className="flex w-full h-15 rounded-lg shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)] bg-gradient-to-br from-[rgba(0,0,0,0.041)] to-white justify-center items-center mb-5">
        {["Education", "Professional Skills", "Experience", "Interview"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/4 h-15 flex justify-center items-center text-xs font-bold ${
              activeTab === tab ? 'text-[#FF014F] shadow-[0_0_10px_5px_rgba(255,255,255,0.538),2px_5px_10px_-5px_rgba(14,14,15,0.782)]' : 'text-[#212122]'
            } ${tab === "Education" ? 'rounded-l-lg' : ''} ${tab === "Interview" ? 'rounded-r-lg' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Contenedor de secciones dinámicas */}
      <div className="flex gap-11">
        {/* Contenedor izquierdo */}
        <div className="flex flex-col relative">
          <div>
            <h5 className="text-[#FF014F]">{tabData[activeTab].leftItems[0].period}</h5>
            <h2 className="text-2xl mb-0">{tabData[activeTab].leftTitle}</h2>
          </div>
          {renderItems(tabData[activeTab].leftItems)}
        </div>

        {/* Contenedor derecho */}
        <div className="flex flex-col relative">
          <div>
            <h5 className="text-[#FF014F]">{tabData[activeTab].rightItems[0].period}</h5>
            <h2 className="text-2xl mb-0">{tabData[activeTab].rightTitle}</h2>
          </div>
          {renderItems(tabData[activeTab].rightItems)}
        </div>
      </div>
    </section>
  );
};

export default Resumen;