// محتوای زبان انگلیسی — جدا از UI نگه داشته می‌شود تا کامپوننت‌ها فقط رندر کنند
const en = {
  dir: "ltr",
  meta: {
    title: "AIdea — Turn raw information into decisions",
  },
  nav: {
    home: "Home",
    about: "About",
    features: "Features",
    projects: "Use Cases",
    contact: "Contact",
    cta: "Start Free",
  },
  hero: {
    eyebrow: "AI Reasoning Layer",
    headline: "Your company already knows the answer. AIdea finds it.",
    subtext:
      "AIdea reads across your docs, tickets, and conversations to give your team a clear, cited answer in seconds — not a summary you still have to verify.",
    ctaPrimary: "Start Free",
    ctaSecondary: "See how it works",
    trustLabel: "Trusted by product teams at",
  },
  intro: {
    eyebrow: "The problem",
    heading: "Your best answers are buried, not missing.",
    body: "The information your team needs already exists — spread across docs, tickets, spreadsheets, and old Slack threads. AIdea doesn't generate guesses. It reasons over what your company actually knows, and shows you where the answer came from.",
    stats: [
      { value: "4.2 hrs", label: "avg. weekly time lost searching for answers" },
      { value: "63%", label: "of internal questions are answered somewhere already" },
      { value: "11 sec", label: "median time for AIdea to return a cited answer" },
    ],
  },
  features: {
    eyebrow: "Capabilities",
    heading: "Built to reason, not just retrieve.",
    subtext: "Every capability exists to close one gap: turning scattered company knowledge into an answer you can trust.",
    items: [
      {
        title: "Cited Answers",
        desc: "Every response links back to its source document, ticket, or thread — no black box.",
      },
      {
        title: "Cross-Source Reasoning",
        desc: "AIdea connects information across tools instead of searching one system at a time.",
      },
      {
        title: "Team Memory",
        desc: "Past questions and verified answers become reusable knowledge, not one-off chats.",
      },
      {
        title: "Access-Aware",
        desc: "Answers respect existing permissions — people only see what they're already allowed to.",
      },
      {
        title: "Structured Output",
        desc: "Get answers as text, tables, or comparisons — shaped for how you'll actually use them.",
      },
      {
        title: "Workflow Native",
        desc: "Works inside Slack, docs, and your browser — no new tab your team has to remember.",
      },
    ],
  },
  advantages: {
    eyebrow: "Why AIdea",
    heading: "Confidence, not autocomplete.",
    items: [
      {
        title: "Sourced, not invented",
        desc: "Every answer traces to a real document. If AIdea isn't sure, it says so instead of guessing.",
      },
      {
        title: "Set up in an afternoon",
        desc: "Connect your existing tools — no data migration, no six-week onboarding.",
      },
      {
        title: "Built for teams, not just chat",
        desc: "Answers are shareable, verifiable, and improve the more your team uses them.",
      },
    ],
  },
  useCases: {
    eyebrow: "Where teams use it",
    heading: "One reasoning layer, every team.",
    subtext: "AIdea adapts to how each team already asks questions.",
    items: [
      {
        role: "Product",
        title: "Answer 'why did we build it this way' instantly",
        desc: "Surface the original spec, decision thread, and trade-off discussion in one query.",
      },
      {
        role: "Support",
        title: "Resolve tickets without pinging engineering",
        desc: "Pull the exact fix or workaround from past tickets and internal docs.",
      },
      {
        role: "Engineering",
        title: "Understand legacy code decisions",
        desc: "Trace why a system was built a certain way across old PRs and design docs.",
      },
      {
        role: "Operations",
        title: "Keep policies consistent across teams",
        desc: "Get the current, correct version of a policy — not last year's copy in someone's docs.",
      },
    ],
  },
  cta: {
    heading: "Stop searching. Start asking.",
    subtext: "Connect your tools and get your first cited answer in under five minutes.",
    ctaPrimary: "Start Free",
    ctaSecondary: "Talk to us",
    note: "No credit card required",
  },
  footer: {
    tagline: "The reasoning layer for company knowledge.",
    product: "Product",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    links: {
      product: ["Features", "Use Cases", "Pricing", "Changelog"],
      company: ["About", "Careers", "Contact"],
      resources: ["Documentation", "API", "Status"],
      legal: ["Privacy", "Terms", "Security"],
    },
    rights: "All rights reserved.",
  },
  pages: {
    about: {
      eyebrow: "About AIdea",
      heading: "We think answers should be provable.",
      body1: "AIdea started from a simple frustration: AI tools that sound confident but can't show their work. Every team we talked to had the same problem — the answer existed somewhere in their company, but finding it took longer than doing the work themselves.",
      body2: "So we built a reasoning layer instead of another chatbot. AIdea doesn't guess — it retrieves, cross-references, and cites. It's designed for teams who need to trust the answer, not just receive one.",
      valuesHeading: "What we hold to",
      values: [
        { title: "Traceability first", desc: "If an answer can't be sourced, we don't show it as fact." },
        { title: "Respect existing access", desc: "AI shouldn't be a backdoor around your permission system." },
        { title: "Useful over impressive", desc: "We optimize for time saved, not demo-day wow." },
      ],
    },
    features: {
      eyebrow: "Features",
      heading: "Everything AIdea does, in detail.",
      subtext: "A closer look at how each capability works in practice.",
    },
    projects: {
      eyebrow: "Use Cases",
      heading: "Real scenarios, real teams.",
      subtext: "How different teams put AIdea's reasoning layer to work every day.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about your team's knowledge gap.",
      subtext: "Tell us a bit about what you're trying to solve — we'll follow up within one business day.",
      form: {
        name: "Full name",
        email: "Work email",
        company: "Company",
        message: "What are you trying to solve?",
        submit: "Send message",
      },
      direct: "Prefer email? Reach us directly at",
    },
  },
};

export default en;
