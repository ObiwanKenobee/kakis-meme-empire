import { useState, useEffect } from "react";
import { Menu, X, Coins, Crown, Scroll, Camera, Users, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Create Memes", href: "/create", icon: Camera },
    { name: "Explore History", href: "/history", icon: Scroll },
    { name: "Governance Hub", href: "/governance", icon: Crown },
    { name: "Marketplace", href: "/marketplace", icon: Coins },
    { name: "Community", href: "/community", icon: Users },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-[#FFD700]">
              KMN
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-white/80 hover:text-[#FFD700] transition-colors group"
              >
                <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white/80 hover:text-[#FFD700]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-white/80 hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};