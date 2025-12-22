import { TrendingDown, AlertTriangle, Target } from "lucide-react";

export const CoverSlide = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.03)_0%,transparent_50%,hsl(var(--secondary)/0.03)_100%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo placeholder */}
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 mb-8 shadow-card animate-fade-in">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
            FS
          </div>
          <span className="font-display font-semibold text-foreground">FoodSwift</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Solving the{" "}
          <span className="bg-gradient-to-r from-secondary to-destructive bg-clip-text text-transparent">
            Order Drop
          </span>{" "}
          Crisis
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A data-driven investigation into declining order counts and customer NPS
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-destructive" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-destructive mb-1">-12.5%</div>
            <div className="text-sm text-muted-foreground">Orders/Month Drop</div>
            <div className="text-xs text-muted-foreground mt-1">3.2 → 2.8 orders</div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-warning mb-1">-7 pts</div>
            <div className="text-sm text-muted-foreground">NPS Decline</div>
            <div className="text-xs text-muted-foreground mt-1">42 → 35 NPS</div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-display font-bold text-primary mb-1">Goal</div>
            <div className="text-sm text-muted-foreground">Restore Growth</div>
            <div className="text-xs text-muted-foreground mt-1">Increase retention</div>
          </div>
        </div>

        {/* Context */}
        <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto shadow-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-start gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <span className="text-lg">📊</span>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Platform Context</div>
              <div className="text-sm text-muted-foreground">
                50,000 restaurant partners • 25 cities • 2M MAU • ₹450 AOV • ~35,000 daily orders
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-pulse">
        <div className="text-muted-foreground text-sm">Use arrows to navigate</div>
      </div>
    </div>
  );
};
