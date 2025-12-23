import { Download, FileText, Presentation } from "lucide-react";
import { useState } from "react";
import { exportToPPT } from "@/utils/exportPPT";
import { printToPDF } from "@/utils/exportPDF";

export const ExportMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handlePPTExport = async () => {
    setIsExporting(true);
    try {
      await exportToPPT();
    } catch (error) {
      console.error("PPT export failed:", error);
    }
    setIsExporting(false);
    setIsOpen(false);
  };

  const handlePDFExport = () => {
    printToPDF();
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-all font-medium"
      >
        <Download className="w-4 h-4" />
        Export
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={handlePPTExport}
            disabled={isExporting}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors text-foreground text-sm"
          >
            <Presentation className="w-4 h-4 text-primary" />
            {isExporting ? "Generating..." : "Download as PPT"}
          </button>
          <button
            onClick={handlePDFExport}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors text-foreground text-sm border-t border-border"
          >
            <FileText className="w-4 h-4 text-destructive" />
            Print / Save as PDF
          </button>
        </div>
      )}
    </div>
  );
};
