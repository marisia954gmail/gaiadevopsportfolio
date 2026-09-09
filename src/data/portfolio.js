export const expertiseGroups = [
  {
    title: "Application development",
    description:
      "Reliable business logic, database design, and platform work for applications that have to last.",
    skills: [
      "PHP & MySQL",
      "Laravel MVC & Livewire",
      "RESTful API & WordPress",
      "PHPUnit & SOLID",
    ],
  },
  {
    title: "Frontend engineering",
    description:
      "Accessible interfaces and considered component systems for polished user-facing work.",
    skills: [
      "HTML, CSS & Sass",
      "JavaScript & jQuery",
      "ReactJS & Vue.js",
      "Bootstrap & Tailwind CSS",
    ],
  },
  {
    title: "Tooling & delivery",
    description:
      "A clean path from local development to release, with less friction for the whole team.",
    skills: ["Git with Git Flow", "CI/CD", "Webpack & Vite", "Agile & Scrum"],
  },
  {
    title: "Infrastructure",
    description:
      "Practical server and cloud foundations that keep production reliable and understandable.",
    skills: ["LAMP & LEMP", "AWS", "Linux"],
  },
];

export const processSteps = [
  [
    "Understand the system",
    "Clarify the audience, constraints, and useful measures of progress.",
  ],
  [
    "Make a strong first release",
    "Work in focused increments, with feedback arriving early and often.",
  ],
  [
    "Leave it better to run",
    "Document decisions and create delivery habits the team can keep.",
  ],
];

export const projects = [
  ["Commerce", "Atelier No. 9 Gallery", "https://oil-paintings.gaiadevops.com", "https://pub-d9c58b954fc240b598bd9dcee3188c69.r2.dev/portfolio/atelier9.png"],
  ["Commerce", "Virelle", "https://jewelry.gaiadevops.com",  "https://pub-d9c58b954fc240b598bd9dcee3188c69.r2.dev/portfolio/virelle.png"],
  ["Aviation", "Altair Aviation", "https://aircraft-dealer.gaiadevops.com",  "https://pub-d9c58b954fc240b598bd9dcee3188c69.r2.dev/portfolio/altair.png"],
  ["Education", "Northstar", "https://educational.gaiadevops.com",  "https://pub-d9c58b954fc240b598bd9dcee3188c69.r2.dev/portfolio/education.png"],
  // ["Product operations", "Linear", "https://linear.app"],
  // ["Outdoor", "Patagonia", "https://www.patagonia.com"],
  // ["Wellness", "Headspace", "https://www.headspace.com"],
  // ["Innovation", "IDEO", "https://www.ideo.com"],
].map(([category, name, url, previewUrl]) => ({
  category,
  name,
  url,
  previewUrl,
  // previewUrl: `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`,
}));
