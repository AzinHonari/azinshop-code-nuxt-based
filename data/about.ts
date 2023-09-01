interface Person {
  name: string;
  headline: string;
  education: string;
  linkedinProfile: string;
  about: string;
  topSkills: string[];
  experiences: {
    title: string;
    company: string;
    descripiton: string[];
  }[];
}

export const person: Person = {
  name: "Azin Honari",
  headline: "Full-Stack Web Developer",
  education: "BSc Software Engineering",
  linkedinProfile: "https://www.linkedin.com/in/azin-honari/",
  about:
    "A full-stack web developer specialising in '.NET Framework'. Proven ability to perform well under pressure. Enjoys being part of a team as well as managing, motivating and training productive team while thriving in high pressure environments. Actively involved in software development and delivery since 2010 and striving to achieve levels of excellence through tireless effort so that organisation would benefit from my services.",
  topSkills: ["JavaScript", "CSS", "Vue.js", "Nuxt.js", "ASP.NET"],
  experiences: [
    {
      title: "Frontend Developer",
      company: "Trading Terminal · Full-time",
      descripiton: [
        "Collaborated on the development and expansion of the Trading Terminal application, utilizing Vue and other modern web development technologies to design and implement key features. This resulted in a user-friendly platform for day traders to make informed decisions and contributed to the success of the application.",
        "Cooperated with the development team to design and implement a critical news and information platform, seamlessly integrated with the Trading Terminal application. Leveraged APIs to gather real-time market data and news, enabling day traders to stay informed and make data-driven decisions. This resulted in increased user engagement and satisfaction.",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Daroupakhsh Distribution co",
      descripiton: [
        "Maintained and improved the company's ERP software by developing new features for the Asset, Maintenance, Warehouse, and Sales sub-systems. This involved collaborating closely with cross-functional teams to identify and implement enhancements to the system, ensuring that it remained robust and efficient. As a result of my contributions, the system's functionality was significantly expanded, leading to increased efficiency, accuracy, and productivity across multiple departments.",
        "Designed and developed the company's website using ASP.Net, SASS, and JavaScript. Collaborated closely with stakeholders to understand their requirements and incorporated feedback throughout development. Resulted in a successful website launch, increased website traffic, improved customer engagement, and increased revenue.",
        "Developed and implemented the company's e-commerce website using the nopCommerce platform. Collaborated with cross-functional teams to identify business requirements and designed a scalable solution that resulted in increased revenue and customer satisfaction. Provided ongoing maintenance and support to ensure the website remained up-to-date and responsive to business needs.",
        "Collaborated closely with a creative team member to lead the development of an Android application for pharmaceutical reps and sales personnel. The application enabled users to browse and search through the inventory with up-to-date stock counts and submit new orders while visiting pharmacies or doctors. As a result of my leadership and development contributions, the application was successfully launched and significantly improved the efficiency of the sales process, resulting in increased revenue and customer satisfaction.",
      ],
    },
    {
      title: "Software Developer",
      company: "Micromodje Industries · Full-time",
      descripiton: [
        "Designed and implemented a highly configurable application for the quality assurance department, which enabled tracking of each component of the finished product's test and diagnostics history via barcode on the assembly line. This streamlined the testing process, resulting in improved efficiency and accuracy while reducing errors and costs.",
        "Maintained and improved the warehouse asset tracking and management system, utilizing RFID technology and implementing regular audits to ensure accuracy and compliance. This resulted in improved inventory control, reduced loss, and increased efficiency in warehouse operations.",
      ],
    },
  ],
};
