
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    initials: "RD",
    name: "Roger Dunn",
    role: "Global Performance Lead",
    text: "Ryze AI cut our CPA by 45% while increasing conversions by 38%. The AI optimization runs 24/7 and outperforms any human team we've worked with.",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    role: "Marketing Director",
    text: "We've saved over 40 hours per week on manual optimization tasks. The AI’s keyword discovery alone has generated $250k in new revenue.",
  },
  {
    initials: "TJ",
    name: "Thomas Johnson",
    role: "Founder & CEO",
    text: "The ChatGPT integration is revolutionary. Being able to ask questions about our performance in plain English has transformed how we make decisions.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
    id="testimonials"
    className="relative py-24 px-6 overflow-hidden bg-[#030712] text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Wall of Love
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Trusted by Industry Leaders
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join 500+ companies scaling their performance marketing with Ryze
            AI’s autonomous optimization engine.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Optional Call to Action Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-4">
            Used by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-50">
            {/* Replace these with actual SVGs/Logos as needed */}
            <span className="text-xl font-bold italic">FORBES</span>
            <span className="text-xl font-bold italic">TECHCRUNCH</span>
            <span className="text-xl font-bold italic">WIRED</span>
          </div>
        </div>
      </div>
    </section>
  );
}