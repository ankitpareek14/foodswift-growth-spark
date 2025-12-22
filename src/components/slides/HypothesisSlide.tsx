import { CheckCircle2, XCircle, AlertTriangle, Lightbulb, Database, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Hypothesis {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "validated" | "partially" | "invalidated";
  evidence: string[];
  dataPoints: { label: string; value: string; trend?: "up" | "down" | "neutral" }[];
}

const hypotheses: Hypothesis[] = [
  {
    id: 1,
    title: "Inventory Management Failure",
    description: "Restaurants are unable to update menu availability in real-time, leading to orders for unavailable items.",
    icon: <Database className="w-5 h-5" />,
    status: "validated",
    evidence: [
      '"Item Unavailable" is the #1 cancellation reason (41.5%)',
      "Peak cancellations occur during lunch (12-1 PM) and dinner (7-9 PM) rush",
      "Same restaurants repeatedly cancel for inventory reasons",
    ],
    dataPoints: [
      { label: "Item Unavailable", value: "41.5%", trend: "up" },
      { label: "Repeat Offenders", value: "5 restaurants", trend: "neutral" },
      { label: "Peak Hour Impact", value: "75%", trend: "up" },
    ],
  },
  {
    id: 2,
    title: "Capacity Overload During Peak Hours",
    description: "Restaurants accept more orders than they can handle, leading to cancellations due to high volume.",
    icon: <Clock className="w-5 h-5" />,
    status: "validated",
    evidence: [
      '"High Order Volume" accounts for 30.2% of cancellations',
      "Cancellations spike during 7-9 PM dinner rush (41.5%)",
      "No order throttling mechanism exists for overwhelmed restaurants",
    ],
    dataPoints: [
      { label: "Volume Cancellations", value: "30.2%", trend: "up" },
      { label: "Peak Hour %", value: "41.5%", trend: "up" },
      { label: "Affected Users", value: "16 orders", trend: "neutral" },
    ],
  },
  {
    id: 3,
    title: "Customer Churn from Bad Experience",
    description: "Users who experience cancellations are not returning, leading to declining order frequency.",
    icon: <Users className="w-5 h-5" />,
    status: "partially",
    evidence: [
      "42 unique users affected by cancellations in Q1",
      "8 users experienced multiple cancellations (repeat bad experience)",
      "Estimated 28 users at high churn risk based on no repeat orders post-cancellation",
    ],
    dataPoints: [
      { label: "Affected Users", value: "42", trend: "neutral" },
      { label: "Multi-Cancel Users", value: "8", trend: "up" },
      { label: "Churn Risk", value: "28 users", trend: "up" },
    ],
  },
];

const getStatusConfig = (status: Hypothesis["status"]) => {
  switch (status) {
    case "validated":
      return {
        icon: <CheckCircle2 className="w-5 h-5" />,
        label: "Validated",
        bgColor: "bg-success/10",
        textColor: "text-success",
        borderColor: "border-success/30",
      };
    case "partially":
      return {
        icon: <AlertTriangle className="w-5 h-5" />,
        label: "Partially Validated",
        bgColor: "bg-warning/10",
        textColor: "text-warning",
        borderColor: "border-warning/30",
      };
    case "invalidated":
      return {
        icon: <XCircle className="w-5 h-5" />,
        label: "Invalidated",
        bgColor: "bg-destructive/10",
        textColor: "text-destructive",
        borderColor: "border-destructive/30",
      };
  }
};

export const HypothesisSlide = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            Hypothesis Testing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Validate & Disprove
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three hypotheses tested against order data to identify actionable root causes
          </p>
        </div>

        {/* Hypotheses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {hypotheses.map((hypothesis, idx) => {
            const statusConfig = getStatusConfig(hypothesis.status);
            return (
              <div
                key={hypothesis.id}
                className={cn(
                  "bg-card border rounded-xl overflow-hidden shadow-card animate-fade-in",
                  statusConfig.borderColor
                )}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Header */}
                <div className={cn("px-6 py-4 border-b", statusConfig.bgColor, statusConfig.borderColor)}>
                  <div className="flex items-center justify-between mb-3">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", statusConfig.bgColor, statusConfig.textColor)}>
                      {hypothesis.icon}
                    </div>
                    <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium", statusConfig.bgColor, statusConfig.textColor)}>
                      {statusConfig.icon}
                      {statusConfig.label}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    H{hypothesis.id}: {hypothesis.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    {hypothesis.description}
                  </p>

                  {/* Data Points */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {hypothesis.dataPoints.map((point) => (
                      <div key={point.label} className="text-center">
                        <div className={cn(
                          "text-xl font-display font-bold",
                          point.trend === "up" ? "text-destructive" : point.trend === "down" ? "text-success" : "text-foreground"
                        )}>
                          {point.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{point.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Evidence */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Supporting Evidence
                    </div>
                    <ul className="space-y-2">
                      {hypothesis.evidence.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className={cn("w-4 h-4 mt-0.5 shrink-0", statusConfig.textColor)} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-r-xl p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            📋 Hypothesis Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Primary Root Cause:</strong>
                <span className="text-muted-foreground"> Poor inventory management causing 41.5% of cancellations from unavailable items.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Secondary Cause:</strong>
                <span className="text-muted-foreground"> No capacity limits during peak hours leading to 30.2% volume-based cancellations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
