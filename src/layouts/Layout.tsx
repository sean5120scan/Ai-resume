import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { LoadingBar } from "../components/LoadingBar";
import { useIsMobile } from "../hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

// Map paths to indices to determine slide direction
const pathIndices: Record<string, number> = {
  "/": 0,
  "/experience": 1,
  "/projects": 2,
  "/skills": 3,
  "/contact": 4,
};

export function Layout() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const outlet = useOutlet();
  
  // Determine direction (not strictly necessary for simple 3D but helpful for slide)
  // For 3D cube, we usually just rotate one way or use index diff.
  // Let's use a simple unified 3D perspective effect for desktop.

  const variants3D = {
    initial: { opacity: 0, rotateY: 90, transformOrigin: "50% 50%", z: -100 },
    animate: { opacity: 1, rotateY: 0, transformOrigin: "50% 50%", z: 0 },
    exit: { opacity: 0, rotateY: -90, transformOrigin: "50% 50%", z: -100 },
  };

  const variantsMobile = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-resume-bg text-slate-800 font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Loading Bar only on mobile or always? User said "Mobile... add fun loading progress bar" */}
      {isMobile && <LoadingBar key={location.pathname + "loading"} />}

      <main className="pt-16 min-h-[calc(100vh-4rem)] relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={isMobile ? variantsMobile : variants3D}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.5
            }}
            className="w-full h-full absolute top-0 left-0 p-4 md:p-8"
            style={!isMobile ? { transformStyle: "preserve-3d", backfaceVisibility: "hidden" } : {}}
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 min-h-[80vh] border border-resume-purple/20">
              {outlet}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}