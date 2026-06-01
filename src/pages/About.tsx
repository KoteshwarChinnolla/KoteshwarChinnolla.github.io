import Header from "@/components/Header";
import { Mail, MapPin, Briefcase, GraduationCap, Award, Users, Github, Linkedin, Quote, Atom, Cpu, Bot, Rocket, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import koteshwarImg from "@/assets/koteshwar.jpeg";

const About = () => {
  const chapters = [
    {
      icon: Atom,
      kicker: "Chapter 01",
      title: "A Curiosity That Refused to Stay Still",
      body: [
        "Physics was always my strongest subject — not just in school, but in every competitive exam. More than the scores, I genuinely enjoyed understanding how motion, energy, and electricity behaved, and how they connected to each other.",
        "That love for physics pointed me toward Electronics and Communication Engineering, and from there, toward building systems that can sense, process, and move intelligently in the real world.",
      ],
    },
    {
      icon: Cpu,
      kicker: "Chapter 02",
      title: "Finding My Direction — AI Inside an ECE Degree",
      body: [
        "Engineering gave me more than a degree; it gave me a direction. By the end of my first semester, I knew AI and ML were where I wanted to go. That led me to the Advanced Academic Centre, a selective research center at our college where students work on real projects beyond the regular curriculum.",
        "The people I met there were genuinely passionate, and the freedom to pick our own problems and build things that actually worked pushed me to go deeper than any classroom would have.",
        "My first real project was a product demand prediction system. I collected actual wholesale market data spanning five years and built a model to forecast future demand patterns. It sounds straightforward now, but at the time it was the first moment I wrote real code that did something real. That feeling stayed with me.",
      ],
    },
    {
      icon: Bot,
      kicker: "Chapter 03",
      title: "Hackathons, Mentorship, and the First Robot",
      body: [
        "In my second year, inside AAC, I was going deeper into ML and DL — NLP pipelines, transformer models, BERT-based classifiers, and OpenCV. My college also introduced a competitive coding program, and after multiple evaluation rounds I made it into the top 100 coders batch, training with the Smart Interviews team.",
        "I participated in four hackathons, watched teams build autonomous and robotic systems in under 24 hours, met students already turning ideas into startups, and came back every time with a longer list of things I wanted to build.",
        "By my third year, I had grown into a mentor role in AAC, guiding junior students through their first projects. Around the same time, microcontrollers and microprocessors entered my coursework. In my third year second semester, I built an A* algorithm-based autonomous vehicle — a grid-based system where a user manually selected a destination and the vehicle found the shortest path to get there. While I was deep in the path equations and hardware assembly, the limitation became obvious: why should a human have to think in grids? That question became the seed of everything that followed.",
      ],
    },
    {
      icon: Rocket,
      kicker: "Chapter 04",
      title: "Natural Language Meets Autonomous Motion",
      body: [
        "To answer it, I started researching Agentic AI in my fourth year first semester. It took time. Making natural language reliably control a physical system is harder than it sounds.",
        "By my final semester, I had a working system: ROS for navigation, A* for pathfinding, OpenCV for vision, and LangChain and LangGraph for the agentic layer, all running on a Raspberry Pi. A robot that could take a spoken or typed instruction and actually go where it was told.",
        "I wrote it up, submitted it, and had it accepted and presented at an IEEE conference. That paper taught me how to think like a researcher, not just a builder.",
      ],
    },
    {
      icon: Lightbulb,
      kicker: "Chapter 05",
      title: "Industry, APISynIQ, and the Research Question Ahead",
      body: [
        "After graduation, I joined as an Associate Software Engineer working across AI and DevOps. Industry exposed me to the full stack of production systems: recommendation engines, AWS infrastructure, Kubernetes, and Terraform. I wrote open-source Terraform modules and Helm charts that are actively used in the organisation.",
        "But robots have no frontend. No form fields, no dropdowns, no structured input layer. A robot must ask questions conversationally, interpret the answers, map them to the right API parameters, and submit — all from raw natural language. The entire burden of structure falls on the AI. That gap is what APISynIQ was built to close.",
        "I built APISynIQ as an open-source AI agent that could take a natural language query and reliably map it to the correct API endpoint with the right parameters. Under real conditions, the hard problem surfaced: continuous conversation still caused malformed structured outputs. A field mapped to the wrong key, an ambiguous phrase taken literally, or a previous correction ignored could cascade into complete task failure.",
        "I am currently researching this problem at the intersection of world models and reinforcement learning: how a model can build an internal representation of structured output requirements, generate outputs accordingly, and iteratively correct itself based on feedback signals. It is early-stage research, but I am convinced it points toward something meaningful, and I want to pursue it rigorously at the graduate level.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* HERO */}
        <section className="mb-24 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          <div className="md:col-span-2 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(262,83%,58%)]/20 via-[hsl(292,84%,61%)]/20 to-[hsl(38,97%,64%)]/20 blur-2xl rounded-[2.5rem]" />
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={koteshwarImg} alt="Chinnolla Koteshwar" className="w-full h-full object-cover object-top grayscale-[20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs uppercase tracking-widest text-white/90 font-medium">
                  <span>Hyderabad · IN</span>
                  <span>Est. 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6 animate-slide-up">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">— About</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Chinnolla{" "}
              <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic font-serif">
                Koteshwar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              Engineer, researcher, and lifelong tinkerer building systems that <span className="font-medium text-foreground">sense, reason, and act</span> — at the intersection of Agentic AI, robotics, and reinforcement learning.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4" /> Hyderabad, India</span>
              <span className="flex items-center gap-2 text-muted-foreground"><Briefcase className="w-4 h-4" /> Associate SE — AI & DevOps · Anasol</span>
              <span className="flex items-center gap-2 text-muted-foreground"><GraduationCap className="w-4 h-4" /> B.Tech ECE · Minor in AI/ML</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="mailto:chinnollakoteshwar@gmail.com">
                <Button className="rounded-full px-6"><Mail className="mr-2 h-4 w-4" /> Email</Button>
              </a>
              <a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
              </a>
              <a href="https://www.linkedin.com/in/koteshwar-chinnolla-2065b4253/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
              </a>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="mb-24 relative rounded-[2rem] bg-gradient-to-br from-card via-card to-muted p-10 md:p-16 overflow-hidden">
          <Quote className="absolute top-6 left-6 w-20 h-20 text-foreground/5" />
          <blockquote className="relative max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-snug text-foreground">
              "Give what ever it takes !!"
            </p>
            <footer className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">— Personal Mantra</footer>
          </blockquote>
        </section>

        {/* STATS STRIP */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { v: "8.39", l: "CGPA · GRIET", g: "from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)]" },
            { v: "988", l: "/1000 · Intermediate", g: "from-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)]" },
            { v: "IEEE", l: "Published Researcher", g: "from-[hsl(38,97%,64%)] to-[hsl(262,83%,58%)]" },
            { v: "4×", l: "Hackathons", g: "from-[hsl(262,83%,58%)] to-[hsl(38,97%,64%)]" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card p-6 md:p-8 text-center card-hover">
              <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${s.g} bg-clip-text text-transparent`}>{s.v}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">{s.l}</p>
            </div>
          ))}
        </section>

        {/* STORY CHAPTERS */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— The Long Form</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Journey, in Five Chapters</h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {chapters.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <article key={ch.kicker} className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  <div className="md:col-span-3 md:sticky md:top-24">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-mono tracking-widest text-muted-foreground">{ch.kicker}</p>
                        <p className="text-sm font-semibold mt-1 leading-tight">{ch.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-9 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                      {ch.title}
                    </h3>
                    {ch.body.map((p, idx) => (
                      <p key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-24 rounded-[2rem] bg-card p-8 md:p-14">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— Toolbox</p>
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          </div>
          <div className="space-y-10">
            {[
              { label: "Languages", items: ["Java", "Python", "C++", "Go", "HCL"] },
              { label: "AI / ML", items: ["Machine Learning", "Deep Learning", "Agentic AI", "Computer Vision", "LangChain", "LangGraph", "TensorFlow", "PyTorch", "OpenCV", "BERT", "Reinforcement Learning"] },
              { label: "Cloud & DevOps", items: ["Kubernetes", "Terraform", "Helm", "AWS", "AWS Lambda", "Docker", "CI/CD", "GitHub Actions", "Istio", "Elasticsearch"] },
              { label: "Backend & Systems", items: ["Spring Boot", "gRPC", "Kafka", "Redis", "ROS", "Raspberry Pi", "Arduino"] },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="font-semibold mb-4 text-muted-foreground text-xs tracking-[0.25em] uppercase">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH HIGHLIGHT */}
        <section className="mb-24 rounded-[2rem] bg-gradient-to-br from-[hsl(262,83%,58%)]/10 via-[hsl(292,84%,61%)]/10 to-[hsl(38,97%,64%)]/10 p-8 md:p-14 border border-border">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <BookOpen className="w-10 h-10 mb-4" />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">— IEEE Publication</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">Natural Language Based Autonomous Navigation Vehicle</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                Accepted and presented at an IEEE conference, this paper combines ROS, A* path planning, OpenCV, and an agentic LangChain/LangGraph layer running on a Raspberry Pi — translating natural-language commands into autonomous physical motion.
              </p>
              <p>
                The work seeded my current research interest: <span className="text-foreground font-medium">how agentic systems can reliably produce structured outputs and learn from their own mistakes</span> — explored through world models and reinforcement learning.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold">Roles & Mentorship</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Backend & DevOps Lead</h3>
                <p className="text-muted-foreground text-sm mb-2">Junior Developers · April 2025</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Led backend and DevOps initiatives, guiding junior engineers through production deployment patterns and cloud-native architecture.</p>
              </div>
            </div>
            <div className="p-7 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Mentor — AAC</h3>
                <p className="text-muted-foreground text-sm mb-2">Advanced Academic Center · March 2023</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Guided four junior students through their first research projects. Teaching sharpened my own understanding in ways studying alone never could.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 md:py-20 rounded-[2.5rem] bg-gradient-to-br from-card to-muted">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Let's build, research, or just talk shop.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Open to graduate research opportunities, engineering collaborations, and conversations about agentic AI, robotics, or reinforcement learning.
          </p>
          <a href="mailto:chinnollakoteshwar@gmail.com">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base hover:scale-105 transition-all">
              <Mail className="mr-2 h-5 w-5" />
              chinnollakoteshwar@gmail.com
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
