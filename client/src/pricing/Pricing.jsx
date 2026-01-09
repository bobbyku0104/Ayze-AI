// import PricingCard from "./PricingCard";

// export default function Pricing() {
//   return (
//     <section className="relative bg-[#0b1220] text-white py-24 px-6 overflow-hidden">
//       {/* Header */}
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <span className="inline-block px-5 py-2 text-sm rounded-full border border-indigo-500/40 text-indigo-400 mb-6">
//           PRICING
//         </span>

//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Simple, Transparent Pricing
//         </h2>

//         <p className="text-gray-400 text-lg">
//           Choose the plan that fits your business needs
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <PricingCard
//           title="Starter"
//           price="$99"
//           subtitle="/month"
//           features={["Up to $5k ad spend", "Google & Meta AI optimization"]}
//         />

//         <PricingCard
//           title="Growth"
//           price="$299"
//           subtitle="/month"
//           popular
//           features={["Up to $25k ad spend", "All platform optimization"]}
//         />

//         <PricingCard
//           title="Enterprise"
//           price="Custom"
//           features={["Unlimited ad spend", "Custom AI model training"]}
//         />
//       </div>
//     </section>
//   );
// }










import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section className="relative bg-[#030712] text-white py-24 px-6 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Pricing Plans
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Scale?
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Stop overpaying for ad management. Our AI does the heavy lifting for
            a fraction of the cost of an agency.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          <PricingCard
            title="Starter"
            price="$99"
            subtitle="/mo"
            features={[
              "Up to $5,000 monthly ad spend",
              "Google & Meta AI optimization",
              "Real-time performance dashboard",
              "Weekly email reports",
              "Email support",
            ]}
          />

          <PricingCard
            title="Growth"
            price="$299"
            subtitle="/mo"
            popular={true}
            features={[
              "Up to $25,000 monthly ad spend",
              "TikTok & LinkedIn integration",
              "Custom ChatGPT analysis",
              "Priority AI processing",
              "24/7 Slack support",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited monthly ad spend",
              "Custom AI model training",
              "Dedicated account manager",
              "White-label reporting",
              "API Access",
            ]}
          />
        </div>

        {/* Footer Guarantee */}
        <p className="mt-12 text-center text-gray-500 text-sm">
          All plans include a{" "}
          <span className="text-gray-300 font-semibold">14-day free trial</span>
          . No credit card required.
        </p>
      </div>
    </section>
  );
}