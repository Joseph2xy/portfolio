// Public website content. Keep this project independent of career documents.
export const profile = {
  name: "Joseph B. Joseph",
  firstName: "Joseph",
  email: "joseph2xyb@gmail.com",
  github: "https://github.com/Joseph2xy",
  linkedin: "https://www.linkedin.com/in/joseph2xy/",
  employment: "September 2022 to Present",
  employmentProgression: "Joined as an intern. Full-time since August 2023.",
};

export const projects = [
  {
    name: "Treasury Workspace",
    detail:
      "A personal treasury application for cash positions, currency exposure, and hedging. I designed and built the backend and React interface; the full application's source is private. The separate frontend-only interactive demo uses fictional company data to illustrate cash flow, liquidity forecasts, and FX workflows, without a backend connection.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
    href: "https://treasury-workspace.pages.dev/",
    linkLabel: "Try demo",
    kind: "treasury",
  },
  {
    name: "Momoi",
    detail:
      "A voting app for Twitch viewers to choose what to watch next. A browser extension connects the voting app to YouTube and automatically plays the winning playlist.",
    technologies: ["TypeScript", "React", "Convex"],
    href: `${profile.github}/momoi-voting`,
    linkLabel: "GitHub",
    kind: "momoi",
  },
  {
    name: "PoorBot",
    detail:
      "A Discord bot that follows game prices and sends alerts when they drop.",
    technologies: ["TypeScript", "Node.js", "discord.js"],
    href: `${profile.github}/poorBot`,
    linkLabel: "GitHub",
    kind: "poorbot",
  },
  {
    name: "Momoi TTS",
    detail:
      "An experiment with characters that answer Twitch viewer questions through spoken replies, each with its own personality and voice. Still a work in progress.",
    technologies: ["TypeScript", "Twitch", "OBS"],
    href: `${profile.github}/momoi-tts`,
    linkLabel: "GitHub",
    kind: "tts",
  },
];
