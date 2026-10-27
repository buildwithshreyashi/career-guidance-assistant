(function () {
  "use strict";

  /* ---------- Knowledge base ---------- */

  const CAREERS = [
    {
      name: "Data Science & Analytics",
      keywords: ["data science", "data scientist", "data analyst", "data analytics", "analytics", "statistics", "data"],
      overview: "Data professionals turn raw data into decisions. Data analysts focus on reports and dashboards, while data scientists build statistical and machine learning models.",
      skills: ["Python or R", "SQL for querying databases", "Statistics and probability", "Data visualization (Matplotlib, Power BI, or Tableau)", "Basic machine learning with scikit-learn"],
      roadmap: ["Learn Python and SQL basics", "Practice on public datasets (for example, Kaggle)", "Study statistics and exploratory data analysis", "Build 2 to 3 portfolio projects with write-ups", "Learn machine learning and deploy one model"]
    },
    {
      name: "Machine Learning & AI",
      keywords: ["machine learning", "ml engineer", "ai engineer", "deep learning", "artificial intelligence", "ai career", "llm", "neural network"],
      overview: "ML and AI engineers design, train, and deploy models that power products such as recommendations, search, and language tools.",
      skills: ["Python and clean coding habits", "Math: linear algebra, calculus, and probability", "scikit-learn for classical models", "PyTorch or TensorFlow for deep learning", "Working with APIs and deploying models"],
      roadmap: ["Strengthen Python and math fundamentals", "Complete one structured ML course", "Build models on real datasets and compare results", "Learn deployment basics with a simple web app", "Read papers and follow new tools to stay current"]
    },
    {
      name: "Software Development",
      keywords: ["software", "developer", "programmer", "programming", "coding", "web developer", "frontend", "backend", "full stack", "full-stack", "app developer"],
      overview: "Software developers design, build, and maintain applications. Roles range from frontend (what users see) to backend (servers and databases) to full stack (both).",
      skills: ["One main language such as Python, JavaScript, or Java", "Data structures and algorithms", "Git and GitHub", "Databases and APIs", "Testing and debugging"],
      roadmap: ["Pick one language and learn its core syntax", "Learn data structures and basic algorithms", "Build small projects and put them on GitHub", "Learn a framework relevant to your target role", "Practice coding interviews and contribute to open source"]
    },
    {
      name: "Cybersecurity",
      keywords: ["cybersecurity", "cyber security", "security analyst", "ethical hacking", "penetration", "pentest", "infosec", "soc analyst"],
      overview: "Cybersecurity professionals protect systems and data by detecting threats, testing defenses, and responding to incidents.",
      skills: ["Networking fundamentals (TCP/IP, DNS, firewalls)", "Linux command line", "Security basics: threats, encryption, and access control", "Scripting with Python or Bash", "Entry-level certifications such as CompTIA Security+"],
      roadmap: ["Learn networking and Linux basics", "Study security fundamentals and common attacks", "Practice on legal labs such as TryHackMe or Hack The Box", "Earn an entry-level certification", "Build a home lab and document what you learn"]
    },
    {
      name: "Cloud & DevOps",
      keywords: ["cloud", "devops", "aws", "azure", "docker", "kubernetes", "infrastructure", "sre"],
      overview: "Cloud and DevOps engineers build and run the infrastructure that software depends on, automating deployments and keeping systems reliable.",
      skills: ["Linux and shell scripting", "Networking basics", "One major cloud platform (AWS, Azure, or Google Cloud)", "Docker and containers", "CI/CD pipelines and infrastructure as code"],
      roadmap: ["Learn Linux and networking fundamentals", "Pick one cloud platform and learn its core services", "Containerize a small app with Docker", "Set up an automated deployment pipeline", "Earn a foundational cloud certification"]
    },
    {
      name: "UX/UI Design",
      keywords: ["ux", "ui design", "ui/ux", "designer", "user experience", "user interface", "figma", "product design"],
      overview: "UX and UI designers shape how people experience a product, from understanding users to designing screens that are clear and easy to use.",
      skills: ["User research and interviews", "Wireframing and prototyping", "Figma or similar design tools", "Usability testing", "Visual design basics: layout, color, and typography"],
      roadmap: ["Learn design principles and usability basics", "Learn Figma and build a few screens", "Redesign an existing app and explain your choices", "Run a small usability test and document results", "Build a portfolio with case studies"]
    },
    {
      name: "Product Management",
      keywords: ["product manager", "product management", "product owner", "product role"],
      overview: "Product managers decide what gets built and why. They work between users, engineers, and business goals to deliver useful products.",
      skills: ["User research and empathy", "Data analysis to measure success", "Prioritization and roadmapping", "Clear written and verbal communication", "Basic understanding of how software is built"],
      roadmap: ["Learn how software products are built and launched", "Study real products and their user needs", "Write product specs for a small idea", "Analyze product metrics on public datasets", "Seek internships or junior roles in product teams"]
    }
  ];

  const INDUSTRIES = [
    {
      name: "Finance & Fintech",
      keywords: ["finance", "fintech", "banking", "bank", "investment", "trading"],
      overview: "Finance uses data and software heavily for risk analysis, fraud detection, payments, and customer service. Roles include data analysts, software developers, and risk analysts."
    },
    {
      name: "Healthcare",
      keywords: ["healthcare", "health care", "medical", "hospital", "pharma", "biotech"],
      overview: "Healthcare uses data for diagnosis support, patient records, and operations. Roles include data analysts, health informatics specialists, and software developers. Some areas require strict data privacy knowledge."
    },
    {
      name: "E-commerce & Retail",
      keywords: ["ecommerce", "e-commerce", "retail", "shopping", "online store"],
      overview: "E-commerce relies on recommendations, pricing analysis, search, and logistics. Roles include data analysts, product managers, and software developers."
    },
    {
      name: "Education",
      keywords: ["education", "edtech", "teaching", "school", "university"],
      overview: "Education technology uses data to personalize learning and improve outcomes. Roles include instructional designers, data analysts, and software developers."
    }
  ];

  const GENERAL = [
    {
      keywords: ["resume", "cv"],
      reply: "For your resume, try the Resume Reviewer tool. It checks your resume on key points and suggests improvements. Then tailor your resume to each job description."
    },
    {
      keywords: ["interview"],
      reply: "Interview tips:\n1. Research the company and the role.\n2. Prepare 2 or 3 project stories using the STAR method (Situation, Task, Action, Result).\n3. Practice technical questions for your target role.\n4. Prepare questions to ask the interviewer."
    },
    {
      keywords: ["internship", "intern"],
      reply: "To find internships, build 2 or 3 projects, keep your GitHub or portfolio updated, and apply early. Use your university career office, LinkedIn, and company career pages. Tailor each application to the role."
    },
    {
      keywords: ["salary", "pay", "package", "how much"],
      reply: "Salaries vary by location, experience, and company. For accurate figures, check current job portals and official labour statistics for your country."
    },
    {
      keywords: ["which career", "best career", "suggest a career", "what should i", "confused", "not sure"],
      reply: "A good way to choose is to list what you enjoy, what you are good at, and what problems you want to solve. Then explore 2 or 3 careers from this list:\n" + CAREERS.map(function (c) { return "• " + c.name; }).join("\n") + "\n\nTell me which one interests you."
    }
  ];

  const ASPECTS = {
    skills: ["skill", "skills", "need", "require", "requirement", "know", "tools"],
    roadmap: ["roadmap", "path", "start", "begin", "how to become", "how do i", "learn", "steps", "step"],
    overview: ["what is", "what's", "about", "overview", "explain", "describe", "work"]
  };

  const SUGGESTIONS = [
    "What is data science?",
    "Skills for software development",
    "Roadmap for machine learning",
    "Which career should I choose?",
    "Tips for internships",
    "Career in healthcare"
  ];

  /* ---------- Matching helpers ---------- */

  function normalize(text) {
    return " " + text.toLowerCase().replace(/[^a-z0-9/+&\s-]/g, " ").replace(/\s+/g, " ") + " ";
  }

  function countMatches(text, keywords) {
    let score = 0;
    keywords.forEach(function (kw) {
      if (text.indexOf(" " + kw) !== -1) score += kw.split(" ").length;
    });
    return score;
  }

  function bestMatch(text, list) {
    let best = null;
    let bestScore = 0;
    list.forEach(function (item) {
      const score = countMatches(text, item.keywords);
      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    });
    return best;
  }

  function detectAspect(text) {
    for (const aspect of Object.keys(ASPECTS)) {
      if (ASPECTS[aspect].some(function (kw) { return text.indexOf(" " + kw) !== -1; })) {
        return aspect;
      }
    }
    return "overview";
  }

  /* ---------- Reply generation ---------- */

  function buildCareerReply(career, aspect) {
    if (aspect === "skills") {
      return career.name + " - key skills:\n" + career.skills.map(function (s) { return "• " + s; }).join("\n") +
        "\n\nWant a learning roadmap for this path?";
    }
    if (aspect === "roadmap") {
      return "Learning roadmap for " + career.name + ":\n" + career.roadmap.map(function (s, i) { return (i + 1) + ". " + s; }).join("\n") +
        "\n\nAsk me for the skills it needs if you want more detail.";
    }
    return career.name + ":\n" + career.overview + "\n\nAsk about its skills or a roadmap to get started.";
  }

  function getReply(message) {
    const text = normalize(message);

    if (/^ ?(hi|hello|hey|hii|namaste|good morning|good evening)\b/.test(text.trim() + " ")) {
      return "Hi! I can help you explore careers, the skills they need, and how to get started. What would you like to know?";
    }
    if (text.indexOf(" thank") !== -1) {
      return "You're welcome! Good luck with your career planning.";
    }
    if (text.indexOf(" help") !== -1 || text.indexOf(" what can you do") !== -1) {
      return "I can help with:\n• Career overviews (for example, \"What is data science?\")\n• Skills you need (for example, \"Skills for cybersecurity\")\n• Learning roadmaps (for example, \"Roadmap for UX design\")\n• Industry insights (for example, \"Careers in finance\")\n• Resume, interview, and internship tips";
    }

    // Industry questions
    const industry = bestMatch(text, INDUSTRIES);
    const career = bestMatch(text, CAREERS);

    if (industry && (!career || countMatches(text, industry.keywords) >= countMatches(text, career.keywords))) {
      return industry.name + ":\n" + industry.overview + "\n\nAsk about a specific career in this field to learn more.";
    }

    // General topics
    for (const g of GENERAL) {
      if (g.keywords.some(function (kw) { return text.indexOf(" " + kw) !== -1; })) {
        return g.reply;
      }
    }

    // Career questions
    if (career) {
      return buildCareerReply(career, detectAspect(text));
    }

    // Skill or roadmap question with no career named
    if (detectAspect(text) !== "overview") {
      return "Which career would you like the " + (detectAspect(text) === "skills" ? "skills" : "roadmap") + " for? Here are some options:\n" +
        CAREERS.map(function (c) { return "• " + c.name; }).join("\n");
    }

    return "I'm not sure about that yet. Try asking about a career such as data science, software development, cybersecurity, or UX design, or type \"help\" to see what I can do.";
  }

  /* ---------- UI ---------- */

  const el = {
    messages: document.getElementById("messages"),
    suggestions: document.getElementById("suggestions"),
    form: document.getElementById("chat-form"),
    input: document.getElementById("chat-input")
  };

  function addMessage(text, who) {
    const div = document.createElement("div");
    div.className = "bubble " + who;
    div.textContent = text;
    el.messages.appendChild(div);
    el.messages.scrollTop = el.messages.scrollHeight;
    return div;
  }

  function renderSuggestions() {
    el.suggestions.innerHTML = "";
    SUGGESTIONS.forEach(function (text) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.textContent = text;
      btn.addEventListener("click", function () { send(text); });
      el.suggestions.appendChild(btn);
    });
  }

  function send(text) {
    const message = text.trim();
    if (!message) return;
    addMessage(message, "user");
    el.input.value = "";

    const typing = addMessage("Typing...", "bot typing");
    const delay = 400 + Math.min(message.length * 10, 600);
    setTimeout(function () {
      typing.remove();
      addMessage(getReply(message), "bot");
    }, delay);
  }

  el.form.addEventListener("submit", function (e) {
    e.preventDefault();
    send(el.input.value);
  });

  renderSuggestions();
  addMessage("Hi! I'm your career guidance assistant. Ask me about a career, the skills it needs, or a roadmap to get started.", "bot");
})();
