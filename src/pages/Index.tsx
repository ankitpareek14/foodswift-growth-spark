import { useState, useEffect, useCallback } from "react";
import { SlideNavigation } from "@/components/slides/SlideNavigation";
import { CoverSlide } from "@/components/slides/CoverSlide";
import { ProblemSlide } from "@/components/slides/ProblemSlide";
import { HypothesisSlide } from "@/components/slides/HypothesisSlide";
import { SolutionSlide } from "@/components/slides/SolutionSlide";
import { WireframeSlide } from "@/components/slides/WireframeSlide";
import { FullWireframeSlide } from "@/components/slides/FullWireframeSlide";
import { MetricsSlide } from "@/components/slides/MetricsSlide";
import { Helmet } from "react-helmet";

const slides = [
  { component: CoverSlide, name: "Cover" },
  { component: ProblemSlide, name: "Problem Analysis" },
  { component: HypothesisSlide, name: "Hypothesis Validation" },
  { component: SolutionSlide, name: "Solution Design" },
  { component: WireframeSlide, name: "Wireframes" },
  { component: FullWireframeSlide, name: "User Journeys" },
  { component: MetricsSlide, name: "Metrics & Risks" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FoodSwift Case Study | Solving Order Drop Crisis</title>
        <meta name="description" content="PM case study analyzing declining orders at FoodSwift with data-driven hypotheses, solutions, and wireframes." />
      </Helmet>
      
      {/* Slide Content */}
      <main className="overflow-x-hidden pb-20">
        <CurrentSlideComponent />
      </main>

      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={goToNext}
        onPrev={goToPrev}
        onGoTo={goToSlide}
      />
    </div>
  );
};

export default Index;
