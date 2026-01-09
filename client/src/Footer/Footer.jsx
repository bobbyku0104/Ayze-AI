export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Ryze AI</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            The most advanced AI-powered ad management platform, helping
            businesses grow faster with autonomous optimization.
          </p>

          <div className="flex gap-4 text-xl text-gray-400">
            <span className="cursor-pointer hover:text-white">𝕏</span>
            <span className="cursor-pointer hover:text-white">💼</span>
            <span className="cursor-pointer hover:text-white">📷</span>
            <span className="cursor-pointer hover:text-white">📸</span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-3">
            {["Features", "How It Works", "Pricing", "API", "Updates"].map(
              (item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3">
            {["About", "Careers", "Blog", "Press", "Contact"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            {[
              "Documentation",
              "Help Center",
              "Community",
              "Case Studies",
              "Status",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
          <span>© 2024 Ryze AI. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
