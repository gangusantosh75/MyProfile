// Work experience data
const experiences = [
  { company: "Capgemini", role: "Enovia Platform developer", years: "oct,2021 - Jun,2025" },
  { company: "Safran digit", role: "PLM 3DX developer", years: "Jun,2025 - present" },
];

// Select the <ul> element where experiences will be displayed
const expList = document.getElementById("experience-list");

// Loop through the experiences array and create <li> for each
experiences.forEach(exp => {
  const li = document.createElement("li");
  li.textContent = `${exp.role} at ${exp.company} (${exp.years})`;
  expList.appendChild(li);
});
