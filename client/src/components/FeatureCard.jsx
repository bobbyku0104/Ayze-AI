import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export default function FeatureCard({
  icon,
  title,
  desc,
  gradient,
  stats,
  highlight,
  isHovered,
  
}) {
  return (
    <div className="relative h-full group">
      {/* Main Card */}
      <div
        className={`h-full rounded-2xl border border-gray-800/50 
        ${
          highlight
            ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5"
            : "bg-gray-900/30"
        }
        backdrop-blur-sm overflow-hidden transition-all duration-300
        group-hover:border-gray-700/70 group-hover:scale-[1.02]`}
      >
        {/* Card Content */}
        <div className="p-6 h-full flex flex-col">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-4">
            {/* Icon */}
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20`}
            >
              <span className="text-2xl">{icon}</span>
            </div>

            {/* Popular Badge */}
            {highlight && (
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-xs font-medium text-purple-300">
                  Popular
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {desc}
          </p>

          {/* Stats Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {stats.map((stat, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    isHovered
                      ? `bg-gradient-to-r ${gradient} bg-opacity-20 text-white`
                      : "bg-gray-800/50 text-gray-400"
                  } border border-gray-700/50 transition-all duration-300`}
              >
                {stat}
              </span>
            ))}
          </div>

          {/* Bottom Arrow */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
            <span className="text-sm text-gray-500">AI-powered</span>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <div
          className={`absolute -inset-1 bg-gradient-to-br ${gradient} blur-lg opacity-20 rounded-2xl -z-10`}
        />
      )}
    </div>
  );
}