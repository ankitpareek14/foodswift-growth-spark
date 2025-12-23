import { Smartphone, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CustomerJourneyWireframe } from "./CustomerJourneyWireframe";
import { RestaurantJourneyWireframe } from "./RestaurantJourneyWireframe";

export const FullWireframeSlide = () => {
  const [activeTab, setActiveTab] = useState<"customer" | "partner">("customer");

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Complete User Journey
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            End-to-End Wireframes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete user flows from start to finish for both Customer and Restaurant Partner apps
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border border-border rounded-full p-1 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("customer")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "customer"
                  ? "bg-primary text-primary-foreground shadow-glow-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Smartphone className="w-4 h-4 inline mr-2" />
              Customer Journey
            </button>
            <button
              onClick={() => setActiveTab("partner")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "partner"
                  ? "bg-primary text-primary-foreground shadow-glow-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Monitor className="w-4 h-4 inline mr-2" />
              Partner Dashboard
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === "customer" ? (
            <CustomerJourneyWireframe />
          ) : (
            <RestaurantJourneyWireframe />
          )}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Success State</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Warning/Alert</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Error/Critical</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full border-2 border-primary" />
            <span className="text-muted-foreground">Key Solution Feature</span>
          </div>
        </div>
      </div>
    </div>
  );
};
