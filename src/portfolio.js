/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Armaan Khetarpaul — Portfolio",
  description:
    "AI/ML Researcher & Engineer CV • LLMs • Representation Learning",
  og: {
    title: "Armaan Khetarpaul — Portfolio",
    type: "website",
    url: "https://armxyz1.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Armaan Khetarpaul",
  logo_name: "ArmaanKhetarpaul",
  subTitle: "AI/ML Researcher & Engineer CV • LLMs • Representation Learning",
  resumeLink:
    "https://drive.google.com/file/d/1WThtwd-jzGQ9MqgJuoxUMxzhNUy6G_97/view?usp=sharing",
  portfolio_repository: "https://github.com/Armxyz1/portfolio",
  githubProfile: "https://github.com/Armxyz1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Armxyz1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/armaank-ai",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "GMail",
    link: "mailto:armaankpaul@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & Intelligent Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable ML systems for research and real-world applications with a focus on reliability and generalization",
        "⚡ Developing AI solutions in computer vision, NLP, LLMs, and intelligent agents",
        "⚡ Designing end-to-end ML pipelines from data processing to model deployment and optimization",
        "⚡ Applying modern deep learning methods such as self-supervised learning, transformers, distillation, and generative models",
      ],
      softwareSkills: [
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "logos-apache-spark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos-hadoop",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos-matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos-hugging-face",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Skills",
      fileName: "FullStackImg",
      skills: [
        "🧠 Machine Learning: Supervised & Unsupervised Learning, Self-Supervised Learning, Representation Learning, Transfer Learning, Fine-Tuning, Knowledge Distillation",
        "🤖 Generative AI & NLP: LLMs, RAG, Generative AI, NLP Agents, NL2SQL, Transformers",
        "🖼️ Computer Vision: Image Classification, Object Detection, Image Segmentation, Vision Transformers, Video Understanding, Visual Anomaly Detection",
        "🕸️ AI Systems: Graph Neural Networks, Federated Learning, Explainable AI, Scalable ML Systems",
        "📊 Data Science: Statistical Modeling, Recommendation Systems, Hypothesis Testing, A/B Testing, Feature Engineering, Anomaly Detection",
      ],
      softwareSkills: [],
    },
    {
      title: "Areas of Interest",
      fileName: "",
      skills: [
        "🧠 AI & Machine Learning: Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision",
        "📊 Mathematical Foundations: Probability, Statistics, Optimization, Statistical Modeling, Distributed Computing",
        "🧮 Mathematics: Linear Algebra, Calculus, Discrete Mathematics",
        "🕸️ Theory & Algorithms: Graph Theory, Game Theory, Algorithms & Data Structures",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "ETH Zurich",
      subtitle: "MSc in Computer Science",
      logo_path: "eth_logo.png",
      alt_name: "ETH Zurich",
      duration: "Sept 2026 - Present",
      descriptions: [
        "🎓 Pursuing a Master's degree in Computer Science",
        "🎯 Major: Machine Intelligence, Minor: Data Management Systems",
      ],
      website_link:
        "https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/computer-science.html",
    },
    {
      title: "Indian Institute of Science, Bengaluru",
      subtitle: "B.Tech in Mathematics & Computing",
      logo_path: "iisc_logo.png",
      alt_name: "IISc Bengaluru",
      duration: "Oct 2022 - Jul 2026",
      descriptions: [
        "🎓 Graduated with a CGPA of 9.8/10, highest in the cohort",
        "🔬 Bachelor's Thesis: Factorized Representation Learning for Data-Scarce Prediction : An Application to Monsoon Onset Prediction",
        "🤖 Research across Graph Neural Networks, LLM Agents, Federated Learning, and Computer Vision",
        "🏅 Awarded the Chander Mohini Scholarship for the highest CGPA in the first year",
        "🏆 Regional Qualifier for the IET India Scholarship Awards 2023 and Top Quartile in the Simon Marais Mathematics Challenge 2023",
      ],
      website_link: "https://btech-ug.iisc.ac.in/",
    },
    {
      title: "Ahlcon Public School",
      subtitle: "10th + 12th CBSE",
      logo_path: "aps.png",
      alt_name: "APS",
      duration: "May 2008 - May 2022",
      descriptions: [
        "🏆 IITJEE All All India Rank Advanced: 535, Mains: 619",
        "🏆 CBSE XII Board (2022): 97.4% Aggregate (Mathematics 100%, Computer Science 100%)",
        "🏆 CBSE X Board (2020): 96.4% Aggregate (Mathematics 100%)",
        "🏆 SOF IMO and NSO 2022, International Rank: 1",
        "🏆 Kishore Vaigyanik Protsahan Yojana 2022, All India Rank: 726",
      ],
      website_link: "https://ahlconpublicschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Gaussian Process Regression",
      subtitle: "- Dr. Ranjitha Prasad",
      logo_path: "dyslai.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZuPjA7F59kGD_3lIFLnFRimBX9OBq235/view",
      alt_name: "DYSL-AI",
      color_code: "#FFFFFF",
    },
    {
      title: "Intro to LLMs",
      subtitle: "- Dr. Monojit Choudhury",
      logo_path: "kiac.png",
      certificate_link:
        "https://drive.google.com/file/d/1pT-bJmPGkjifEhbM1SZPi7vGujZr-J6c/view",
      alt_name: "KIAC",
      color_code: "#FFFFFF",
    },
    {
      title: "Theory CS Winter School",
      subtitle: "- CSA IISc",
      logo_path: "csa.png",
      certificate_link:
        "https://drive.google.com/file/d/100V-p1UhQYgJ6L0idD8Zo_Vpwa1wFibN/view",
      alt_name: "TCS",
      color_code: "#00000099",
    },
    {
      title:
        "Certificate of Participation in Quiz Round of Kharagpur Data Science Hackathon 2025",
      subtitle: "- Unstop",
      logo_path: "unstop.png",
      certificate_link:
        "https://unstop.com/certificate-preview/7edf5d5f-fd3f-405e-8022-6dac33c1515b",
      alt_name: "Unstop",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "KLA Corporation",
          company_url: "https://www.kla.com/",
          logo_path: "kla.png",
          duration: "May 2025 - Dec 2025",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Building ML algorithms and feature engineering for semiconductor manufacturing processes. Working on data analysis, model development, and deployment to improve yield and process efficiency.",
          color: "#000000",
        },
        {
          title: "AI/ML Research Intern",
          company: "DRDO Young Scientist AI Lab",
          company_url: "https://www.drdo.gov.in/drdo/",
          logo_path: "dyslai.png",
          duration: "May 2024 - Jul 2024",
          location: "Bengaluru, Karnataka, India",
          description:
            "Researched Bias Detection in state-of-the-art Facial Recognition algorithms. Designed experiments revealing ~20% disparity across groups. Deployed deep learning models like AdaFace, GhostFace, ArcFace, etc. to analyze biases and enhance dataset robustness. Generated synthetic data using GANs to mitigate biases.",
          color: "#ee3c26",
        },
        {
          title: "AI Intern",
          company: "IBM",
          company_url: "https://www.ibm.com/in-en",
          logo_path: "ibm_logo.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Remote",
          description:
            "Developed proof of concept for ElectionGPT, a chatbot with 85.21% accuracy for answering election-related queries about 2023 Karnataka Elections. Integrated SQL Agents for real-time data retrieval and deployed across platforms, ensuring scalability and seamless functionality. Deployed conversation buffer memory for context-aware interactions.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Indian Institute of Science, Bengaluru",
          company_url: "https://btech-ug.iisc.ac.in/",
          logo_path: "iisc_logo.png",
          duration: "Jan 2026 - Mar 2026",
          location: "Bengaluru, Karnataka, India",
          description:
            "Teaching Assistant for Undergraduate Course on Introduction to Artificial Intelligence and Machine Learning (UMC 203) and Graduate Course on Game Theory (E1 254)",
          color: "#159f0d",
        },
        {
          title: "Core Member and Project Guide",
          company: "Databased IISc",
          company_url: "https://databased.csa.iisc.ac.in/",
          logo_path: "dbd.png",
          duration: "Dec 2022 - Mar 2026",
          location: "Bengaluru, Karnataka, India",
          description:
            "One of the core members of Databased, the computer science crew of IISc. I was part of the content design team. I have designed interactive projects - Tic Tac Toe solver, Rock Paper Scissors using Computer Vision, Celebrity look alike cam, ASCII Art - for Open Day 2023, 2024, 2025, and 2026. I also guided an introductory AI/ML tutorial series for freshers in 2025.",
          color: "#4285F4",
        },
        {
          title: "Member of Autonomous Navigation Team",
          company: "Vicharaka",
          company_url: "https://vicharaka.iisc.ac.in/",
          logo_path: "vich.png",
          duration: "Aug 2023 - Dec 2023",
          location: "Bengaluru, Karnataka, India",
          description:
            "I was part of the Autonomous Navigation Team of Vicharaka, the robotics team of IISc. I worked running simulations for the autonomous navigation of the robot using Python.",
          color: "#D83B01",
        },
      ],
    },
    // {
    //   title: "Projects",
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "Jun 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects explore modern AI/ML techniques across different domains, from computer vision and LLMs to intelligent systems and data-driven applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "My published Research Work",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "soccart",
      name: "SoccArt: Soccer Game Analysis Pipeline",
      createdAt: "2024-12-14T00:00:00Z",
      description:
        "Poster Presented at 1st International Conference on Applied AI and Scientific Machine Learning 2024 (CASML)",
      url: "https://zenodo.org/records/17837442",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_circ.png",
    description:
      "Feel free to reach out via email or LinkedIn. I am always happy to discuss AI, machine learning, data science, research, or interesting technical projects!",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
