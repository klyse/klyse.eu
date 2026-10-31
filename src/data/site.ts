const workStart = new Date(2014, 7, 1);
export const workYears = new Date().getFullYear() - workStart.getFullYear();

export const links = {
  github: "https://github.com/klyse",
  linkedin: "https://www.linkedin.com/in/klauspruenster/",
  durst: "https://www.durst-group.com",
  source: "https://github.com/klyse/klyse.eu",
};

export const hero = {
  lede: "I build apps that solve real problems for people and customers, and I make sure they feel good to use.",
};

export const about = {
  lede: `I'm Klaus, a software architect with ${workYears}+ years in backend and DevOps.`,
  path: [
    { when: "Now", where: "Durst Group", what: "Software architect. I mostly design and build C# backends.", href: links.durst },
    { when: "Before", where: "Innoactive", what: "XR cloud rendering for enterprises: streaming VR and AR apps from the cloud to headsets around the world." },
    { when: "Started", where: "C & C++", what: "Where it began, close to the metal." },
    { when: "On the side", where: "Strawanzer, Premer & co.", what: "My own things, built for the fun of it.", href: "#projects" },
  ],
  outro: "I like learning, I like teams, and I speak more than one language, in code and out of it.",
};

export const skills = [
  { id: "backend", title: "Backend", items: ["ASP.NET Core", "Node.js", "MongoDB", "Postgres", "Docker"] },
  { id: "frontend", title: "Frontend", items: ["Astro", "React", "SvelteKit", "TypeScript", "Mantine", "Tailwind CSS"] },
  { id: "devops", title: "DevOps", items: ["AWS", "Azure", "Google Cloud", "GitHub Actions", "Docker", "Terraform"] },
];

export type ArtKind = "xr" | "events" | "watch" | "emotions" | "price" | "keyboard";

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
    art: "events",
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
