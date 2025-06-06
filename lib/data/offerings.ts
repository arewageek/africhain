import { Zap, Target, Coins, Vote, Shield, TrendingUp } from "lucide-react"

export const offeringsData = [
  {
    icon: Zap,
    title: "Launch Toolkit",
    description: "One-click deployment tools for tokens, NFTs, and DAOs with enterprise-grade security and scalability",
    category: "Development Tools",
    features: [
      "Smart contract templates with audit-ready code",
      "Token deployment with custom tokenomics",
      "NFT collection creation and minting",
      "DAO governance setup and configuration",
      "Multi-chain deployment support",
      "Gas optimization tools",
      "Security audit integration",
    ],
    benefits: [
      "Reduce development time by 80%",
      "Save $50K+ in development costs",
      "Launch with confidence using battle-tested code",
      "Scale across multiple blockchains effortlessly",
    ],
    techStack: ["Solidity", "React", "Node.js", "IPFS", "The Graph", "Hardhat"],
  },
  {
    icon: Target,
    title: "Builder Studio",
    description: "Comprehensive project management and collaboration platform designed specifically for Web3 teams",
    category: "Project Management",
    features: [
      "Agile project management with Web3 workflows",
      "Team collaboration and communication tools",
      "Progress tracking with milestone management",
      "Analytics dashboard with key metrics",
      "Integration with development tools",
      "Community feedback collection",
      "Investor reporting automation",
    ],
    benefits: [
      "Increase team productivity by 60%",
      "Better stakeholder communication",
      "Data-driven decision making",
      "Streamlined investor relations",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "Chart.js"],
  },
  {
    icon: Coins,
    title: "Grant Access",
    description: "Direct access to funding opportunities through our DAO treasury and extensive VC network",
    category: "Funding",
    features: [
      "DAO grant applications and voting",
      "VC introductions and warm connections",
      "Funding round preparation and support",
      "Token economics consulting",
      "Pitch deck optimization",
      "Due diligence assistance",
      "Legal and compliance guidance",
    ],
    benefits: [
      "Access to $2M+ in available grants",
      "50+ VC partnerships",
      "90% faster funding process",
      "Expert guidance throughout",
    ],
    techStack: ["Governance Tokens", "Multi-sig Wallets", "Snapshot", "Aragon", "Safe"],
  },
  {
    icon: Vote,
    title: "Community DAO",
    description: "Participate in a thriving ecosystem where builders vote, collaborate, and grow together",
    category: "Community",
    features: [
      "Governance voting on key decisions",
      "Community feedback and peer review",
      "Peer-to-peer support network",
      "Transparent application process",
      "Reputation and contribution tracking",
      "Exclusive events and workshops",
      "Mentorship matching system",
    ],
    benefits: [
      "Learn from 500+ active builders",
      "Get feedback from industry experts",
      "Build lasting professional relationships",
      "Influence the future of African Web3",
    ],
    techStack: ["Snapshot", "Discord", "Telegram", "Governance Tokens", "POAP"],
  },
  {
    icon: Shield,
    title: "TAC Ecosystem",
    description: "Deploy using EVM-compatible Solidity with seamless TON connectivity for maximum reach",
    category: "Infrastructure",
    features: [
      "EVM compatibility for familiar development",
      "TON blockchain integration",
      "Cross-chain bridge functionality",
      "Scalable infrastructure solutions",
      "Developer-friendly APIs",
      "Comprehensive documentation",
      "24/7 technical support",
    ],
    benefits: [
      "Reach both EVM and TON ecosystems",
      "Lower transaction costs",
      "Higher throughput and scalability",
      "Future-proof architecture",
    ],
    techStack: ["TAC", "TON", "Solidity", "Web3.js", "Ethers.js", "TON SDK"],
    comingSoon: true,
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "End-to-end marketing, partnerships, and scaling guidance to take your protocol global",
    category: "Growth & Marketing",
    features: [
      "Go-to-market strategy development",
      "Partnership network and introductions",
      "Marketing campaign management",
      "Community building strategies",
      "PR and media relations",
      "Scaling and optimization consulting",
      "International expansion support",
    ],
    benefits: [
      "10x faster user acquisition",
      "Access to global markets",
      "Professional marketing support",
      "Strategic partnership opportunities",
    ],
    techStack: ["Analytics", "CRM", "Social Media APIs", "Email Marketing", "SEO Tools"],
  },
]
