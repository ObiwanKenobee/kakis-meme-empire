import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="animate-fade-down text-sm font-medium text-primary/60 tracking-wider uppercase mb-8">
          Welcome to the future
        </p>
        <h1 className="animate-fade-up text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
          Create something
          <span className="text-primary/60"> beautiful</span>
        </h1>
        <p className="animate-fade-up text-lg text-primary/80 mb-10 max-w-2xl mx-auto">
          Experience the perfect blend of design and functionality. Build
          something extraordinary with our cutting-edge platform.
        </p>
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#features"
            className="group px-6 py-3 rounded-full bg-primary text-white font-medium inline-flex items-center transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full bg-secondary text-primary font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};