import { useState, useRef, useEffect } from "react";
import { FileText, Download, ExternalLink, X } from "lucide-react";

const docs = [
  {
    label: "Resume",
    description: "1-page snapshot",
    href: "https://koteshwarchinnolla.github.io/DOC/resume.pdf",
  },
  {
    label: "CV",
    description: "Full curriculum vitae",
    href: "https://koteshwarchinnolla.github.io/DOC/cv.pdf",
  },
];

const FloatingDocsButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 left-5 z-50 md:bottom-8 md:left-8">
      <div className="absolute bottom-[72px] right-0 md:bottom-[96px] origin-bottom-right">
        {open && (
          <div className="absolute bottom-full right-0 mb-3 w-72 rounded-2xl bg-card/95 backdrop-blur-md shadow-2xl ring-1 ring-border p-3 animate-scale-in origin-bottom-right">
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-border">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Documents</p>
                <p className="text-sm font-bold">Grab a copy</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5">
              {docs.map((d) => (
                <div
                  key={d.label}
                  className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-muted transition-colors"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] blur-md opacity-50 group-hover:opacity-90 transition-opacity" />
                    <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-tight">{d.label}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{d.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${d.label}`}
                      className="p-1.5 rounded-md hover:bg-background transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={d.href}
                      download
                      aria-label={`Download ${d.label}`}
                      className="p-1.5 rounded-md hover:bg-background transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Documents"
          aria-expanded={open}
          className="group relative flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-md pl-2.5 pr-4 py-2 shadow-2xl ring-1 ring-border hover:ring-[hsl(262,83%,58%)]/60 transition-all hover:scale-105"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] flex items-center justify-center ring-2 ring-background">
              <FileText className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="hidden md:flex flex-col leading-tight text-left">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Docs</span>
            <span className="text-sm font-bold">Resume / CV</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingDocsButton;