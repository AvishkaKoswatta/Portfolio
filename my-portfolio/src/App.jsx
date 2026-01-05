import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Database, BarChart3, Code, Users } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Data Pipeline",
      description: "Built an automated ETL pipeline processing transactions using Python, Apache Airflow, and PostgreSQL.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL"],
      status: "Completed",
      image: "/etl.jpeg"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed a real-time dashboard for monitoring medical state of patients using Kafka, Debezium and Spark Streaming.",
      technologies: ["Apache Kafka", "Spark", "Debezium"],
      status: "Completed",
      image: "/real_time_dashboard.png"
    },
    {
      title: "Data Quality Framework",
      description: "Implemented data quality checks and monitoring system, reducing data issues and improving data reliability.",
      technologies: ["Python", "Great Expectations"],
      status: "Completed",
      image: "/images/data_quality_framework.png"
    },
    {
      title: "AI-Aided Loan Default Predication Model for Small Scale Financial Institutions ",
      description: "Final year undergraduate group project. This is an AI Aided Loan Default Predication Model for Small Scale Financial Institutions (SSFI).",
      technologies: ["ML", "AI"],
      status: "On Going",
      image: "/images/loan_default_prediction.png"
    },
    {
      title: "Carbon Footprint Chatbot",
      description: "Developed a domain-Specific Chatbot on Carbon Footprint with LoRA fine-tuned Mistral 7B that capable of answering related questions using a RAG pipeline. (FAISS + Hugging Face)",
      technologies: ["Python", "Advance AI"],
      status: "Completed",
      image: "chatbot.png"
    },
    {
      title: "Bank Document Verification using OCR",
      description: "A project that used OCR and CRNN as hybrid system to read from scanned bank documents.",
      technologies: ["OCR", "CRNN"],
      status: "Completed",
      image: "ocr-bank-doc.png"
    }
  ];

  const skills = {
    "Programming": ["Python", "SQL", "Java"],
    "Big Data": ["Apache Spark", "Hadoop", "Kafka", "Airflow"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
    "Cloud": ["AWS", "Docker"],
  };

  const NavButton = ({ section, label, icon: Icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
        activeSection === section
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const SkillCategory = ({ category, skillList }) => (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 mb-2">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3
          onClick={() => setSelectedProject(project)}
          className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
          title="Click to view image"
        >
          {project.title}
        </h3>
        <span className={`px-2 py-1 rounded text-xs ${
          project.status === 'Completed'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="w-full px-4 text-center">
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <img
            src="logo.gif"
            alt="Logo"
            className="w-55 h-60 rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">AVISHKA KOSWATHTHA</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Hi! .. I am a Computer Engineering undergraduate currently seeking AI/ML or Data Engineering roles. 
          I build scalable data pipelines and data-driven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <div className="text-center">
          {/* <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
                   <div className="flex items-center justify-center">
          <img
            src="bar.gif"
            alt="Logo"
            className="w-12 h-12 text-blue-600 mx-auto mb-4" 
          />
        </div>
          <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
          <p className="text-gray-600">
            Extract insights from datasets & ensure data quality and reliability.
          </p>
        </div>
        <div className="text-center">
          {/* <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
          <div className="flex items-center justify-center">
          <img
            src="code.gif"
            alt="Logo"
            className="w-12 h-12 text-blue-600 mx-auto mb-4" 
          />
        </div>
          <h3 className="text-lg font-semibold mb-2">Pipeline Development</h3>
          <p className="text-gray-600">
            Build ETL pipelines for efficient data processing and automation.
          </p>
        </div>
        <div className="text-center">
          {/* <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
          <div className="flex items-center justify-center">
          <img
            src="users.gif"
            alt="Logo"
            className="w-12 h-12 text-blue-600 mx-auto mb-4" 
          />
        </div>
          <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
          <p className="text-gray-600">
            Work with cross-functional teams to deliver impactful data solutions.
          </p>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="w-screen py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
        <div className="flex items-center justify-center">
          <img
            src="me.jpg"
            alt="avishka koswaththa"
            className="w-30 h-40 rounded-full mx-auto mb-4" 
          />
        </div>      
      <div className="flex flex-col space-y-12 px-8">
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Background</h3>
          <div className="border-l-4 border-blue-500 pl-4"> 
          <p className="text-gray-700 mb-4">
            I am pursuing my BScEng (Hons) in Computer Engineering with a focus on AI/ML and Data Engineering. 
            Through coursework, projects, and internships, I have built strong skills in data processing, 
            pipeline development, and analytics.
          </p>
          </div>
          <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700">Education</h3>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-600">BScEng (Hons) in Computer Engineering</h4>
            <p className="text-gray-600">University of Ruhuna | Expected 2025</p>
            <p className="text-gray-600">Focus: AI/ML, Data Engineering & Analytics</p>
          </div>
          <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700">Experience</h3>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-600">Intern Software Engineer</h4>
            <p className="text-gray-600">eSupport Technologies PVT(LTD)</p>
            <p className="text-gray-600">08/2024 to 01/2025 (6 Month)</p>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory key={category} category={category} skillList={skillList} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      <p className="text-gray-600 mb-8 text-center">
        Here are some of my key projects demonstrating my AI, ML and data engineering skills and experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="w-screen py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
      <p className="text-gray-600 mb-8 text-center px-4">
        I'm always interested in discussing opportunities or collaborations.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-8">
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-600" size={20} />
          <span className="text-gray-700 font-bold">avishkakkoswaththa@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-600" size={20} />
          <span className="text-gray-700 font-bold">(+94) 71 524 1066</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="text-blue-600" size={20} />
          <span className="text-gray-700 font-bold">59, 4th Canal, Hasalaka</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8 px-8">
        <a href="https://github.com/AvishkaKoswatta" className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a href="http://www.linkedin.com/in/avishkakoswaththa" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>

      <div className="flex justify-center">
        {/* <button
          onClick={() => alert('CV download would start here.')}
          className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download size={20} />
          <span>Download CV</span>
        </button>
         */}
         {/* <a
    href="/Avishka_Koswaththa_Resume_Data_Eng.pdf"
    download
    className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
  >
    <Download size={20} />
    <span>Download CV</span>
  </a> */}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'projects': return renderProjects();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Navigation */}
     {/* Navigation */}
<nav className="bg-white shadow-sm sticky top-0 z-10 w-full">
  <div className="w-full px-4 py-4 flex justify-end items-center">
    {/* Left side (optional logo) */}
    

    {/* Hamburger icon (visible only on mobile) */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-gray-700 focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {/* Nav buttons */}
    <div
      className={`flex flex-col md:flex-row md:space-x-2 md:static absolute md:bg-transparent bg-white top-16 left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
        menuOpen ? "block" : "hidden md:flex"
      }`}
    >
      <NavButton section="home" label="Home" icon={Database} />
      <NavButton section="about" label="About" icon={Users} />
      <NavButton section="projects" label="Projects" icon={Code} />
      <NavButton section="contact" label="Contact" icon={Mail} />
    </div>
  </div>
</nav>



      {/* Main Content */}
      <main className="w-full">
        {renderContent()}
      </main>

      {/* Modal for Project Image */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
               <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{selectedProject.title}</h2>
              {/* <button
                onClick={() => setSelectedProject(null)}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button> */}
            </div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto object-contain"
            />
         
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16 w-full text-center">
        <p className="text-gray-300">
          © 2025 Avishka Koswaththa. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
