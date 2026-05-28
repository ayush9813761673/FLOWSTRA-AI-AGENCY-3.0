import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedScrollY = useRef(0);
  const isExpandedRef = useRef(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    isExpandedRef.current = isExpanded;
  }, [isExpanded]);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const solutions = document.getElementById("solutions");
      const footer = document.querySelector("footer");

      let pastStart = false;
      let beforeEnd = true;

      if (solutions) {
        pastStart = solutions.getBoundingClientRect().top <= window.innerHeight;
      }

      if (footer) {
        beforeEnd =
          footer.getBoundingClientRect().top >= window.innerHeight - 50;
      }

      const inRange = pastStart && beforeEnd;

      if (isExpandedRef.current) {
        if (Math.abs(window.scrollY - expandedScrollY.current) > 200) {
          setIsExpanded(false);
          setIsVisible(false); // Hide immediately on scroll after shrinking
          clearTimeout(scrollTimeout);
          if (inRange) {
            scrollTimeout = setTimeout(() => {
              setIsVisible(true); // Fade in on stillness
            }, 800);
          }
        } else if (!inRange) {
          setIsExpanded(false);
          setIsVisible(false);
        }
      } else {
        if (inRange) {
          setIsVisible(false);
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setIsVisible(true);
          }, 800);
        } else {
          setIsVisible(false);
          clearTimeout(scrollTimeout);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
      expandedScrollY.current = window.scrollY;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          ref={buttonRef}
          onClick={handleClick}
          layout
          href="https://wa.me/9779813761673?text=Hi%20Ayush%2C%20I%20want%20to%20know%20more%20about%20Flowstra's%20automation%20services."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{
            layout: { type: "spring", stiffness: 400, damping: 25 },
            y: { duration: 0.2, ease: "easeOut" },
            opacity: { duration: 0.2, ease: "easeOut" },
            scale: { duration: 0.2, ease: "easeOut" },
          }}
          className={`fixed bottom-6 right-6 z-[99] flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:opacity-90 transition-colors text-decoration-none overflow-hidden h-[54px] ${
            isExpanded ? "px-6" : "w-[54px] px-0"
          }`}
        >
          <motion.div
            layout
            className="shrink-0 flex items-center justify-center"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.span
                layout
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, marginLeft: 10 }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="font-semibold text-[15px] tracking-wide whitespace-nowrap overflow-hidden"
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
