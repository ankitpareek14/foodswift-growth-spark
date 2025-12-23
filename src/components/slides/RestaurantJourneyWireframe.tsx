import { 
  Store, Bell, Clock, Package, Check, X, AlertTriangle, 
  TrendingUp, Settings, BarChart3, ChevronRight, ToggleLeft,
  Minus, Plus, Printer, Phone, Users, Calendar, Utensils,
  RefreshCw, Power, Zap, MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TabletFrameProps {
  title: string;
  step: number;
  children: React.ReactNode;
  highlight?: boolean;
}

const TabletFrame = ({ title, step, children, highlight }: TabletFrameProps) => (
  <div className={cn(
    "bg-card border rounded-2xl overflow-hidden shadow-elevated transition-all hover:scale-[1.01]",
    highlight ? "border-primary ring-2 ring-primary/20" : "border-border"
  )}>
    {/* Tablet Header */}
    <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-warning/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-success/50" />
      <div className="ml-auto flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-[8px] font-bold flex items-center justify-center">
          {step}
        </div>
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-4 min-h-[260px]">
      {children}
    </div>
  </div>
);

export const RestaurantJourneyWireframe = () => {
  return (
    <div className="space-y-8">
      {/* Journey Title */}
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Restaurant Partner App - Complete Dashboard Flow
        </h3>
        <p className="text-muted-foreground text-sm">From opening to order management, inventory control & analytics</p>
      </div>

      {/* Daily Operations Flow */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-xs font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-border">Daily Operations Flow</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Screen 1: Dashboard Home */}
          <TabletFrame title="Dashboard Home" step={1}>
            <div className="space-y-3">
              {/* Status Banner */}
              <div className="flex items-center justify-between bg-success/10 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-success" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Spice Garden</div>
                    <div className="text-xs text-success">Online • Accepting Orders</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-success rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-card rounded-full shadow" />
                </div>
              </div>
              
              {/* Today's Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-muted/30 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-foreground">47</div>
                  <div className="text-[10px] text-muted-foreground">Orders</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-success">₹18.5K</div>
                  <div className="text-[10px] text-muted-foreground">Revenue</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-foreground">4.5</div>
                  <div className="text-[10px] text-muted-foreground">Rating</div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg text-xs text-primary font-medium">
                  <Utensils className="w-3 h-3" />
                  Menu
                </button>
                <button className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg text-xs text-foreground">
                  <BarChart3 className="w-3 h-3" />
                  Analytics
                </button>
              </div>
            </div>
          </TabletFrame>

          {/* Screen 2: Live Orders */}
          <TabletFrame title="Live Orders" step={2}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Incoming Orders</span>
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">5 Active</span>
              </div>
              
              {/* Order Cards */}
              <div className="space-y-2">
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-foreground">#1234</span>
                    <span className="text-[10px] text-warning font-medium">NEW</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2">Butter Chicken x1, Naan x2</div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-success text-success-foreground py-1.5 rounded text-[10px] font-medium flex items-center justify-center gap-1">
                      <Check className="w-3 h-3" />
                      Accept
                    </button>
                    <button className="flex-1 border border-border py-1.5 rounded text-[10px]">
                      Decline
                    </button>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-foreground">#1233</span>
                    <span className="text-[10px] text-primary font-medium">PREPARING</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-1">Biryani x2, Raita x2</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-[10px] text-primary">8 min left</span>
                  </div>
                </div>
                
                <div className="bg-success/10 rounded-lg p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">#1232</span>
                    <span className="text-[10px] text-success font-medium">READY</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground">Waiting for pickup</div>
                </div>
              </div>
            </div>
          </TabletFrame>

          {/* Screen 3: Menu Management */}
          <TabletFrame title="Menu Manager" step={3}>
            <div className="space-y-3">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-success/10 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-success">24</div>
                  <div className="text-[10px] text-muted-foreground">Available</div>
                </div>
                <div className="bg-destructive/10 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-destructive">3</div>
                  <div className="text-[10px] text-muted-foreground">Out</div>
                </div>
                <div className="bg-warning/10 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-warning">5</div>
                  <div className="text-[10px] text-muted-foreground">Low</div>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div>
                    <div className="text-xs font-medium text-foreground">Butter Chicken</div>
                    <div className="text-[10px] text-muted-foreground">₹380</div>
                  </div>
                  <div className="w-10 h-5 bg-success rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-card rounded-full shadow" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-destructive/5 rounded-lg border border-destructive/20">
                  <div>
                    <div className="text-xs font-medium text-foreground">Paneer Tikka</div>
                    <div className="text-[10px] text-destructive">Out of stock</div>
                  </div>
                  <div className="w-10 h-5 bg-muted rounded-full relative">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-card rounded-full shadow" />
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                Bulk Update
              </button>
            </div>
          </TabletFrame>

          {/* Screen 4: Capacity Settings */}
          <TabletFrame title="Capacity Control" step={4}>
            <div className="space-y-3">
              {/* Current Load */}
              <div className="bg-success/10 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-success" />
                    <span className="text-xs font-medium text-success">Healthy Load</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">This window</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-foreground">8</span>
                  <span className="text-sm text-muted-foreground mb-0.5">/ 15 orders</span>
                </div>
                <div className="h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="w-1/2 h-full bg-success rounded-full" />
                </div>
              </div>
              
              {/* Throttle Control */}
              <div className="p-2 border border-border rounded-lg">
                <div className="text-[10px] text-muted-foreground mb-2">Max Orders / 15 min</div>
                <div className="flex items-center justify-center gap-3">
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xl font-bold text-foreground">15</span>
                  <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              {/* Toggle */}
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                <span className="text-xs text-foreground">Auto-pause at limit</span>
                <div className="w-10 h-5 bg-success rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-card rounded-full shadow" />
                </div>
              </div>
            </div>
          </TabletFrame>
        </div>
      </div>

      {/* Alert & Recovery Flow */}
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-warning/30 to-transparent" />
          <span className="text-xs font-medium text-warning bg-warning/10 px-3 py-1 rounded-full border border-warning/20">Proactive Alert System</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-warning/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Low Stock Alert */}
          <TabletFrame title="Stock Alert" step={1} highlight>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Stock Alert</div>
                  <div className="text-xs text-muted-foreground">3 items need attention</div>
                </div>
              </div>
              
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-destructive" />
                    <span className="text-xs font-medium text-foreground">Dal Makhani</span>
                  </div>
                  <span className="text-[10px] text-destructive">Critical</span>
                </div>
                <p className="text-[10px] text-muted-foreground mb-2">2 cancellations due to stock out</p>
                <button className="w-full bg-destructive text-destructive-foreground py-1.5 rounded text-[10px] font-medium">
                  Mark Unavailable
                </button>
              </div>
              
              <div className="bg-warning/5 border border-warning/20 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-warning" />
                  <span className="text-xs font-medium text-foreground">Naan</span>
                  <span className="text-[10px] text-warning ml-auto">8 left</span>
                </div>
              </div>
            </div>
          </TabletFrame>

          {/* Capacity Warning */}
          <TabletFrame title="Capacity Warning" step={2} highlight>
            <div className="space-y-3">
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span className="text-sm font-semibold text-warning">Approaching Limit</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  13/15 orders in current window. Consider pausing.
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-[87%] h-full bg-warning rounded-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-warning text-warning-foreground py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                  <Power className="w-3 h-3" />
                  Pause 30m
                </button>
                <button className="border border-border py-2 rounded-lg text-xs text-foreground">
                  Dismiss
                </button>
              </div>
              
              <div className="p-2 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Avg prep time increased to 28 min</span>
                </div>
              </div>
            </div>
          </TabletFrame>

          {/* Order Decline Flow */}
          <TabletFrame title="Decline Order" step={3} highlight>
            <div className="space-y-3">
              <div className="text-xs font-medium text-foreground">Why are you declining?</div>
              
              <div className="space-y-2">
                {[
                  { label: "Item unavailable", icon: Package },
                  { label: "Kitchen overloaded", icon: Clock },
                  { label: "Closing soon", icon: Power },
                ].map((reason, i) => (
                  <button key={i} className={cn(
                    "w-full flex items-center gap-2 p-2.5 rounded-lg text-xs text-left",
                    i === 0 ? "bg-primary/10 border border-primary text-foreground" : "bg-muted/30 text-muted-foreground"
                  )}>
                    <reason.icon className="w-4 h-4" />
                    {reason.label}
                    {i === 0 && <Check className="w-3 h-3 ml-auto text-primary" />}
                  </button>
                ))}
              </div>
              
              <div className="p-2 bg-muted/30 rounded-lg">
                <div className="text-[10px] text-muted-foreground mb-1">Unavailable items:</div>
                <div className="flex gap-1">
                  <span className="px-2 py-0.5 bg-destructive/10 text-destructive text-[10px] rounded">Paneer Tikka</span>
                </div>
              </div>
              
              <button className="w-full bg-destructive text-destructive-foreground py-2 rounded-lg text-xs font-medium">
                Confirm Decline
              </button>
            </div>
          </TabletFrame>

          {/* Analytics */}
          <TabletFrame title="Insights" step={4} highlight>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">This Week</span>
                <span className="text-[10px] text-muted-foreground">vs last week</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-success/10 rounded-lg p-2">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-[10px] text-success">-45%</span>
                  </div>
                  <div className="text-xs font-medium text-foreground">Cancellations</div>
                  <div className="text-lg font-bold text-foreground">12</div>
                </div>
                <div className="bg-success/10 rounded-lg p-2">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-3 h-3 text-success" />
                    <span className="text-[10px] text-success">+8%</span>
                  </div>
                  <div className="text-xs font-medium text-foreground">Revenue</div>
                  <div className="text-lg font-bold text-foreground">₹85K</div>
                </div>
              </div>
              
              <div className="p-2 bg-muted/30 rounded-lg">
                <div className="text-[10px] font-medium text-foreground mb-2">Top Cancellation Reasons</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-destructive/50 rounded-full" />
                    <span className="text-[10px] text-muted-foreground">Item unavailable (67%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1.5 bg-warning/50 rounded-full" />
                    <span className="text-[10px] text-muted-foreground">Too busy (21%)</span>
                  </div>
                </div>
              </div>
            </div>
          </TabletFrame>
        </div>
      </div>

      {/* Full Day Timeline */}
      <div className="mt-8 bg-card border border-border rounded-xl p-4">
        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          Restaurant Partner Daily Timeline
        </h4>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { time: "9 AM", action: "Open Store", icon: Power, color: "success" },
            { time: "10 AM", action: "Update Menu", icon: Utensils, color: "primary" },
            { time: "12 PM", action: "Peak Hours", icon: Zap, color: "warning" },
            { time: "1 PM", action: "Throttle On", icon: Settings, color: "warning" },
            { time: "2 PM", action: "Stock Alert", icon: Bell, color: "destructive" },
            { time: "3 PM", action: "Restock", icon: RefreshCw, color: "success" },
            { time: "7 PM", action: "Peak Hours", icon: Zap, color: "warning" },
            { time: "10 PM", action: "Close Store", icon: Power, color: "muted" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-1",
                item.color === "success" && "bg-success/20",
                item.color === "primary" && "bg-primary/20",
                item.color === "warning" && "bg-warning/20",
                item.color === "destructive" && "bg-destructive/20",
                item.color === "muted" && "bg-muted"
              )}>
                <item.icon className={cn(
                  "w-4 h-4",
                  item.color === "success" && "text-success",
                  item.color === "primary" && "text-primary",
                  item.color === "warning" && "text-warning",
                  item.color === "destructive" && "text-destructive",
                  item.color === "muted" && "text-muted-foreground"
                )} />
              </div>
              <div className="text-[10px] font-medium text-foreground">{item.time}</div>
              <div className="text-[9px] text-muted-foreground whitespace-nowrap">{item.action}</div>
              {i < 7 && <ChevronRight className="w-3 h-3 text-muted-foreground/30 absolute -right-1" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
