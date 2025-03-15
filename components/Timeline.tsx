import React from "react";

export default function TimeLine() {
  return (
    <section className=" sm:p-10 flex-1 pt-0 sm:pt-0 space-y-3">
      <h2 className="font-bold text-xl">Experience</h2>

      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        <div className="grid gap-1 text-sm relative ">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            <p className="font-bold">Software Engineer</p>
            <p>Bloomberg LP</p>
            <p>June 2025 - Present</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>Incoming Software Enginner at Bloomberg LP</li>
              <li>
                Joining Bloomberg&apos;s C++ team to build low-latency and
                high-throughput systems
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            <p className="font-bold">ASC Student Attendant</p>
            <p>UMBC Academic Success Center</p>
            <p>September 2023 - Present</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Managed student appointments, ensuring a smooth booking process
                and minimizing scheduling conflicts.
              </li>
              <li>
                Provided academic support and connected students with relevant
                resources.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            <p className="font-bold">Horizontal Construction Engineer </p>
            <p>Maryland National Guard</p>
            <p>February 2022 - February 2025</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Conducts construction, demolition, and obstacle clearing for
                mission readiness.
              </li>
              <li>
                Operates heavy machinery and contributes to infrastructure
                projects.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            <p className="font-bold">Software Engineer Intern</p>
            <p>J.P. Morgan Chase</p>
            <p>June 2024 - August 2024</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Migrated a firm-wide metadata storage tool from Angular to React
                TypeScript, improving performance and usability.
              </li>
              <li>
                Built secure backend services using Java Spring Boot and
                deployed on AWS for seamless data integration.
              </li>
              <li>
                Developed RESTful APIs and worked in an Agile environment,
                optimizing development workflows.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-1 text-sm relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
          <div className="font-medium">
            <p className="font-bold">Student IT Specialist</p>
            <p>UMBC Enrollment Management</p>
            <p>September 2021 - May 2022</p>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Provided technical support to staff, troubleshooting issues via
                email and chat.
              </li>
              <li>
                Managed inventory tracking for laptops and devices, ensuring
                availability and security.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
