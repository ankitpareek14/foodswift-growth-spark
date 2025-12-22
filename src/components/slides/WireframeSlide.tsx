import { Smartphone, Monitor, Bell, ToggleLeft, Clock, Gift, ChevronRight, Check, X, AlertTriangle, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const WireframeSlide = () => {
  const [activeTab, setActiveTab] = useState<"partner" | "customer">("partner");

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="w-4 h-4" />
            Wireframes
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solution Wireframes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive mockups for Restaurant Partner App and Customer App features
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border border-border rounded-full p-1 inline-flex gap-1">
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
              Partner App
            </button>
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
              Customer App
            </button>
          </div>
        </div>

        {/* Wireframes */}
        {activeTab === "partner" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Screen 1: Menu Management Dashboard */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-warning/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <span className="ml-auto text-xs text-muted-foreground">Menu Manager</span>
              </div>
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-foreground">Today's Menu Status</div>
                  <div className="text-xs text-muted-foreground">Live</div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-success/10 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-success">24</div>
                    <div className="text-xs text-muted-foreground">Available</div>
                  </div>
                  <div className="bg-destructive/10 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-destructive">3</div>
                    <div className="text-xs text-muted-foreground">Out</div>
                  </div>
                  <div className="bg-warning/10 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-warning">5</div>
                    <div className="text-xs text-muted-foreground">Low Stock</div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-foreground">Butter Chicken</div>
                      <div className="text-xs text-muted-foreground">₹380 • Main Course</div>
                    </div>
                    <div className="w-12 h-6 bg-success rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                    <div>
                      <div className="text-sm font-medium text-foreground">Paneer Tikka</div>
                      <div className="text-xs text-destructive">Out of stock</div>
                    </div>
                    <div className="w-12 h-6 bg-muted rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-warning/5 rounded-lg border border-warning/20">
                    <div>
                      <div className="text-sm font-medium text-foreground">Biryani</div>
                      <div className="text-xs text-warning">Low stock (5 left)</div>
                    </div>
                    <div className="w-12 h-6 bg-success rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium">
                    Bulk Update Items
                  </button>
                </div>
              </div>
            </div>

            {/* Screen 2: Order Throttling Settings */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-warning/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <span className="ml-auto text-xs text-muted-foreground">Capacity Settings</span>
              </div>
              <div className="p-4">
                {/* Current Status */}
                <div className="bg-success/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium text-success">Currently Accepting</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">8/15 orders</div>
                  <div className="text-xs text-muted-foreground">this 15-min window</div>
                </div>

                {/* Throttle Settings */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Max Orders per 15 mins
                    </label>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-bold text-foreground">15</span>
                      </div>
                      <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-foreground">Auto-pause at capacity</span>
                      <div className="w-12 h-6 bg-success rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Show wait times</span>
                      <div className="w-12 h-6 bg-success rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Peak Hours */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Peak Hours (Auto-limit)</div>
                  <div className="flex gap-2 flex-wrap">
                    {["12-1 PM", "1-2 PM", "7-8 PM", "8-9 PM"].map((time) => (
                      <span key={time} className="px-3 py-1 bg-warning/10 text-warning text-xs rounded-full">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Screen 3: Alert Notification */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-warning/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <span className="ml-auto text-xs text-muted-foreground">Smart Alerts</span>
              </div>
              <div className="p-4">
                {/* Alert Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Stock Alerts</div>
                    <div className="text-xs text-muted-foreground">3 items need attention</div>
                  </div>
                </div>

                {/* Alert Items */}
                <div className="space-y-3">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium text-foreground">Dal Makhani</span>
                      </div>
                      <span className="text-xs text-destructive">Critical</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">2 cancellations today due to stock out</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-destructive text-destructive-foreground py-1.5 rounded text-xs font-medium">
                        Mark Unavailable
                      </button>
                      <button className="flex-1 border border-border py-1.5 rounded text-xs">
                        Dismiss
                      </button>
                    </div>
                  </div>

                  <div className="bg-warning/5 border border-warning/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-warning" />
                        <span className="text-sm font-medium text-foreground">Naan</span>
                      </div>
                      <span className="text-xs text-warning">Low Stock</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Only 8 portions remaining</p>
                  </div>
                </div>

                {/* Analytics Link */}
                <button className="w-full mt-4 flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="text-sm text-foreground">View Cancellation Report</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Customer Screen 1: High Demand Badge */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-foreground px-4 py-2 flex items-center justify-between">
                <div className="text-primary-foreground text-xs">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                </div>
              </div>
              <div className="p-4">
                {/* Restaurant Card */}
                <div className="bg-muted/30 rounded-xl overflow-hidden mb-4">
                  <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20 relative">
                    <div className="absolute top-2 left-2 bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      High Demand
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold text-foreground">Spice Garden</div>
                    <div className="text-xs text-muted-foreground">North Indian • 2.3 km</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded">4.2 ★</span>
                      <span className="text-xs text-muted-foreground">~35-40 min</span>
                    </div>
                  </div>
                </div>

                {/* Wait Time Banner */}
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium text-foreground">Expected Wait</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This restaurant is busy right now. Orders may take 10-15 min longer than usual.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium">
                    Order Anyway
                  </button>
                  <button className="w-full border border-border py-2.5 rounded-lg text-sm text-foreground">
                    Show Similar Restaurants
                  </button>
                </div>
              </div>
            </div>

            {/* Customer Screen 2: Cancellation Apology */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-foreground px-4 py-2 flex items-center justify-between">
                <div className="text-primary-foreground text-xs">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                </div>
              </div>
              <div className="p-4 text-center">
                {/* Sad Icon */}
                <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <X className="w-8 h-8 text-destructive" />
                </div>

                <h3 className="font-semibold text-foreground mb-2">Order Cancelled</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're sorry! Spice Garden had to cancel your order due to an item being unavailable.
                </p>

                {/* Compensation Offer */}
                <div className="bg-success/10 border border-success/20 rounded-xl p-4 mb-4 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-success" />
                    <span className="font-medium text-foreground">Our Apology Gift</span>
                  </div>
                  <div className="text-2xl font-bold text-success mb-1">₹50 OFF</div>
                  <p className="text-xs text-muted-foreground">on your next order • Valid 7 days</p>
                  <div className="mt-3 bg-card rounded-lg p-2 flex items-center justify-between">
                    <code className="text-sm font-mono text-foreground">SORRY50</code>
                    <button className="text-xs text-primary font-medium">Copy</button>
                  </div>
                </div>

                {/* Quick Reorder */}
                <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium mb-2">
                  Reorder from Similar Restaurant
                </button>
                <button className="w-full text-sm text-muted-foreground">
                  View Refund Status
                </button>
              </div>
            </div>

            {/* Customer Screen 3: Alternative Suggestions */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elevated">
              <div className="bg-foreground px-4 py-2 flex items-center justify-between">
                <div className="text-primary-foreground text-xs">9:41</div>
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                  <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Similar Restaurants</h3>
                <p className="text-xs text-muted-foreground mb-4">Based on your cancelled order</p>

                {/* Restaurant Options */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Punjab Grill</span>
                        <span className="text-xs bg-success/10 text-success px-1.5 py-0.5 rounded">4.4 ★</span>
                      </div>
                      <div className="text-xs text-muted-foreground">1.8 km • 25-30 min</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border-2 border-primary">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-warning/20" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Saffron Kitchen</span>
                        <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">Best Match</span>
                      </div>
                      <div className="text-xs text-muted-foreground">1.2 km • 20-25 min</div>
                      <div className="text-xs text-success">Has all your items!</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success/20 to-primary/20" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">Delhi Darbar</span>
                        <span className="text-xs bg-success/10 text-success px-1.5 py-0.5 rounded">4.3 ★</span>
                      </div>
                      <div className="text-xs text-muted-foreground">2.5 km • 30-35 min</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Apply Coupon Reminder */}
                <div className="mt-4 p-3 bg-success/5 border border-success/20 rounded-lg flex items-center gap-2">
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-xs text-foreground">₹50 coupon auto-applied on next order</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rationale */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Design Rationale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">1</div>
              <div>
                <div className="text-sm font-medium text-foreground mb-1">One-Tap Actions</div>
                <div className="text-xs text-muted-foreground">Restaurant staff can update availability instantly during rush without navigating complex menus.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-warning/10 text-warning flex items-center justify-center shrink-0">2</div>
              <div>
                <div className="text-sm font-medium text-foreground mb-1">Proactive Alerts</div>
                <div className="text-xs text-muted-foreground">Smart notifications prevent cancellations before they happen by flagging low-stock items.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center shrink-0">3</div>
              <div>
                <div className="text-sm font-medium text-foreground mb-1">Instant Recovery</div>
                <div className="text-xs text-muted-foreground">Automatic compensation and smart suggestions reduce frustration and encourage re-orders.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
