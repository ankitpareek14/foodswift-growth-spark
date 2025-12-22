import { Rocket, Zap, Bell, Timer, Shield, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Solution {
  id: number;
  priority: "high" | "medium";
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  impact: string;
  effort: string;
  timeline: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    priority: "high",
    title: "Real-Time Menu Sync System",
    description: "Enable restaurants to instantly update item availability with one-tap controls and smart alerts.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "One-tap item availability toggle on partner app",
      "Auto-disable items after X cancellations",
      "Smart stock alerts when items run low",
      "Batch update for busy periods",
    ],
    impact: "Reduce 'Item Unavailable' cancellations by 60%",
    effort: "Medium",
    timeline: "4-6 weeks",
  },
  {
    id: 2,
    priority: "high",
    title: "Dynamic Order Throttling",
    description: "Automatically limit incoming orders when restaurants approach capacity during peak hours.",
    icon: <Timer className="w-6 h-6" />,
    features: [
      "Set max orders per 15-min window",
      "Auto-pause during overwhelm",
      "Show 'High Demand' badge to customers",
      "Estimated wait time display",
    ],
    impact: "Reduce 'High Volume' cancellations by 70%",
    effort: "Medium",
    timeline: "3-4 weeks",
  },
  {
    id: 3,
    priority: "medium",
    title: "Proactive Customer Recovery",
    description: "Automatically compensate and re-engage customers who experience cancellations.",
    icon: <Bell className="w-6 h-6" />,
    features: [
      "Instant apology notification with discount code",
      "Auto-suggest similar restaurants nearby",
      "Priority queue for re-orders",
      "Personalized win-back campaign",
    ],
    impact: "Recover 40% of at-risk churning users",
    effort: "Low",
    timeline: "2-3 weeks",
  },
];

export const SolutionSlide = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Solution Design
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Targeted Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three focused interventions addressing validated root causes with clear rationale
          </p>
        </div>

        {/* Solution Framework */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">Solution Strategy</h3>
              <p className="text-sm text-muted-foreground">Focus on restaurant-side improvements first, then customer recovery</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <div className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm text-foreground">Fix inventory sync issue</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </div>
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <div className="w-8 h-8 rounded-full bg-warning/10 text-warning flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm text-foreground">Implement capacity limits</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </div>
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm text-foreground">Recover affected customers</span>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {solutions.map((solution, idx) => (
            <div
              key={solution.id}
              className={cn(
                "bg-card border rounded-xl overflow-hidden shadow-card animate-fade-in",
                solution.priority === "high" ? "border-primary/30" : "border-border"
              )}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Priority Badge */}
              <div className={cn(
                "px-6 py-3 border-b flex items-center justify-between",
                solution.priority === "high" ? "bg-primary/5 border-primary/20" : "bg-muted/50"
              )}>
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                  solution.priority === "high" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  P{solution.id} - {solution.priority} Priority
                </div>
                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-primary">
                  {solution.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="text-sm font-semibold text-success">{solution.effort}</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="text-xs text-muted-foreground mb-1">Effort</div>
                    <div className="text-sm font-semibold text-foreground">{solution.effort}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                    <div className="text-sm font-semibold text-foreground">{solution.timeline}</div>
                  </div>
                </div>
              </div>

              {/* Impact Banner */}
              <div className="px-6 py-4 bg-success/5 border-t border-success/20">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">{solution.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Persona */}
        <div className="bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">Target User Personas</h3>
              <p className="text-sm text-muted-foreground">Solutions designed for both restaurant partners and end customers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">R</div>
                <div>
                  <div className="font-semibold text-foreground">Restaurant Partner</div>
                  <div className="text-xs text-muted-foreground">Kitchen Manager, Owner</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Needs quick item toggle during rush</li>
                <li>• Wants to avoid customer complaints</li>
                <li>• Limited time to update menu</li>
              </ul>
            </div>
            <div className="bg-muted/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">C</div>
                <div>
                  <div className="font-semibold text-foreground">Customer</div>
                  <div className="text-xs text-muted-foreground">Urban professional, 25-40</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Frustrated by last-minute cancellations</li>
                <li>• Expects reliable delivery experience</li>
                <li>• Open to alternatives if compensated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
