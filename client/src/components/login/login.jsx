import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, ArrowLeft, Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log({ email, password });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#020617] font-sans relative overflow-hidden">
      {/* 🔙 BACK BUTTON */}
      <Link
        to="/"
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all group"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition"
          />
        </div>
        Back to Home
      </Link>

      {/* LEFT SIDE: Brand Visual */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-16 border-r border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="relative z-10 text-white max-w-lg">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            Platform v2.0 Live
          </div>
          <h1 className="text-6xl font-black leading-[0.9] tracking-tighter mb-6">
            Welcome to the <br />
            <span className="bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Agentic Era
            </span>
          </h1>
          <p className="text-gray-400 text-lg font-medium leading-relaxed">
            Your high-performance AI dashboard is one <br /> secure login away.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-16 bg-[#020617]">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
              Sign in
            </h2>
            <p className="text-gray-500 font-medium">
              Please enter your credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-500 ml-1">
                Work Email
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] text-white pl-12 pr-4 py-4 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                  Password
                </label>
                <Link
                  to="/forgot"
                  className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-colors"
                  size={18}
                />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] text-white pl-12 pr-12 py-4 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-gray-200 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 shadow-xl shadow-white/5"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Authenticating...</span>
                </>
              ) : (
                "Continue to Dashboard"
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">
              Social Access
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-bold text-gray-300">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-bold text-gray-300">
              Apple
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 font-medium">
            Don’t have an account?
            <Link
              to="/signup"
              className="text-indigo-400 font-black ml-2 hover:text-indigo-300 transition-colors"
            >
              Create one now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}