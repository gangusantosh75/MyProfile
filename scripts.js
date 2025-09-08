// Work experience data
const experiences = [
  {
    company: "Google",
    role: "Frontend Developer",
    years: "2020 - 2022"
  },
  {
    company: "Microsoft",
    role: "Full Stack Engineer",
    years: "2018 - 2020"
  },
  {
    company: "Startup XYZ",
    role: "Intern",
    years: "2017 - 2018"
  }
];

// Add experiences dynamically
const expList = document.getElementById("experience-list");

experiences.forEach(exp => {
  const li = document.createElement("li");
  li.textContent = `${exp.role} at ${exp.company} (${exp.years})`;
  expList.appendChild(li);
});
