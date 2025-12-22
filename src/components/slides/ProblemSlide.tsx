import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { monthlyMetrics, cancellationReasons } from "@/data/orderData";
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const orderTrendData = [
  { month: "Jan", orders: 130, successful: 121, cancelled: 9 },
  { month: "Feb", orders: 125, successful: 114, cancelled: 11 },
  { month: "Mar", orders: 100, successful: 67, cancelled: 33 },
];

const cancellationTrendData = [
  { month: "Jan", rate: 6.9 },
  { month: "Feb", rate: 8.8 },
  { month: "Mar", rate: 33.0 },
];

const COLORS = ["hsl(0, 72%, 51%)", "hsl(28, 87%, 55%)", "hsl(38, 92%, 50%)", "hsl(220, 15%, 60%)"];

export const ProblemSlide = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertCircle className="w-4 h-4" />
            Data Analysis
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Root Cause Discovery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analyzing order data reveals a critical pattern: Restaurant cancellations spiked dramatically in March
          </p>
        </div>

        {/* Key Finding Banner */}
        <div className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-transparent border-l-4 border-destructive rounded-r-xl p-6 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
              <TrendingDown className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                🔍 KEY FINDING: Cancellation Rate Jumped from 7% to 33%
              </h3>
              <p className="text-muted-foreground">
                Restaurant-side cancellations increased by <strong className="text-destructive">378%</strong> from January to March, directly causing the order count decline and NPS drop.
              </p>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Order Trend Chart */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Monthly Order Breakdown
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={orderTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="successful" fill="hsl(152, 60%, 40%)" name="Successful" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cancelled" fill="hsl(0, 72%, 51%)" name="Cancelled" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cancellation Rate Trend */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Cancellation Rate Trend
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cancellationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" unit="%" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                    formatter={(value) => [`${value}%`, "Cancellation Rate"]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="hsl(0, 72%, 51%)" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(0, 72%, 51%)", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cancellation Reasons Pie */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Cancellation Reasons (Q1)
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cancellationReasons}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="count"
                    nameKey="reason"
                  >
                    {cancellationReasons.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px"
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {cancellationReasons.map((item, idx) => (
                <div key={item.reason} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                  <span className="text-muted-foreground truncate">{item.reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Metrics Table */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-card animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Monthly Performance Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Month</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Total Orders</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Successful</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Cancelled</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Cancel Rate</th>
                    <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyMetrics.map((metric, idx) => (
                    <tr key={metric.month} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{metric.month}</td>
                      <td className="text-right py-3 px-4 text-foreground">{metric.totalOrders}</td>
                      <td className="text-right py-3 px-4 text-success">{metric.successOrders}</td>
                      <td className="text-right py-3 px-4 text-destructive">{metric.cancelledOrders}</td>
                      <td className="text-right py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          metric.cancellationRate > 20 
                            ? "bg-destructive/10 text-destructive" 
                            : metric.cancellationRate > 10 
                              ? "bg-warning/10 text-warning"
                              : "bg-success/10 text-success"
                        }`}>
                          {metric.cancellationRate}%
                        </span>
                      </td>
                      <td className="text-right py-3 px-4">
                        {idx > 0 && (
                          monthlyMetrics[idx].cancellationRate > monthlyMetrics[idx - 1].cancellationRate ? (
                            <TrendingUp className="w-4 h-4 text-destructive inline" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-success inline" />
                          )
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
