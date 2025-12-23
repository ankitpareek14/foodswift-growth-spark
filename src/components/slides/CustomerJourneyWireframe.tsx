import { 
  Home, Search, MapPin, Star, Clock, ChevronRight, Plus, Minus, 
  ShoppingCart, CreditCard, Check, Truck, Package, X, Gift, 
  MessageCircle, Bell, Heart, User, RefreshCw, AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  title: string;
  step: number;
  children: React.ReactNode;
  highlight?: boolean;
}

const PhoneFrame = ({ title, step, children, highlight }: PhoneFrameProps) => (
  <div className={cn(
    "bg-card border rounded-3xl overflow-hidden shadow-elevated transition-all hover:scale-[1.02]",
    highlight ? "border-primary ring-2 ring-primary/20" : "border-border"
  )}>
    {/* Phone Status Bar */}
    <div className="bg-foreground px-4 py-1.5 flex items-center justify-between">
      <div className="text-primary-foreground text-xs font-medium">9:41</div>
      <div className="flex gap-1 items-center">
        <div className="w-4 h-2 rounded-sm bg-primary-foreground/40" />
        <div className="w-4 h-2 rounded-sm bg-primary-foreground/40" />
        <div className="w-6 h-3 rounded-sm bg-primary-foreground/60 relative">
          <div className="absolute right-0.5 top-0.5 w-1 h-2 rounded-sm bg-success" />
        </div>
      </div>
    </div>
    
    {/* Step Indicator */}
    <div className="bg-primary/10 px-3 py-1.5 flex items-center gap-2 border-b border-border">
      <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
        {step}
      </div>
      <span className="text-xs font-medium text-foreground">{title}</span>
    </div>
    
    {/* Content */}
    <div className="p-3 min-h-[280px] bg-background/50">
      {children}
    </div>
  </div>
);

export const CustomerJourneyWireframe = () => {
  return (
    <div className="space-y-8">
      {/* Journey Title */}
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Customer App - Complete User Journey
        </h3>
        <p className="text-muted-foreground text-sm">From app launch to order completion & recovery flows</p>
      </div>

      {/* Main Happy Path */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-xs font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-border">Happy Path Flow</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Screen 1: Home/Browse */}
          <PhoneFrame title="Home Screen" step={1}>
            <div className="space-y-3">
              {/* Location Bar */}
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-2 py-1.5">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-xs text-foreground truncate">HSR Layout, Bangalore</span>
                <ChevronRight className="w-3 h-3 ml-auto text-muted-foreground" />
              </div>
              
              {/* Search */}
              <div className="flex items-center gap-2 bg-muted/30 rounded-lg px-2 py-2 border border-border">
                <Search className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Search for restaurant or dish</span>
              </div>
              
              {/* Categories */}
              <div className="flex gap-2 overflow-hidden">
                {["🍕", "🍔", "🍜", "🥗"].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-sm shrink-0">
                    {emoji}
                  </div>
                ))}
              </div>
              
              {/* Restaurant Card */}
              <div className="bg-muted/30 rounded-lg p-2">
                <div className="h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded mb-2" />
                <div className="text-xs font-medium text-foreground">Spice Garden</div>
                <div className="text-[10px] text-muted-foreground">4.2★ • 25 min • ₹200 for two</div>
              </div>
            </div>
            
            {/* Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 flex justify-around">
              <Home className="w-4 h-4 text-primary" />
              <Search className="w-4 h-4 text-muted-foreground" />
              <ShoppingCart className="w-4 h-4 text-muted-foreground" />
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
          </PhoneFrame>

          {/* Screen 2: Restaurant Menu */}
          <PhoneFrame title="Restaurant Menu" step={2}>
            <div className="space-y-2">
              {/* Restaurant Header */}
              <div className="h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg relative">
                <div className="absolute -bottom-3 left-2 w-8 h-8 bg-card rounded-lg border border-border flex items-center justify-center text-sm">
                  🍛
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-sm font-semibold text-foreground">Spice Garden</div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="text-success">4.2★</span>
                  <span>•</span>
                  <span>25 min</span>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div>
                    <div className="text-xs font-medium text-foreground">Butter Chicken</div>
                    <div className="text-[10px] text-muted-foreground">₹380</div>
                  </div>
                  <button className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <Plus className="w-3 h-3 text-primary-foreground" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg opacity-50">
                  <div>
                    <div className="text-xs font-medium text-foreground">Paneer Tikka</div>
                    <div className="text-[10px] text-destructive">Unavailable</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">Out</div>
                </div>
                <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg border border-success/20">
                  <div>
                    <div className="text-xs font-medium text-foreground">Biryani</div>
                    <div className="text-[10px] text-muted-foreground">₹320</div>
                  </div>
                  <div className="flex items-center gap-1 bg-primary rounded px-1">
                    <Minus className="w-3 h-3 text-primary-foreground" />
                    <span className="text-xs text-primary-foreground font-medium">1</span>
                    <Plus className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>

          {/* Screen 3: Cart */}
          <PhoneFrame title="Cart Review" step={3}>
            <div className="space-y-3">
              {/* Cart Items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">Butter Chicken x1</div>
                    <div className="text-[10px] text-muted-foreground">₹380</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Minus className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs">1</span>
                    <Plus className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">Biryani x1</div>
                    <div className="text-[10px] text-muted-foreground">₹320</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Minus className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs">1</span>
                    <Plus className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Add Note */}
              <div className="flex items-center gap-2 p-2 border border-dashed border-border rounded-lg">
                <MessageCircle className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Add cooking instructions</span>
              </div>
              
              {/* Bill Summary */}
              <div className="bg-muted/30 rounded-lg p-2 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-muted-foreground">Item Total</span>
                  <span className="text-foreground">₹700</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-foreground">₹30</span>
                </div>
                <div className="flex justify-between text-xs font-medium border-t border-border pt-1">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹730</span>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                Proceed to Checkout
              </button>
            </div>
          </PhoneFrame>

          {/* Screen 4: Checkout */}
          <PhoneFrame title="Checkout" step={4}>
            <div className="space-y-3">
              {/* Delivery Address */}
              <div className="p-2 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-medium text-foreground">Deliver to</span>
                  <span className="text-[10px] text-primary">Change</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <div>
                    <div className="text-xs text-foreground">Home</div>
                    <div className="text-[10px] text-muted-foreground truncate">HSR Layout, 5th Sector</div>
                  </div>
                </div>
              </div>
              
              {/* Delivery Time */}
              <div className="p-2 bg-muted/30 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-foreground">Standard Delivery</span>
                </div>
                <span className="text-xs text-muted-foreground">25-30 min</span>
              </div>
              
              {/* Payment */}
              <div className="p-2 bg-muted/30 rounded-lg">
                <div className="text-[10px] font-medium text-foreground mb-2">Payment Method</div>
                <div className="flex items-center gap-2 p-1.5 bg-card rounded border border-primary">
                  <CreditCard className="w-3 h-3 text-primary" />
                  <span className="text-xs text-foreground">•••• 4242</span>
                  <Check className="w-3 h-3 text-primary ml-auto" />
                </div>
              </div>
              
              {/* Total */}
              <div className="bg-primary/10 rounded-lg p-2 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Total</span>
                <span className="text-sm font-bold text-primary">₹730</span>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                <CreditCard className="w-3 h-3" />
                Place Order
              </button>
            </div>
          </PhoneFrame>

          {/* Screen 5: Order Tracking */}
          <PhoneFrame title="Live Tracking" step={5}>
            <div className="space-y-3">
              {/* Order Status */}
              <div className="text-center">
                <div className="w-10 h-10 mx-auto bg-success/20 rounded-full flex items-center justify-center mb-2">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="text-sm font-semibold text-foreground">Order Confirmed!</div>
                <div className="text-[10px] text-muted-foreground">Arriving in 25-30 mins</div>
              </div>
              
              {/* Progress Steps */}
              <div className="space-y-2 pl-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-[10px] text-success">Order Placed</span>
                </div>
                <div className="ml-0.5 h-4 w-0.5 bg-success" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-[10px] text-success">Restaurant Accepted</span>
                </div>
                <div className="ml-0.5 h-4 w-0.5 bg-primary animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] text-primary font-medium">Preparing...</span>
                </div>
                <div className="ml-0.5 h-4 w-0.5 bg-muted" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted" />
                  <span className="text-[10px] text-muted-foreground">Out for Delivery</span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-16 bg-muted/30 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </PhoneFrame>

          {/* Screen 6: Delivered */}
          <PhoneFrame title="Order Delivered" step={6}>
            <div className="space-y-3 text-center">
              <div className="w-12 h-12 mx-auto bg-success/20 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Delivered!</div>
                <div className="text-[10px] text-muted-foreground">Enjoy your meal 🎉</div>
              </div>
              
              {/* Rating */}
              <div className="bg-muted/30 rounded-lg p-3">
                <div className="text-xs text-foreground mb-2">Rate your experience</div>
                <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={cn("w-5 h-5", i <= 4 ? "text-warning fill-warning" : "text-muted")} />
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="space-y-2">
                <button className="w-full bg-primary/10 text-primary py-2 rounded-lg text-xs font-medium">
                  Reorder
                </button>
                <button className="w-full border border-border py-2 rounded-lg text-xs text-foreground">
                  View Receipt
                </button>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>

      {/* Recovery Flow */}
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
          <span className="text-xs font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full border border-destructive/20">Recovery Flow (When Things Go Wrong)</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* High Demand Warning */}
          <PhoneFrame title="High Demand Alert" step={1} highlight>
            <div className="space-y-3">
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-2">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span className="text-xs font-medium text-foreground">High Demand</span>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  This restaurant is very busy. Orders may take 15-20 min longer.
                </p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-2">
                <div className="text-xs font-medium text-foreground">Spice Garden</div>
                <div className="text-[10px] text-warning">~45-50 min delivery</div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                Order Anyway
              </button>
              <button className="w-full border border-border py-2 rounded-lg text-xs text-foreground flex items-center justify-center gap-1">
                <RefreshCw className="w-3 h-3" />
                Show Alternatives
              </button>
            </div>
          </PhoneFrame>

          {/* Order Cancelled */}
          <PhoneFrame title="Order Cancelled" step={2} highlight>
            <div className="space-y-3 text-center">
              <div className="w-12 h-12 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Order Cancelled</div>
                <div className="text-[10px] text-muted-foreground">Item unavailable at restaurant</div>
              </div>
              
              <div className="bg-success/10 border border-success/20 rounded-lg p-2 text-left">
                <div className="flex items-center gap-1 mb-1">
                  <Gift className="w-3 h-3 text-success" />
                  <span className="text-[10px] font-medium text-success">Apology Gift</span>
                </div>
                <div className="text-lg font-bold text-success">₹50 OFF</div>
                <div className="text-[10px] text-muted-foreground">on next order</div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-medium">
                Use Coupon Now
              </button>
            </div>
          </PhoneFrame>

          {/* Similar Restaurants */}
          <PhoneFrame title="Alternatives" step={3} highlight>
            <div className="space-y-2">
              <div className="text-xs font-medium text-foreground mb-2">Similar Restaurants Nearby</div>
              
              {[
                { name: "Curry House", time: "20 min", rating: "4.5" },
                { name: "Taj Kitchen", time: "25 min", rating: "4.3" },
                { name: "Biryani Point", time: "15 min", rating: "4.4" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-xs">
                      🍛
                    </div>
                    <div>
                      <div className="text-xs font-medium text-foreground">{r.name}</div>
                      <div className="text-[10px] text-muted-foreground">{r.rating}★ • {r.time}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
              
              <div className="text-center pt-2">
                <span className="text-[10px] text-primary">Your ₹50 coupon applies!</span>
              </div>
            </div>
          </PhoneFrame>

          {/* Reorder Success */}
          <PhoneFrame title="Recovery Complete" step={4} highlight>
            <div className="space-y-3 text-center">
              <div className="w-12 h-12 mx-auto bg-success/20 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">New Order Placed!</div>
                <div className="text-[10px] text-muted-foreground">Curry House accepted</div>
              </div>
              
              <div className="bg-success/10 rounded-lg p-2">
                <div className="text-[10px] text-muted-foreground">Discount Applied</div>
                <div className="text-sm font-bold text-success">-₹50</div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-muted-foreground">Arriving in</span>
                  <span className="text-foreground font-medium">20-25 min</span>
                </div>
              </div>
              
              <button className="w-full bg-muted text-foreground py-2 rounded-lg text-xs font-medium">
                Track Order
              </button>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
};
