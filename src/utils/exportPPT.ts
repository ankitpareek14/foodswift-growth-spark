import pptxgen from "pptxgenjs";

export const exportToPPT = async () => {
  const pptx = new pptxgen();
  
  pptx.author = "FoodSwift";
  pptx.title = "FoodSwift Order Drop Crisis - Case Study";
  pptx.subject = "Product Case Study";

  // Slide 1: Cover
  const slide1 = pptx.addSlide();
  slide1.addText("FoodSwift\nOrder Drop Crisis", {
    x: 0.5, y: 1.5, w: 9, h: 2,
    fontSize: 44, bold: true, color: "5B21B6",
    align: "center", valign: "middle"
  });
  slide1.addText("A comprehensive product analysis uncovering the root causes behind a 15% decline in completed orders", {
    x: 0.5, y: 3.5, w: 9, h: 1,
    fontSize: 16, color: "64748B", align: "center"
  });
  slide1.addText("-15% Orders | $2.8M Impact | Q4 2024", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 14, color: "DC2626", align: "center", bold: true
  });

  // Slide 2: Problem Analysis
  const slide2 = pptx.addSlide();
  slide2.addText("Problem Analysis", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  slide2.addText("Understanding the Decline", { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 18, color: "5B21B6" });
  
  slide2.addText("• Completed Orders: -15% (High severity)\n• Peak Hour Orders: -22% (High severity)\n• Cart Abandonment: +34% (High severity)\n• Repeat Customers: -18% (Medium severity)", {
    x: 0.5, y: 1.8, w: 9, h: 1.5, fontSize: 14, color: "1E293B"
  });
  slide2.addText("Financial Impact: $2.8M projected annual revenue loss", {
    x: 0.5, y: 3.5, w: 9, h: 0.5, fontSize: 14, color: "DC2626", bold: true
  });

  // Slide 3: Hypothesis Validation
  const slide3 = pptx.addSlide();
  slide3.addText("Hypothesis Validation", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  
  slide3.addText("1. Delivery Time Perception (87% confidence)", { x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 16, bold: true, color: "16A34A" });
  slide3.addText("• 42% of abandoned carts had ETAs > 45 mins\n• 68% cited 'too long wait' as primary concern", { x: 0.7, y: 1.7, w: 8.5, h: 0.7, fontSize: 12, color: "64748B" });
  
  slide3.addText("2. Restaurant Availability Gap (79% confidence)", { x: 0.5, y: 2.5, w: 9, h: 0.4, fontSize: 16, bold: true, color: "16A34A" });
  slide3.addText("• Top 20% restaurants offline 31% of peak time\n• Search-to-order drops 45% when favorites offline", { x: 0.7, y: 2.9, w: 8.5, h: 0.7, fontSize: 12, color: "64748B" });
  
  slide3.addText("3. Pricing Transparency Issues (62% confidence)", { x: 0.5, y: 3.7, w: 9, h: 0.4, fontSize: 16, bold: true, color: "F59E0B" });
  slide3.addText("• Checkout abandonment up 28% after fee display\n• Fee sensitivity varies by order value", { x: 0.7, y: 4.1, w: 8.5, h: 0.7, fontSize: 12, color: "64748B" });

  // Slide 4: Solution Design
  const slide4 = pptx.addSlide();
  slide4.addText("Solution Design", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  
  slide4.addText("1. Smart ETA Engine (P0 - 8 weeks)", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 16, bold: true, color: "5B21B6" });
  slide4.addText("AI-powered delivery predictions with real-time updates\nExpected: -35% cart abandonment", { x: 0.7, y: 1.6, w: 8.5, h: 0.6, fontSize: 12, color: "64748B" });
  
  slide4.addText("2. Restaurant Availability System (P0 - 6 weeks)", { x: 0.5, y: 2.4, w: 9, h: 0.4, fontSize: 16, bold: true, color: "5B21B6" });
  slide4.addText("Predictive demand forecasting and capacity management\nExpected: +28% peak hour availability", { x: 0.7, y: 2.8, w: 8.5, h: 0.6, fontSize: 12, color: "64748B" });
  
  slide4.addText("3. Transparent Pricing (P1 - 4 weeks)", { x: 0.5, y: 3.6, w: 9, h: 0.4, fontSize: 16, bold: true, color: "5B21B6" });
  slide4.addText("Upfront itemized pricing with clear fee breakdown\nExpected: +15% checkout completion", { x: 0.7, y: 4, w: 8.5, h: 0.6, fontSize: 12, color: "64748B" });

  // Slide 5: Wireframes Overview
  const slide5 = pptx.addSlide();
  slide5.addText("Key Interface Changes", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  slide5.addText("UI/UX Solutions", { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 18, color: "5B21B6" });
  
  slide5.addText("Smart ETA Display", { x: 0.5, y: 1.8, w: 3, h: 0.4, fontSize: 14, bold: true });
  slide5.addText("• Live tracking\n• Confidence indicator\n• Proactive updates", { x: 0.5, y: 2.2, w: 3, h: 1, fontSize: 11, color: "64748B" });
  
  slide5.addText("Restaurant Dashboard", { x: 3.5, y: 1.8, w: 3, h: 0.4, fontSize: 14, bold: true });
  slide5.addText("• Demand forecast\n• Capacity alerts\n• Performance metrics", { x: 3.5, y: 2.2, w: 3, h: 1, fontSize: 11, color: "64748B" });
  
  slide5.addText("Transparent Checkout", { x: 6.5, y: 1.8, w: 3, h: 0.4, fontSize: 14, bold: true });
  slide5.addText("• Itemized fees\n• Savings highlight\n• No surprises", { x: 6.5, y: 2.2, w: 3, h: 1, fontSize: 11, color: "64748B" });

  // Slide 6: User Journeys
  const slide6 = pptx.addSlide();
  slide6.addText("User Journey Maps", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  
  slide6.addText("Customer App Flow", { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 16, bold: true, color: "5B21B6" });
  slide6.addText("Home → Restaurant → Cart → Checkout → Tracking → Post-Order", { x: 0.5, y: 1.6, w: 9, h: 0.4, fontSize: 12, color: "64748B" });
  
  slide6.addText("Restaurant Dashboard Flow", { x: 0.5, y: 2.4, w: 9, h: 0.4, fontSize: 16, bold: true, color: "14B8A6" });
  slide6.addText("Dashboard → Orders → Forecast → Pause Management → Alerts → Analytics", { x: 0.5, y: 2.8, w: 9, h: 0.4, fontSize: 12, color: "64748B" });
  
  slide6.addText("Recovery Flows", { x: 0.5, y: 3.6, w: 9, h: 0.4, fontSize: 16, bold: true, color: "F59E0B" });
  slide6.addText("• Long ETA → Faster alternatives + discount\n• Restaurant Offline → Similar restaurant suggestions\n• Delay → Proactive notification + compensation", { x: 0.5, y: 4, w: 9, h: 1, fontSize: 12, color: "64748B" });

  // Slide 7: Metrics & Risks
  const slide7 = pptx.addSlide();
  slide7.addText("Success Metrics & Risks", { x: 0.5, y: 0.3, w: 9, h: 0.8, fontSize: 32, bold: true, color: "1E293B" });
  
  slide7.addText("Target Metrics:", { x: 0.5, y: 1.1, w: 9, h: 0.4, fontSize: 14, bold: true, color: "16A34A" });
  slide7.addText("• Order Completion: 72% → 85% (Q2 2025)\n• Cart Abandonment: 34% → 22% (Q1 2025)\n• Repeat Orders: 41% → 55% (Q2 2025)\n• Peak Availability: 69% → 90% (Q1 2025)", {
    x: 0.5, y: 1.5, w: 9, h: 1.2, fontSize: 12, color: "1E293B"
  });
  
  slide7.addText("Key Risks & Mitigations", { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 14, bold: true, color: "F59E0B" });
  slide7.addText("• Restaurant Resistance → Incentive program for early adopters\n• ETA Inaccuracy → Extensive A/B testing with fallback\n• Fee Sensitivity → User research + subscription option", { x: 0.5, y: 3.3, w: 9, h: 0.9, fontSize: 11, color: "64748B" });
  
  slide7.addText("Expected ROI: $4.2M annual revenue recovery", { x: 0.5, y: 4.4, w: 9, h: 0.4, fontSize: 14, bold: true, color: "16A34A" });

  // Save the presentation
  await pptx.writeFile({ fileName: "FoodSwift-Case-Study.pptx" });
};
