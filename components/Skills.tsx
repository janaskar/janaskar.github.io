export default function Skills() {
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", 
    "React", "Next.js", "Tailwind CSS", 
    "Responsive Design"
  ];
  
  const backendSkills = [
    "Node.js", ".NET", "Docker", "MongoDB", "SQL", 
    "REST API", "Fast API"
  ];
  
  const toolsSkills = [
    "Git & GitHub", "VS Code", "npm/yarn", 
    "CLI", "Postman", "Figma"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
            <ul className="space-y-2">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Others */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Tools & Others</h3>
            <ul className="space-y-2">
              {toolsSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
