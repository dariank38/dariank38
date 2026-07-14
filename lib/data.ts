export const storyTitle = 'Introduction to My Development Skills and Career'

export const storyParagraphs = [
  `Born a year before the release of Windows 95, I can't quite pinpoint when my fascination with computers began. It just always seemed to be there. From a young age, I became thoroughly proficient with every legacy OS of that era: Win95, Win98, WinME, Win2000, WinXP, and WinVista. Young as I was, I understood and operated them all at a solid level. Back then, I knew my way around all of it - WinME, which would completely lock up the moment the power so much as flickered, and Windows 2000, whose source code Microsoft eventually made public. Oh, and this is kind of a silly one, but I still remember multiple Win98 serial numbers to this day. Ha. I must have memorized them so young that they're just permanently stuck up there, and can't get rid of them even if I tried.`,

  `If I had to trace the origin of my interest in programming, it would probably be my desire to build something like the MSPaint that came with Win95. My very first programming language was Pascal - primitive by today's standards, a procedural-oriented relic - but it was widely used at the time. For a good while I was completely obsessed with it, spending my days staring at that iconic blue background with white and yellow foreground text on the crt screen.`,

  `From there I explored Visual Basic, Delphi, Flash Script, and various other approaches before finally arriving at C — the true language of programmers. I was 14 years old when I first picked up C/C++. Obviously I wasn't old enough to start a professional career, so I pursued it as a hobby, happily spending my time with C, C++, Windows NT Programming, APIs, MFC, and all manner of libraries. During this period I built apps like a VNC-style remote desktop tool using the Windows API, and gained hands-on experience with threading and asynchronous processing. For someone so young, it was a substantial body of experience.`,

  `After that, I spent a lot of time on Fedora using KDevelop with the Qt library — though I can't recall the exact version. Once I started working professionally, I continued with Qt across Windows and Android, among other platforms. I genuinely enjoyed KDE development as well.`,

  `One thing I remember clearly. I first encountered HTML, CSS, JavaScript, and ExtJS around 2010. Before that point, nearly all my spare time outside of school was consumed by programming — fingers on the keyboard, always building something.`,

  `My very first assignment as an intern was building Tetris - a competition among new hires to see who could write the shortest, most performant code. That was followed by a project to port two SWF Flash games to Cocos2d.`,

  `During that project, something happened that I'll never forget. A power outage killed the entire office and my machine included. At the exact moment I was pressing Ctrl+S. When the power came back, my main.cpp was gone. Nearly a month of work, wiped clean. Not even a #pragma in sight. Total devastation.`,

  `The company hadn't allowed SVN access for interns' projects, so I'd been working locally with WinRAR as my "version control." Looking back, that's a bit embarrassing to admit — but regardless, that first year at the company was genuinely grueling.`,

  `My next assignment was building an offline dictionary app for architects. Dictionary software turned out to be more complex than expected; only later did I realize corpus theory was at the heart of it. I also developed an application using the Autodesk Revit SDK, which taught me how to work with third-party SDKs.`,

  `Through a personal connection, I moved on to a startup. Understaffed by nature, the company handed two or three simultaneous projects to each developer. That environment pushed me into a wide range of new territory: building internal management systems with ASP.NET, IIS, and Node.js (around v0.4, as I recall); developing a video conferencing system with WebRTC; and building another conferencing client in WinForms.`,

  `And the mobile market was still booming at the time, so I also got extensive experience with Cocos2d and Cocos3d. When CocosCreator completely overhauled the development model in 2019, I stepped away from Cocos entirely - though looking back later, I could see how much easier they'd made things.`,

  `I also spent a long stretch doing hybrid mobile development with Cordova and Ionic, with Framework 7 as my go-to framework. During this period I established a solid understanding of deployment through AWS, and got my first exposure to AngularJS and ReactJS — both of which have evolved enormously since then.`,

  `This company gave me some of the most memorable experiences of my career. I did Android APK reverse engineering and Unity APK reversing. I served as PM on the development of TSolution, an office suite built on top of LibreOffice, where I led the HWP module development and the main UI. The LibreOffice class and module workflow documentation was so extensive that when I printed it out and hung it on the walls, it covered three full walls.`,

  `I also contributed to the KakaoTalk desktop client, led development of a remote internal security management system, built a product sales platform, and — right around the time TensorFlow and Keras were emerging — developed a CAPTCHA auto-recognition and bypass program.`,

  `At my next company, I encountered something I'd never dealt with before: the intersection of software and physical hardware. I'd dabbled with toggling LEDs via assembly and briefly played around with a Raspberry Pi, but this was a different scale entirely. The project involved processing video feeds from 280 Hikvision cameras and using the results to automatically control access gates at the company's main entrance and other locations — opening and closing them based on vehicle authorization. This required not just computer vision, but also PLC and Arduino integration for motor control. I didn't design the physical PLC boards — hardware engineering isn't my field — but I was responsible for everything on the software side.`,

  `During the COVID period, I also developed an employee attendance and anomaly detection system using thermal imaging cameras.`,

  `Following that, I joined a project comparable in scale to Alibaba + Alipay, where I served as team lead for the payments module and contributed to backend and admin website development for the e-commerce side. The project gave me a much deeper appreciation for the tradeoffs between MongoDB and Oracle DB. We incorporated blockchain concepts into the payment system — not a full multi-node distributed chain in the strict sense, but all transaction signing and payment generation was built with security as a foundation.`,

  `I also led development of a unified management system for restaurants and shopping malls, covering both web and app interfaces. However the POS side wasn't mine. One colleague who loves printing took the side.`,

  `As the Web3 space emerged, I didn't go all-in professionally, but I've kept pace with new Web3 technologies and languages and continue to follow the space today.`,

  `After ChatGPT's arrival in 2022, I worked on several AI-related projects — some of which I can't discuss due to NDAs. Among the ones I can mention: I built a service that lets authors load their books as text files, assign character voices to individual lines of dialogue, and automatically generate a complete audiobook. I also built a service where authors provide chapter and section titles along with basic plot outlines as prompts, and the system auto-completes the entire book.`,

  `Looking back on my career path, I honestly can't quite define what my "specialty" is. But I think that's simply the result of who I am — someone who dives headfirst into any software challenge, whether it pays or not, just because I love it.`,

  `Some people, when they see my résumé or hear me talk about my experience, respond with skepticism — "Is all of this real? How could one person have done all of that?" It's all real. I would never claim experience I don't have, and the things I have done, I remember with precision.`,

  `You, reading this, might be wondering the same thing — "So what exactly is this person's core skill?" Fair question. If I had to pick a few anchors from everything above, I'd say: C#, Windows Programming, and Java (Android).`,
]

export type Experience = {
  title: string
  period: string
  description: string
  skills: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Early Beginnings',
    period: 'Childhood — early teens',
    description:
      'Started with legacy Windows systems (Win95 through Vista), learned Pascal, Visual Basic, Delphi, and Flash Script before moving into C/C++, Windows NT Programming, APIs, MFC, and Qt. Built a VNC-style remote desktop tool as a teenager.',
    skills: ['Pascal', 'Visual Basic', 'C/C++', 'Win32 API', 'MFC', 'Qt'],
  },
  {
    title: 'Software Developer Intern — KOAST',
    period: 'Dec 2014 – Sep 2015',
    description:
      'First professional assignment: built Tetris for a new-hire competition, ported SWF Flash games to Cocos2D for Android and iOS, built a 3D modeling tool integrated with Autodesk Revit, and developed an offline dictionary app for architects.',
    skills: ['Cocos2D', 'Autodesk Revit SDK', '3D Modeling', 'Android', 'iOS'],
  },
  {
    title: 'Software Engineer — NovaCircuit',
    period: 'Oct 2015 – Feb 2019',
    description:
      'Handled multiple projects simultaneously: endpoint monitoring with screen recording and behavioral anomaly detection, CAPTCHA recognition with image processing, web/desktop video conferencing (WebRTC), HWP 5.0 document parsing for LibreOffice, Android/Unity APK reverse engineering, KakaoTalk desktop client contributions, and a product sales platform.',
    skills: ['Node.js', 'MongoDB', 'WebRTC', 'Android', 'LibreOffice', 'Image Processing', 'ASP.NET', 'Cordova', 'Ionic'],
  },
  {
    title: 'Senior FullStack Engineer — NeuralBridge',
    period: 'Mar 2019 – Present',
    description:
      'Started with hardware-software intersection: 280 Hikvision cameras with PLC/Arduino gate control, thermal imaging attendance during COVID. Then led payments for an Alibaba/Alipay-scale e-commerce platform with blockchain-inspired transaction signing. Since 2022, focused on AI: expert marketplace with multi-model evaluation (LLaMA, Mistral, GPT, Gemini), fraud detection, RAG-powered matching, AI book writing assistant, real-time crypto analytics, and an LLM-driven Telegram swap bot.',
    skills: ['LangChain', 'RAG', 'Pinecone', 'GPT', 'Gemini', 'React', 'AWS', 'C#', 'MongoDB', 'Computer Vision', 'Blockchain'],
  },
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Favorites',
    skills: ['C#', 'Windows Programming', 'Android Development'],
  },
  {
    category: 'LLM & Generative AI',
    skills: ['GPT', 'Gemini', 'LLaMA', 'Mistral', 'Prompt Engineering', 'RAG', 'AI Agents'],
  },
  {
    category: 'LLM Orchestration & Search',
    skills: ['LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'Chroma', 'Embedding Pipelines'],
  },
  {
    category: 'ML Engineering',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Classification', 'Anomaly Detection', 'Pandas', 'NumPy', 'SciPy'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Node.js', 'Flask/FastAPI', 'REST / GraphQL', 'ASP.NET', 'PHP', 'Java'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Svelte', 'HTML/CSS', 'Angular'],
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS (EC2, S3, Lambda)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Nginx', 'Redis'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Oracle DB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Blockchain / Web3',
    skills: ['Solidity', 'Ethers.js', 'Web3.js', 'Smart Contracts', 'Web3 Storage', 'Web3 Wallet Development'],
  },
  {
    category: 'Mobile',
    skills: ['Android (Java, Kotlin)', 'Cocos2D', 'Cordova', 'Ionic'],
  },
  {
    category: 'Foundations',
    skills: ['C/C++', 'Pascal', 'Qt'],
  },
]

export const blogPosts = [
  {
    slug: 'story',
    title: 'My Story',
    excerpt: 'The full journey from Windows 95 to AI — how I became the developer I am today.',
    date: '2026-07-13',
    tags: ['Career', 'Story'],
  },
  {
    slug: 'nine-years-and-uncle',
    title: 'Nine Years, and Uncle',
    excerpt: 'A client I met on Upwork, two accidents, and a bond that refused to break — the story of a nine-year project that finally came home.',
    date: '2026-07-14',
    tags: ['Story', 'Personal', 'Client'],
  },
]

export type BlogPostContent = {
  slug: string
  sections: { heading?: string; paragraphs: string[] }[]
}

export const blogPostContents: BlogPostContent[] = [
  {
    slug: 'nine-years-and-uncle',
    sections: [
      {
        paragraphs: [
          `For most developers, "keeping your word" means hitting a deadline. But there's one promise in my life that means something different. It took nine years to finish. Twice, an accident cut off all contact between me and the person I'd made it to. And yet I never let go of that promise — and neither did he. This is the story of those nine years.`,
          `Nine years ago, I met a client by chance on Upwork. What he'd hired me for was software development. But the real problem he was carrying was something else entirely. He had already spent three years trying to bring this project to life, but the developers he'd worked with either lacked the skill or never truly understood what he was trying to build. All he had to show for those three years were incomplete pieces of work — and not even the source code for those. What remained were a handful of mockup screens he'd sketched himself, and a pile of materials about the marriage and couples-counseling service he ran.`,
          `At the time, I had no idea this connection would still be alive today, or that nine years later I'd finally be handing him a finished product.`,
        ],
      },
      {
        heading: 'The First Accident',
        paragraphs: [
          `This was before vibe coding existed, so coding still demanded real time and effort. Even so, a skilled developer should have been able to finish both the web and mobile versions within six months.`,
          `Once I'd finished the web version and the Android app, I made plans to meet him in person and headed to the airport to fly to Michigan, where he lived. That same day, I was in an accident.`,
          `It took a while to recover. My body eventually healed, but my devices were completely destroyed — every account and every contact stored on them was gone. I've never regretted anything more than not having memorized his contact information. Ten years ago, backing everything up to the cloud wasn't yet the habit it is now.`,
        ],
      },
      {
        heading: 'A Reunion, Seven Years Later',
        paragraphs: [
          `A few years later, I stumbled across his contact information again, almost by accident. I managed to recover the email account we'd once used to communicate, and we finally reconnected.`,
          `He was genuinely overjoyed to hear from me again. And he still wanted to finish the project that carried his dream. What struck me most was this: for seven years, he hadn't handed the project to anyone else. He had simply kept what I'd given him, safe and untouched, waiting. That trust of his weighed on me more than any contract ever could.`,
        ],
      },
      {
        heading: 'The Second Accident',
        paragraphs: [
          `We worked together again for two years. Then something happened in my personal life, and I disappeared from contact for over a year. Once again, I wasn't able to let him know what had happened to me.`,
          `The last promise we'd made was that once he returned from a business trip, we'd get the project ready to launch. That promise, too, went unkept. Accidents, as it turns out, never announce themselves in advance.`,
          `When I finally recovered, the first person I reached out to wasn't family — it was him. After all the years we'd shared, and the understanding we'd built between us, this project had stopped being just his dream. It had become something I cared about too. I wanted, more than anything, to see his dream become real.`,
        ],
      },
      {
        heading: 'Closing the Circle',
        paragraphs: [
          `I wanted, somehow, to bring these nine years to a close. Last month — exactly nine years after we first met — I finally finished the project.`,
          `If the reason this took nine years was a lack of responsibility, or conscience, or simply not being skilled enough, then I probably should have given up being a developer altogether. But that's not what this delay was. It was the product of two accidents and a bond that, somehow, refused to break. That no matter how much life falls apart, you finish what you started — that's what I wanted to prove, to him and to myself, over these nine years.`,
        ],
      },
      {
        heading: 'Why I Call Him Uncle',
        paragraphs: [
          `Over the course of a life, a person meets many people. But I doubt I'll ever have another relationship as full of twists and turns as this one. What I'm most grateful for is that, through all of it, he was endlessly generous and considerate toward me. There were times when he suffered losses because of me, or because of things in my life beyond my control — and still, he never once held it against me. He always just said, "God bless you."`,
          `Today, I work alongside him as part of his team, and we've become genuine friends. He's always been someone who offers me guidance, encouragement, and a living example of what it means to live with values — an elder I look up to. That's why I call him Uncle.`,
          `Looking back on these nine years, I think the story really comes down to one thing: a good relationship survives only when neither person gives up on the other. And I want to be the kind of developer who never gives up on the people, or the work, they've committed to — no matter what gets in the way.`,
        ],
      },
    ],
  },
]

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Darian picked up our payments module quickly and delivered on time. He adapts fast to new codebases.',
    author: 'Ted Lee',
    role: 'CTO of Fintech Platform',
  },
  {
    quote:
      'He genuinely enjoys programming, and that shows in his work. A reliable engineer who gets things done.',
    author: 'Engineering Manager',
    role: 'NovaCircuit',
  },
  {
    quote:
      'From hardware integration to AI services, Darian is versatile and dependable. A solid addition to any team.',
    author: 'CTO',
    role: 'NeuralBridge',
  },
]

export type ProjectHighlight = {
  title: string
  description: string
  tags: string[]
  icon: string
}

export const projectHighlights: ProjectHighlight[] = [
  {
    title: 'AI Expert Marketplace',
    description:
      'Platform that matches vetted AI experts with clients. Built a LangChain-orchestrated multi-model evaluation pipeline (LLaMA, Mistral, GPT, Gemini) for parallel expert scoring, a hybrid fraud detection system (LLM + ML anomaly detection), and RAG-powered semantic matching using vector embeddings.',
    tags: ['LangChain', 'RAG', 'Pinecone', 'Weaviate', 'GPT', 'Gemini', 'AWS'],
    icon: 'brain',
  },
  {
    title: 'Payments Module',
    description:
      'Led the payments module for an e-commerce platform at Alibaba scale. Designed secure transaction flows, multi-party settlement logic, and blockchain-inspired transaction signing.',
    tags: ['Node.js', 'MongoDB', 'Oracle DB', 'Blockchain'],
    icon: 'credit-card',
  },
  {
    title: 'Smart Gate Vision System',
    description:
      'Computer vision pipeline processing 280 Hikvision camera feeds to control physical access gates via PLC/Arduino integration. Also built a thermal-imaging attendance system during COVID.',
    tags: ['Computer Vision', 'PLC', 'Microcontroller C', 'OpenCV', 'HIKVision SDK', 'Qt', 'C++', 'Thermal Imaging'],
    icon: 'camera',
  }
]

export type PsychometricTrait = {
  category: string
  traits: string[]
  description: string
}

export const psychometricTraits: PsychometricTrait[] = [
  {
    category: 'Thinking',
    traits: ['Analysing', 'Exploring'],
    description:
      'Comfortable dealing with numerical data to understand and solve problems. Factual and uses evidence to support hypotheses. Prefers established and proven approaches, appreciates authority and rules, and adjusts easily. Practical and down to earth, while keeping an open mind to novel approaches.',
  },
  {
    category: 'Executing',
    traits: ['Quality', 'Result Driven'],
    description:
      'Systematic, methodical, and organised — delivers within deadlines. Reliable, disciplined, and driven to achieve goals. Doesn\u2019t get lost in detail, though can sometimes overlook mistakes.',
  },
  {
    category: 'Connecting',
    traits: ['Networking', 'Collaborating'],
    description:
      'Displays empathy towards colleagues and values listening to their points of view. Involves others in key decisions and plans. Gives credit where it\u2019s due and delegates easily when necessary.',
  },
  {
    category: 'Progressing',
    traits: ['Leadership', 'Resilience', 'Adaptability'],
    description:
      'Comfortable working in rapidly changing environments. A good team player who pays attention to everyone\u2019s input in a group setting.',
  },
]

export const psychometricSummary = {
  topTraits: ['Team player', 'Focused', 'Analytical'],
  roleFit: [
    'Roles involving managing multiple stakeholders or building deep relationships with key accounts.',
    'Roles with clear goals or timelines, where performance can be easily measured.',
    'Roles relating to research, analysis, data analytics, or applying rational thinking to solve problems.',
  ],
  organizationFit: [
    'Organisations that are supportive of employees, promote sharing information, and have good employee recognition programs.',
    'Organisations that are fast-paced, results-oriented, and offer clear career paths linked to performance.',
    'Organisations that promote evidence-based critical thinking.',
  ],
}

export type MbtiTrait = {
  label: string
  opposite: string
  percent: number
  category: string
  color: string
}

export type MbtiSection = {
  title: string
  paragraphs: string[]
}

export const mbtiData = {
  type: 'ENFJ-T',
  typeName: 'Protagonist',
  role: 'Diplomat',
  description: [
    `As a Protagonist (ENFJ-T), you possess a unique blend of charisma, empathy, and idealism that sets you apart in any crowd. Your natural ability to inspire and lead others is matched only by your deep-seated desire to make a positive impact on the world around you. You have an uncanny knack for understanding people's emotions and motivations, often sensing what others need before they even realize it themselves.`,
    `Your gift for communication allows you to articulate your visionary ideas with passion and conviction, drawing others into your orbit and motivating them to join your cause. You thrive on meaningful connections and have a remarkable talent for bringing out the best in those around you. However, your idealistic nature can sometimes set you up for disappointment when reality falls short of your lofty expectations.`,
  ],
  traits: [
    { label: 'Extraverted', opposite: 'Introverted', percent: 61, category: 'Energy', color: 'blue' },
    { label: 'Intuitive', opposite: 'Observant', percent: 57, category: 'Mind', color: 'yellow' },
    { label: 'Feeling', opposite: 'Thinking', percent: 65, category: 'Nature', color: 'green' },
    { label: 'Judging', opposite: 'Prospecting', percent: 61, category: 'Tactics', color: 'purple' },
    { label: 'Turbulent', opposite: 'Assertive', percent: 64, category: 'Identity', color: 'red' },
  ] as MbtiTrait[],
  sections: [
    {
      title: 'Career',
      paragraphs: [
        `Your career path is likely to be driven by a deep-seated need to make a meaningful difference in people's lives. You thrive in roles that allow you to inspire, guide, and develop others, making you an excellent teacher, counselor, or team leader. Your natural charisma and ability to articulate a compelling vision make you a standout in fields like human resources, public relations, or nonprofit management.`,
      ],
    },
    {
      title: 'Personal Growth',
      paragraphs: [
        `Your journey of personal growth is fueled by an insatiable desire for self-improvement and a genuine commitment to becoming the best version of yourself. You set high standards for your own behavior and are often your own harshest critic. While this drive can lead to remarkable personal development, it's crucial to temper it with self-compassion and realistic expectations.`,
      ],
    },
    {
      title: 'Relationships',
      paragraphs: [
        `In relationships, whether romantic, familial, or platonic, you shine as a deeply committed and intuitive partner. Your ability to understand and cater to others' emotional needs makes you a valued friend and confidant. You have a gift for creating deep, meaningful connections and building environments where others feel safe to be their authentic selves.`,
      ],
    },
  ] as MbtiSection[],
}
