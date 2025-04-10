export default function About() {
  // Define journey items array
  const journeyItems = [
    { year: "2022 - 2025", title: "Computer Engineering Student", description: "OsloMet University" },
    { year: "2024", title: "Exchange Program", description: "Nelson Mandela University" },
    { year: "2020 - 2022", title: "Apprentice", description: "Sandnes Kommune" },
    { year: "2017 - 2020", title: "Fagbrev, Information Technology", description: "Gand VGS" },
    { year: "2019 - 2020", title: "Intern", description: "Tietoevry" },
    { year: "2017", title: "Intern", description: "Accenture" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-lg text-center">
            I am a technology enthusiast with a background in IT and a strong drive to develop innovative solutions in the field of computer engineering.
            My experience includes practical application of IT principles alongside academic pursuits in software development and systems.
            I am a proactive individual, committed to continuous learning and seeking opportunities to contribute to challenging and rewarding projects.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">My Journey</h3>
            <ul className="space-y-4">
              {journeyItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="font-semibold text-blue-500 w-1/2 text-right mr-2">{item.year}</div>
                  <div className="w-1/2 ml-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
