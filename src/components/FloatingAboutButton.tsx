import { UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import koteshwarImg from "@/assets/koteshwar.jpeg";

const FloatingAboutButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/about") return null;

  return (
    <Link
      to="/about"
      aria-label="About Koteshwar"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-card/80 backdrop-blur-md pl-2 pr-4 py-2 shadow-2xl ring-1 ring-border hover:ring-[hsl(38,92%,55%)]/60 transition-all hover:scale-105 md:bottom-8 md:right-8"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-background">
          <img
            src={koteshwarImg}
            alt="Chinnolla Koteshwar"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[hsl(38,92%,55%)] ring-2 ring-background flex items-center justify-center">
          <UserRound className="w-2 h-2 text-[hsl(220,30%,8%)]" />
        </span>
      </div>
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">About</span>
        <span className="text-sm font-bold">Koteshwar</span>
      </div>
    </Link>
  );
};

export default FloatingAboutButton;
