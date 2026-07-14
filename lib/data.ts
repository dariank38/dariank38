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

  `At my next company, I encountered something I'd never dealt with before: the intersection of software and physical hardware. I'd dabbled with toggling LEDs via assembly and briefly played around with a Raspberry Pi, but this was a different scale entirely. The project involved processing video feeds from 28 Hikvision cameras and using the results to automatically control access gates at the company's main entrance and other locations — opening and closing them based on vehicle authorization. This required not just computer vision, but also PLC and Arduino integration for motor control. I didn't design the physical PLC boards — hardware engineering isn't my field — but I was responsible for everything on the software side.`,

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
      'Started with legacy Windows systems, Pascal, Visual Basic, Delphi, and Flash Script before moving into C/C++, Windows APIs, MFC, and Qt.',
    skills: ['Pascal', 'Visual Basic', 'C/C++', 'Win32 API', 'MFC', 'Qt'],
  },
  {
    title: 'First Professional Steps',
    period: 'Internship',
    description:
      'Built Tetris as a new-hire competition, ported SWF Flash games to Cocos2d, survived a power outage that wiped a month of work, and built an offline dictionary for architects using the Autodesk Revit SDK.',
    skills: ['Cocos2d', 'C/C++', 'Autodesk Revit SDK', 'Corpus Theory'],
  },
  {
    title: 'Startup Polyglot',
    period: 'Startup years',
    description:
      'Handled multiple projects at once: ASP.NET/IIS/Node.js management systems, WebRTC video conferencing, WinForms clients, Cocos2d/Cocos3d mobile games, Cordova/Ionic hybrid apps, and AWS deployments.',
    skills: ['ASP.NET', 'Node.js', 'WebRTC', 'WinForms', 'Cocos2d/3d', 'Cordova', 'Ionic', 'AWS', 'AngularJS', 'ReactJS'],
  },
  {
    title: 'Deep Systems & Reverse Engineering',
    period: 'Mid career',
    description:
      'Reverse engineered Android and Unity APKs, led the LibreOffice-based TSolution office suite as PM, contributed to the KakaoTalk desktop client, and built a CAPTCHA auto-recognition system with TensorFlow/Keras.',
    skills: ['Android Reverse Engineering', 'Unity', 'LibreOffice', 'HWP', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Hardware & Computer Vision',
    period: 'Computer vision era',
    description:
      'Processed video feeds from 28 Hikvision cameras, controlled access gates with PLC/Arduino integration, and built thermal-camera attendance & anomaly detection during COVID.',
    skills: ['Computer Vision', 'PLC', 'Arduino', 'Hikvision', 'Thermal Imaging'],
  },
  {
    title: 'Scale, Fintech & Blockchain',
    period: 'Large-scale systems',
    description:
      'Led the payments module for an Alibaba/Alipay-scale project, worked with MongoDB and Oracle, and designed blockchain-inspired security for transaction signing.',
    skills: ['C#', 'Payments', 'MongoDB', 'Oracle DB', 'Blockchain', 'E-commerce'],
  },
  {
    title: 'AI & Web3',
    period: 'Present',
    description:
      'Stayed current with Web3 technologies, and after ChatGPT launched built AI-powered audiobook generation and book auto-completion services.',
    skills: ['Web3', 'ChatGPT', 'AI/ML', 'Text-to-Speech', 'LLMs'],
  },
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core',
    skills: ['C#', 'Windows Programming', 'Java (Android)'],
  },
  {
    category: 'Languages',
    skills: ['C/C++', 'Pascal', 'JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'AngularJS', 'Qt', 'ASP.NET', 'Node.js', 'Cocos2d'],
  },
  {
    category: 'Mobile',
    skills: ['Android', 'Cordova', 'Ionic', 'Framework 7', 'Unity'],
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS', 'IIS', 'Linux', 'Docker', 'Git'],
  },
  {
    category: 'AI & Data',
    skills: ['TensorFlow', 'Keras', 'LLMs', 'Computer Vision', 'PLC/Arduino'],
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
    slug: 'ai-audiobook',
    title: 'Building an AI Audiobook Service',
    excerpt: 'How I turned text files into full audiobooks with character voices and LLMs.',
    date: '2026-07-13',
    tags: ['AI', 'Project'],
  },
  {
    slug: 'cocos-to-creator',
    title: 'From Cocos2d to CocosCreator',
    excerpt: 'Why I stepped away from Cocos in 2019 and what the new tooling taught me.',
    date: '2026-07-13',
    tags: ['Game Dev', 'Mobile'],
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
      'Darian has an uncanny ability to jump into any codebase and start shipping within days. He led our payments module with zero prior domain knowledge and delivered ahead of schedule.',
    author: 'Team Lead',
    role: 'Fintech Platform',
  },
  {
    quote:
      'I have never met someone who genuinely loves programming as much as Darian. His passion is contagious — it lifts the entire team.',
    author: 'Engineering Manager',
    role: 'Startup',
  },
  {
    quote:
      'From hardware integration to AI services, Darian simply gets it done. He is the most versatile engineer I have worked with.',
    author: 'CTO',
    role: 'IoT Company',
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
    title: 'AI Audiobook Engine',
    description:
      'A service that transforms manuscripts into full audiobooks — assigning distinct character voices to dialogue lines using LLMs and neural TTS.',
    tags: ['AI', 'LLM', 'TTS', 'Python'],
    icon: 'brain',
  },
  {
    title: 'Alibaba-scale Payments',
    description:
      'Led the payments module for an e-commerce platform comparable to Alibaba + Alipay, with blockchain-inspired transaction signing and MongoDB/Oracle tradeoffs.',
    tags: ['C#', 'Blockchain', 'MongoDB', 'Oracle'],
    icon: 'credit-card',
  },
  {
    title: 'Smart Gate Vision System',
    description:
      'Processed live feeds from 28 Hikvision cameras to control physical access gates via PLC/Arduino — computer vision meets the real world.',
    tags: ['Computer Vision', 'PLC', 'Arduino', 'C'],
    icon: 'camera',
  },
  {
    title: 'LibreOffice Office Suite',
    description:
      'PM and lead developer for TSolution, an office suite built on LibreOffice. Led HWP module development and the main UI across three walls of documentation.',
    tags: ['C++', 'LibreOffice', 'HWP', 'UI'],
    icon: 'file-text',
  },
]
