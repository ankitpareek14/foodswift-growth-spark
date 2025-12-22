import { Target, TrendingUp, Shield, AlertTriangle, CheckCircle2, BarChart3, Users, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  name: string;
  current: string;
  target: string;
  type: "primary" | "supporting" | "guardrail";
  icon: React.ReactNode;
  description: string;
}

interface Risk {
  title: string;
  severity: "high" | "medium" | "low";
  description: string;
  mitigation: string;
}

const metrics: Metric[] = [
  {
    name: "Cancellation Rate",
    current: "33%",
    target: "<10%",
    type: "primary",
    icon: <Target className="w-5 h-5" />,
    description: "Restaurant-side cancellations as % of total orders",
  },
  {
    name: "Orders per Month",
    current: "2.8",
    target: "3.5+",
    type: "primary",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Average orders per active customer per month",
  },
  {
    name: "Customer NPS",
    current: "35",
    target: "45+",
    type: "primary",
    icon: <Users className="w-5 h-5" />,
    description: "Net Promoter Score from post-order surveys",
  },
  {
    name: "Menu Sync Rate",
    current: "N/A",
    target: ">95%",
    type: "supporting",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "% of restaurants with real-time menu updates",
  },
  {
    name: "Recovery Conversion",
    current: "N/A",
    target: ">40%",
    type: "supporting",
    icon: <CheckCircle2 className="w-5 h-5" />,
    description: "% of cancelled order users who re-order within 7 days",
  },
  {
    name: "Order Completion Time",
    current: "~45 min",
    target: "<40 min",
    type: "guardrail",
    icon: <Timer className="w-5 h-5" />,
    description: "Ensure throttling doesn't increase delivery time",
  },
  {
    name: "Restaurant Churn",
    current: "2%",
    target: "<3%",
    type: "guardrail",
    icon: <Shield className="w-5 h-5" />,
    description: "Ensure new tools don't burden restaurants",
  },
];

const risks: Risk[] = [
  {
    title: "Restaurant Adoption Resistance",
    severity: "high",
    description: "Restaurants may resist using new menu management tools due to added complexity.",
    mitigation: "Simplified one-tap interface, onboarding training, incentives for early adopters (featured placement).",
  },
  {
    title: "Over-Throttling Impact",
    severity: "medium",
    description: "Aggressive order limits could reduce restaurant revenue and customer satisfaction.",
    mitigation: "Dynamic limits based on historical capacity, easy override option, A/B test thresholds.",
  },
  {
    title: "Coupon Abuse",
    severity: "low",
    description: "Users may exploit recovery coupons by triggering fake cancellations.",
    mitigation: "Cap coupons per user per month, only issue for restaurant-initiated cancellations, track fraud patterns.",
  },
];

export const MetricsSlide = () => {
  return (
    <div className="min-h-screen py-12 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Measurement & Risk
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Metrics & Risks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Defining what success looks like and how we'll manage potential downsides
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mb-10">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Success Metrics Framework
          </h3>
          
          {/* Primary Metrics */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Primary Metrics (North Stars)</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {metrics.filter(m => m.type === "primary").map((metric, idx) => (
                <div 
                  key={metric.name}
                  className="bg-card border-2 border-primary/30 rounded-xl p-5 shadow-card animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {metric.icon}
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Primary
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">{metric.name}</div>
                  <div className="flex items-end gap-3 mb-3">
                    <div>
                      <div className="text-xs text-muted-foreground">Current</div>
                      <div className="text-2xl font-display font-bold text-destructive">{metric.current}</div>
                    </div>
                    <div className="text-muted-foreground">→</div>
                    <div>
                      <div className="text-xs text-muted-foreground">Target</div>
                      <div className="text-2xl font-display font-bold text-success">{metric.target}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting & Guardrail Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-semibold text-success uppercase tracking-wider mb-4">Supporting Metrics</div>
              <div className="space-y-3">
                {metrics.filter(m => m.type === "supporting").map((metric, idx) => (
                  <div 
                    key={metric.name}
                    className="bg-card border border-success/30 rounded-lg p-4 flex items-center gap-4 animate-fade-in"
                    style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-success/10 text-success flex items-center justify-center shrink-0">
                      {metric.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{metric.name}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">{metric.target}</div>
                      <div className="text-xs text-muted-foreground">Target</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-warning uppercase tracking-wider mb-4">Guardrail Metrics</div>
              <div className="space-y-3">
                {metrics.filter(m => m.type === "guardrail").map((metric, idx) => (
                  <div 
                    key={metric.name}
                    className="bg-card border border-warning/30 rounded-lg p-4 flex items-center gap-4 animate-fade-in"
                    style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-warning/10 text-warning flex items-center justify-center shrink-0">
                      {metric.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{metric.name}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-warning">{metric.target}</div>
                      <div className="text-xs text-muted-foreground">Limit</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Risk Matrix */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Risk Management
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {risks.map((risk, idx) => (
              <div 
                key={risk.title}
                className={cn(
                  "bg-card border rounded-xl overflow-hidden",
                  risk.severity === "high" ? "border-destructive/30" : 
                  risk.severity === "medium" ? "border-warning/30" : "border-border"
                )}
              >
                <div className={cn(
                  "px-4 py-3 border-b flex items-center justify-between",
                  risk.severity === "high" ? "bg-destructive/5 border-destructive/20" :
                  risk.severity === "medium" ? "bg-warning/5 border-warning/20" : "bg-muted/30"
                )}>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={cn(
                      "w-4 h-4",
                      risk.severity === "high" ? "text-destructive" :
                      risk.severity === "medium" ? "text-warning" : "text-muted-foreground"
                    )} />
                    <span className="text-sm font-semibold text-foreground">{risk.title}</span>
                  </div>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-medium uppercase",
                    risk.severity === "high" ? "bg-destructive/10 text-destructive" :
                    risk.severity === "medium" ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"
                  )}>
                    {risk.severity}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground mb-4">{risk.description}</div>
                  <div>
                    <div className="text-xs font-semibold text-success uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Mitigation
                    </div>
                    <div className="text-sm text-foreground">{risk.mitigation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-10 bg-gradient-to-r from-primary/10 via-success/5 to-transparent border-l-4 border-primary rounded-r-xl p-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            📊 Expected Outcome
          </h3>
          <p className="text-muted-foreground mb-4">
            By implementing these solutions over 8-10 weeks, we expect:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-success">70%</div>
              <div className="text-xs text-muted-foreground">Reduction in cancellations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-success">+25%</div>
              <div className="text-xs text-muted-foreground">Orders per month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-success">+10 pts</div>
              <div className="text-xs text-muted-foreground">NPS improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-success">₹2.7L</div>
              <div className="text-xs text-muted-foreground">Monthly GMV recovered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
