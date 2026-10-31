const workStart = new Date(2014, 7, 1);
export const workYears = new Date().getFullYear() - workStart.getFullYear();

export const links = {
  github: "https://github.com/klyse",
  linkedin: "https://www.linkedin.com/in/klauspruenster/",
  durst: "https://www.durst-group.com",
  source: "https://github.com/klyse/klyse.eu",
  email: "klaus.pruenster@gmail.com",
};

export const hero = {
  lede: "I build apps that solve real problems for people and customers, and I make sure they feel good to use.",
};

// Plain strings are prose, `pill` renders a slab link, `ghost` renders AI-autocomplete text.
type StoryPart = string | { pill: string; href?: string } | { ghost: string };

export const about: { lede: string; steps: StoryPart[][]; outro: string } = {
  lede: "I started out writing near-realtime C++, where every millisecond counts, and no AI wrote a single line of it.",
  steps: [
    ["Next came backend services, across different databases and different languages."],
    ["Later I added frontends and started shipping my own apps, front to back, product included."],
    ["At ", { pill: "Durst Group", href: links.durst }, " I now design systems front to back, ", { ghost: "finally with AI helping out." }],
  ],
  outro: "I like efficient teams, using the best language for the job, and solving customers' problems.",
};

// Not shown on the page; feeds `knowsAbout` in the structured data.
export const skills = [
  { id: "backend", title: "Backend", items: ["ASP.NET Core", "Node.js", "MongoDB", "Postgres", "Docker"] },
  { id: "frontend", title: "Frontend", items: ["Astro", "React", "SvelteKit", "TypeScript", "Mantine", "Tailwind CSS"] },
  { id: "devops", title: "DevOps", items: ["AWS", "Azure", "Google Cloud", "GitHub Actions", "Docker", "Terraform"] },
];

export type ArtKind = "xr" | "cat" | "watch" | "emotions" | "price" | "keyboard";

export type Project = {
  title: string;
  description: string;
  art: ArtKind;
  year?: string;
  status?: "live" | "private" | "archived";
  stack?: string[];
  liveUrl?: string;
  codeUrl?: string;
};

// TODO(klaus): add `year` and `stack` per project, and check which ones are still online.
export const projects: Project[] = [
  {
    title: "XR Cloud Rendering",
    art: "xr",
    description: "Globally scaled cloud rendering for XR applications, at Innoactive.",
    status: "live",
    liveUrl: "https://www.innoactive.io/",
  },
  {
    title: "Strawanzer",
    art: "cat",
    description: "South Tyrol's events platform.",
    status: "archived",
    liveUrl: "https://strawanzer.events",
  },
  {
    title: "Premer",
    art: "watch",
    status: "archived",
    description: "Presentation timer for Apple Watch.",
    liveUrl: "https://premer.klyse.eu",
    codeUrl: "https://github.com/klyse/premer",
  },
  {
    title: "Magun",
    art: "emotions",
    description: "Share those emotions.",
    status: "archived",
  },
  {
    title: "Price Tracking",
    art: "price",
    description: "Price tracking for supermarkets.",
    status: "private",
  },
  {
    title: "Logitech Keyboard LED",
    art: "keyboard",
    description: "An LED-based shortcut helper for Logitech keyboards.",
    codeUrl: "https://github.com/klyse/LogitechKeyboardLED",
  },
];

export const stats = [
  { value: "10,000", suffix: "+", label: "GitHub contributions" },
  { value: String(projects.length), label: "Projects" },
  { prefix: "~", value: "7", label: "Hackathons" },
  { value: String(workYears), suffix: "+", label: "Years building" },
];
