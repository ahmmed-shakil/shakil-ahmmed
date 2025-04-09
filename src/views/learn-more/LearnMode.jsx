import {
  CodeIcon,
  BuildingIcon,
  BuildingIcon as BuildingOfficeIcon,
} from "lucide-react";

export default function LearnMode() {
  return (
    <div className="bg-white dark:bg-slate-800 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-700 p-6 border dark:border-slate-600 rounded-lg shadow-lg">
            <div>
              <h3 className="text-xl font-bold mb-6 dark:text-white">
                Education
              </h3>
              {educationData.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-start">
                    <BuildingIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.year}</p>
                      {item.details && (
                        <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                          {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6 dark:text-white">
                Experience
              </h3>
              <div className="mb-6">
                <div className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white">
                      Software Developer Engineer I (SDE)
                    </h4>
                    <p className="text-sm text-gray-400">
                      Code Driven Labs, India
                    </p>
                    <p className="text-sm text-gray-400">
                      May, 2023 - Dec, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold dark:text-white">
                      Software Developer Engineer II (SDE)
                    </h4>
                    <p className="text-sm text-gray-400">
                      Code Driven Labs, India
                    </p>
                    <p className="text-sm text-gray-400">Jan, 2025 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-slate-700 border dark:border-slate-600 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-bold mb-6 dark:text-white">
                Courses
              </h3>
              {coursesData.map((course, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex items-start">
                    <CodeIcon className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold dark:text-white">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-400">{course.year}</p>
                      <p className="mt-2 text-sm text-gray-400">
                        {course.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {course.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-600 text-primary dark:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const educationData = [
  {
    title: "Bachelor of Science",
    year: "2017-2021",
    details: [
      "Department of Geography & Environment",
      "Shahjalal University of Science and Technology",
      "Sylhet, Bangladesh",
    ],
  },
  {
    title: "Higher Secondary Certificate (Science)",
    year: "2016",
  },
  {
    title: "Secondary School Certificate (Science)",
    year: "2014",
  },
];

const coursesData = [
  {
    title: "Next Level Web Development",
    year: "2022-2024",
    description: "Advanced web development techniques and technologies",
    skills: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS",
      "CI/CD",
      "Testing",
      "GraphQL",
      "Apollo-Client",
    ],
  },
  {
    title: "Complete Web Development Course",
    year: "2020-2022",
    description: "Fundamentals of MERN Stack web development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Mongoose",
    ],
  },
];
