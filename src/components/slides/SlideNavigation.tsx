import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (slide: number) => void;
}

const slideNames = [
  "Cover",
  "Problem Analysis",
  "Hypothesis Validation",
  "Solution Design",
  "Wireframes",
  "Metrics & Risks",
];

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium",
            currentSlide === 0
              ? "text-muted-foreground cursor-not-allowed"
              : "text-foreground hover:bg-muted"
          )}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onGoTo(idx)}
              className={cn(
                "group relative flex items-center justify-center transition-all",
                currentSlide === idx ? "scale-110" : "hover:scale-105"
              )}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentSlide === idx
                    ? "bg-primary shadow-glow-primary"
                    : "bg-muted hover:bg-primary/50"
                )}
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs bg-foreground text-background px-2 py-1 rounded pointer-events-none">
                {slideNames[idx]}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium",
            currentSlide === totalSlides - 1
              ? "text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary"
          )}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
