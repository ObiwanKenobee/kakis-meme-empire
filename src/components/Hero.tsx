import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#221F26] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFD70012_1px,transparent_1px),linear-gradient(to_bottom,#FFD70012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="animate-fade-down text-sm font-serif font-medium text-[#FFD700] tracking-wider uppercase mb-8">
          Welcome to the Future of Meme Culture
        </p>
        <h1 className="animate-fade-up text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
          Unite the Empire of Memes.
          <span className="block text-[#FFD700]">
            Build the Future of Culture.
          </span>
        </h1>
        <p className="animate-fade-up text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Where History Meets Meme Culture and Innovation. Join the revolution of
          digital expression in our decentralized empire.
        </p>
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/create"
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-medium inline-flex items-center transition-transform hover:scale-105 active:scale-95"
          >
            Create Your First Meme
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/explore"
            className="px-6 py-3 rounded-full bg-white/10 text-white font-medium transition-transform hover:scale-105 active:scale-95 hover:bg-white/20"
          >
            Explore Ancient Rome in AR
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FFD700]/60 font-serif italic">
        Veni, Vidi, Memei
      </div>
    </div>
  );
};