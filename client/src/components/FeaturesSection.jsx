// import FeatureCard from "./FeatureCard.jsx";

// export default function FeaturesSection() {
//   const features = [
//     {
//       icon: "🎯",
//       title: "Keyword Optimization",
//       desc: "AI analyzes search terms, pauses underperformers, and discovers high-converting keywords automatically.",
//     },
//     {
//       icon: "🎨",
//       title: "Creative Generation",
//       desc: "Generate and test ad creatives powered by AI. Get detailed analysis on what works and what doesn't.",
//       highlight: true,
//     },
//     {
//       icon: "📊",
//       title: "Account Audits",
//       desc: "Instant audits revealing wasted spend, opportunities, and optimization recommendations across all platforms.",
//     },
//     {
//       icon: "💰",
//       title: "Budget Reallocation",
//       desc: "AI automatically shifts budget from low performers to high-ROI campaigns in real-time.",
//     },
//     {
//       icon: "📈",
//       title: "Performance Reports",
//       desc: "Automated reports with actionable insights. No more manual data compilation or guesswork.",
//     },
//     {
//       icon: "💬",
//       title: "ChatGPT Integration",
//       desc: "Ask questions about your ad performance in natural language. Get instant, intelligent answers.",
//     },
//   ];

//   return (
//     <section className="relative  px-6">
//       {/* Soft background glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {features.map((f, i) => (
//           <FeatureCard
//             key={i}
//             icon={f.icon}
//             title={f.title}
//             desc={f.desc}
//             highlight={f.highlight}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { useState } from "react";
import FeatureCard from "./FeatureCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: "🎯",
      title: "Keyword Optimization",
      desc: "AI analyzes search terms and finds high-converting keywords automatically.",
      gradient: "from-blue-500 to-cyan-500",
      stats: ["98% Accuracy", "Auto-detection"],
      delay: 0,
    },
    {
      icon: "🎨",
      title: "Creative Generation",
      desc: "Generate and test ad creatives powered by AI with detailed analysis.",
      gradient: "from-purple-500 to-pink-500",
      stats: ["1000+ Templates", "A/B Testing"],
      highlight: true,
      delay: 0.1,
    },
    {
      icon: "📊",
      title: "Account Audits",
      desc: "Instant audits revealing wasted spend and optimization recommendations.",
      gradient: "from-green-500 to-emerald-500",
      stats: ["Full Analysis", "Cost Savings"],
      delay: 0.2,
    },
    {
      icon: "💰",
      title: "Budget Reallocation",
      desc: "AI shifts budget from low performers to high-ROI campaigns in real-time.",
      gradient: "from-orange-500 to-red-500",
      stats: ["Auto-shifting", "Real-time"],
      delay: 0.3,
    },
    {
      icon: "📈",
      title: "Performance Reports",
      desc: "Automated reports with actionable insights and no manual work.",
      gradient: "from-indigo-500 to-blue-500",
      stats: ["Automated", "Actionable"],
      delay: 0.4,
    },
    {
      icon: "💬",
      title: "ChatGPT Integration",
      desc: "Ask questions about ad performance and get instant intelligent answers.",
      gradient: "from-green-400 to-teal-500",
      stats: ["Natural Language", "Instant Answers"],
      delay: 0.5,
    },
  ];

  return (
    <section className="relative pb-6 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              AI-POWERED FEATURES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Everything You Need to{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Scale Fast
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Advanced AI features that optimize every aspect of your advertising
            campaigns
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                gradient={feature.gradient}
                stats={feature.stats}
                highlight={feature.highlight}
                isHovered={hoveredCard === idx}
                index={idx}
              />
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}