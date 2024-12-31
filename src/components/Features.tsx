import { Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized platform.",
    icon: Zap,
  },
  {
    name: "Secure by Design",
    description:
      "Your data is protected with enterprise-grade security measures.",
    icon: Shield,
  },
  {
    name: "Mobile First",
    description:
      "A responsive design that works perfectly on all your devices.",
    icon: Smartphone,
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Cutting-edge Features
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            Discover what makes our platform unique and powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group p-8 rounded-2xl bg-secondary/50 transition-all hover:bg-secondary"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.name}
              </h3>
              <p className="text-primary/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};