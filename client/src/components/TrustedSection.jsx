// export default function TrustedSection() {
//   return (
//     <section className="relative w-full py-28 overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#0E1530] to-[#0B1020]" />

//       {/* Soft glow bubbles */}
//       <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
//       <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 blur-[120px] rounded-full" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Trusted text */}
//         <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-10">
//           Trusted by 2000+ brands & 700+ agencies
//         </p>

//         {/* Logos row (text-based like image) */}
//         <div className="flex flex-wrap justify-center gap-10 text-gray-400 text-sm font-medium mb-20">
//           <span className="hover:text-white transition">Google Ads</span>
//           <span className="hover:text-white transition">Meta</span>
//           <span className="hover:text-white transition">ChatGPT</span>
//           <span className="hover:text-white transition">LinkedIn</span>
//           <span className="hover:text-white transition">Perplexity</span>
//           <span className="hover:text-white transition">Amazon Ads</span>
//         </div>

//         {/* Pill */}
//         <div className="inline-flex items-center px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs tracking-wider mb-6">
//           POWERFUL FEATURES
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//           Everything You Need to Win
//         </h2>

//         {/* Subtitle */}
//         <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           AI-powered tools that work 24/7 to optimize every aspect of your
//           advertising campaigns
//         </p>
//       </div>
//     </section>
//   );
// }












import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Target,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function TrustedSection() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logos = [
    { name: "Google", color: "from-blue-500 to-green-500", delay: 0 },
    { name: "Meta", color: "from-purple-500 to-blue-500", delay: 0.1 },
    { name: "OpenAI", color: "from-green-500 to-emerald-500", delay: 0.2 },
    { name: "Microsoft", color: "from-blue-600 to-cyan-500", delay: 0.3 },
    { name: "Amazon", color: "from-orange-500 to-yellow-500", delay: 0.4 },
    { name: "LinkedIn", color: "from-blue-400 to-cyan-400", delay: 0.5 },
    { name: "Twitter", color: "from-sky-500 to-blue-500", delay: 0.6 },
    { name: "TikTok", color: "from-pink-500 to-purple-500", delay: 0.7 },
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Real-time Optimization" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Performance Analytics" },
    { icon: <Target className="w-5 h-5" />, text: "Smart Targeting" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Monitoring" },
    { icon: <Shield className="w-5 h-5" />, text: "AI Security" },
    { icon: <Globe className="w-5 h-5" />, text: "Multi-platform" },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-[#0A0F1E] via-[#0D1430] to-[#0A0F1E]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, -30, 10],
              x: [null, Math.sin(i) * 20],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-40 left-20 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-[180px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 right-20 w-[350px] h-[350px] bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-[150px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Trusted Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Trusted by 2000+ Brands & 700+ Agencies
            </span>
          </motion.div>

          {/* Logo Grid */}
          <motion.div variants={itemVariants} className="mb-16 relative">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {logos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: logo.delay, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  onMouseEnter={() => setHoveredLogo(idx)}
                  onMouseLeave={() => setHoveredLogo(null)}
                  className="relative group"
                >
                  {/* Card Background */}
                  <div className="relative p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                    {/* Hover Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Logo Glow Effect */}
                    {hoveredLogo === idx && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${logo.color} blur-xl opacity-30`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                      />
                    )}

                    {/* Logo Content */}
                    <div className="relative z-10">
                      <div className="text-2xl font-bold text-white mb-2">
                        {logo.name.charAt(0)}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {logo.name}
                      </p>
                    </div>
                  </div>

                  {/* Connection Line Animation */}
                  {hoveredLogo === idx && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      initial={{ scaleX: 0, x: "-50%" }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 backdrop-blur-sm mb-10 relative overflow-hidden group"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Sparkle Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </motion.div>

            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent relative z-10">
              POWERFUL AI FEATURES
            </span>

            {/* Pulsing Dot */}
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Everything You Need to{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Win Big
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          >
            AI-powered tools that work 24/7 to optimize every aspect of your
            advertising campaigns, delivering{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold">
              unprecedented results
            </span>{" "}
            while you focus on what matters.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                className="group relative"
              >
                <div className="relative p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
                  {/* Feature Icon */}
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400">{feature.icon}</div>
                  </div>

                  {/* Feature Text */}
                  <p className="text-sm text-gray-300 font-medium">
                    {feature.text}
                  </p>

                  {/* Check Indicator */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Uptime" },
                { value: "2.3x", label: "Avg. ROAS Increase" },
                { value: "45%", label: "Cost Reduction" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          
        </motion.div>
      </div>

    
    </section>
  );
}