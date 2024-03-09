/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screenß
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ronit Mankad",
  title: "Hi all, I'm Ronit Mankad",
  subTitle: emoji(
    "A Data Engineer 🚀 with 2+ years of industry experience in building data intensive applications, tackling challenging architectural and scalability problems. I bring expertise in building ETL pipelines, performing data modelling and collaborating with business stakeholders to create solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19ntZZr8kQcNo-SYEMNUY_K0fDojvMMYo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mankadronit",
  linkedin: "https://www.linkedin.com/in/mankadronit/",
  gmail: "mankadronit.rm@gmail.com",
  medium: "https://medium.com/@mankadronit.rm",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ENGINEER WHO WANTS TO EXPLORE EVERY ARCHITECTURE STACK",
  skills: [
    emoji(
      "⚡ Develop idempotent, fault tolerant and scalable data pipelines."
    ),
    emoji("⚡ Build data models for cloud analytical warehouses like AWS Redshift and Google BigQuery"),
    emoji("⚡ Establish data governance policies and data quality checks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
    {
      skillName: "Sql",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Scala",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Arcadia.io",
      companylogo: require("./assets/images/arcadiaLogo.png"),
      date: "May 2022 – Present",
      desc: "Arcadia is a healthcare technology company focused on helping healthcare providers and payers transform diverse data into a unified fabric of health.",
      descBullets: [
        "Implemented ETL pipelines, integrating data from EHRs, laboratory reports, and billing systems into Arcadia’s analytics platform for 15+ clients",
        "Led development of a data profiling tool to identify errors during pipeline build phase.", 
        "     ⇨ Achieved a 50% increase error identification rate, cutting cleanup ticket count by half",
        "Transformed >40 terabyte data into unified clinical schema through Spark jobs",
        "Achieved 30% reduction in pipeline run time by updating partition logic for time series connectors"
      ]
    },
    {
      role: "Data Engineer Coop",
      company: "Wayfair",
      companylogo: require("./assets/images/wayfairLogo.png"),
      date: "January 2021 – September 2021",
      desc: "Wayfair is a leading online retailer offering a wide range of furniture and home goods.",
      descBullets: [
        "Built analytics and reporting solutions for Wayfair credit card and gift card products",
        "Led development schema change automation tool to handle downstream dependency failures.",
        "     ⇨ Cut daily procedure failure rate by half, saving Wayfair $200k/year in reprocessing cost",
        "     ⇨ Built a Slack chatbot reporting schema changes in our internal channel to grant visibility",
        "Migrated semantic layer procedure for wedding registry product from Vertica to BigQuery",
        "     ⇨ Improved batch processing times by 100% and SLA success rates by 70%",
        "Led scoping, development and UAT processes for Looker dashboard and underlying fact table to monitor KPIs for declined applications"
      ]
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.jpg"),
      subHeader: "Master of Science in Data Analytics Engineering",
      duration: "January 2020 - May 2022",
      desc: "Relevant Courses:",
      descBullets: [
        "Big Data Engineering with Scala",
        "Algorithms",
        "Machine Learning",
        "Data Mining"
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/gtuLogo.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "May 2015 - May 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL AND ACADEMIC PROJECTS I DEVELOPED",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Facebook Secure and Private AI Scholarship Recipient",
      subtitle:
        "I was amongst a few individuals who got selected for the Facebook SPAIC Scholarship program with Udacity.",
      image: require("./assets/images/spaicLogo.png"),
      imageAlt: "SPAIC Logo",
      footerLink: [
        {
          name: "Challenge Link",
          url: "https://www.udacity.com/blog/2019/05/announcing-the-secure-and-private-ai-scholarship-challenge-with-facebook.html"
        },
        {
          name: "#60DaysOfUdacity Challenge Log",
          url: "https://github.com/mankadronit/60DaysofUdacity-Challenge"
        }
      ]
    },
    {
      title: "Udacity Deep Learning Nanodegree",
      subtitle:
        "Was one of the finalists from the SPAIC challenge to recevie a fully sponsored Udacity Deep Learning Nanodegree.",
      image: require("./assets/images/udacityLogo.jpeg"),
      imageAlt: "Udacity Logo",
      footerLink: [
        {
          name: "Certificatation Link",
          url: "https://www.udacity.com/certificate/LGPM65UG"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (617)-368-0215",
  email_address: "mankadronit.rm@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
