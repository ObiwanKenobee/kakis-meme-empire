import { Camera, Scroll, Coins, Crown, Users } from "lucide-react";

const features = [
  {
    name: "Meme Creation Hub",
    description:
      "Create and customize memes with Roman-themed templates and AI-powered suggestions.",
    icon: Camera,
  },
  {
    name: "Interactive History",
    description:
      "Explore Roman history through an interactive timeline filled with humorous memes.",
    icon: Scroll,
  },
  {
    name: "$KEKIUS Tokens",
    description:
      "Earn and spend tokens by creating popular memes and participating in governance.",
    icon: Coins,
  },
  {
    name: "Community Senate",
    description:
      "Join virtual Senate sessions to debate and vote on platform decisions.",
    icon: Crown,
  },
  {
    name: "NFT Marketplace",
    description:
      "Mint and trade your memes as NFTs in our decentralized marketplace.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-24 bg-[#221F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-serif font-bold text-[#FFD700] mb-4">
            Empire Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover the tools and features that make our platform unique and
            powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group p-8 rounded-2xl bg-white/5 transition-all hover:bg-white/10 border border-[#FFD700]/20"
            >
              <div className="h-12 w-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#FFD700]/20">
                <feature.icon className="h-6 w-6 text-[#FFD700]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                {feature.name}
              </h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};