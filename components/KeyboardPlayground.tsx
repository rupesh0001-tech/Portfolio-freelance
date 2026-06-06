"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, CornerDownLeft, RotateCcw, Keyboard } from "lucide-react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  onClick: () => void;
  isWide?: boolean;
  isExtraWide?: boolean;
}

const Keycap = ({ label, isPressed, onClick, isWide = false, isExtraWide = false }: KeyProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.92 }}
      animate={{
        scale: isPressed ? 0.95 : 1,
        backgroundColor: isPressed ? "var(--color-brand-primary, #e87d36)" : "#ffffff",
        color: isPressed ? "#ffffff" : "#171717",
        boxShadow: isPressed 
          ? "0 0 15px rgba(232, 125, 54, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        borderColor: isPressed ? "#e87d36" : "#f4f4f5"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`
        h-10 sm:h-12 md:h-14 rounded-xl border flex items-center justify-center font-bold text-sm sm:text-base 
        cursor-pointer select-none transition-all outline-none duration-100
        ${isWide ? "col-span-2 px-3" : isExtraWide ? "col-span-4 px-4" : "col-span-1"}
      `}
    >
      {label}
    </motion.button>
  );
};

export default function KeyboardPlayground() {
  const [inputText, setInputText] = useState("");
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  // Helper to map physical event key to our virtual label
  const mapPhysicalKey = (key: string): string => {
    const uppercase = key.toUpperCase();
    if (key === " ") return "SPACE";
    if (key === "Backspace") return "BACKSPACE";
    if (key === "Enter") return "ENTER";
    return uppercase;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if standard browser shortcuts or inputs are focused elsewhere
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        if (document.activeElement.id !== "mock-terminal-input") return;
      }

      const virtualKey = mapPhysicalKey(e.key);
      
      // Update active state
      setActiveKeys((prev) => {
        const next = new Set(prev);
        next.add(virtualKey);
        return next;
      });

      // Handle character writing
      if (e.key.length === 1) {
        e.preventDefault();
        setInputText((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        setInputText((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        setInputText((prev) => prev + "\n");
      } else if (e.key === "Spacebar" || e.key === " ") {
        e.preventDefault();
        setInputText((prev) => prev + " ");
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const virtualKey = mapPhysicalKey(e.key);
      setActiveKeys((prev) => {
        const next = new Set(prev);
        next.delete(virtualKey);
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleVirtualKeyPress = (key: string) => {
    // Add brief active state for clicks
    setActiveKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    setTimeout(() => {
      setActiveKeys((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }, 120);

    if (key === "BACKSPACE") {
      setInputText((prev) => prev.slice(0, -1));
    } else if (key === "SPACE") {
      setInputText((prev) => prev + " ");
    } else if (key === "ENTER") {
      setInputText((prev) => prev + "\n");
    } else if (key === "CLEAR") {
      setInputText("");
    } else {
      setInputText((prev) => prev + key);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100/60 shadow-sm max-w-4xl mx-auto w-full mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
          <Keyboard className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold text-black">Interactive Keyboard Laboratory</h3>
          <p className="text-neutral-500 text-xs sm:text-sm">
            Press keys on your physical keyboard or click below to type and experience the fluid spring animations.
          </p>
        </div>
      </div>

      {/* Typing Display Screen */}
      <div className="relative bg-neutral-950 rounded-2xl p-4 md:p-5 mb-6 border border-neutral-800 shadow-inner overflow-hidden">
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {inputText && (
            <button
              onClick={() => handleVirtualKeyPress("CLEAR")}
              className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-neutral-800 cursor-pointer flex items-center gap-1 text-[11px] font-semibold"
              title="Clear Terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>CLEAR</span>
            </button>
          )}
          <button
            onClick={copyToClipboard}
            className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-neutral-800 cursor-pointer flex items-center gap-1.5 text-[11px] font-semibold"
            title="Copy to Clipboard"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1 text-emerald-400"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>COPIED</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-neutral-500 font-mono text-[10px] ml-1.5 uppercase tracking-widest">
            rupesh_terminal.sh
          </span>
        </div>
        
        {/* Terminal Textbox */}
        <textarea
          id="mock-terminal-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Start typing on your keyboard... Output will appear here."
          className="w-full min-h-[90px] max-h-[140px] bg-transparent text-neutral-200 font-mono text-sm md:text-base border-none outline-none resize-none placeholder-neutral-600 focus:ring-0 focus:outline-none scrollbar-thin scrollbar-thumb-neutral-800"
        />
      </div>

      {/* Keyboard Grid */}
      <div className="space-y-2 md:space-y-3 max-w-2xl mx-auto">
        {/* Alphabetic Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-1.5 md:gap-2`}
            style={{
              gridTemplateColumns: `repeat(${rowIndex === 2 ? 9 : 10}, minmax(0, 1fr))`,
            }}
          >
            {row.map((key) => (
              <Keycap
                key={key}
                label={key}
                isPressed={activeKeys.has(key)}
                onClick={() => handleVirtualKeyPress(key)}
              />
            ))}
            {/* Row-specific custom layout elements */}
            {rowIndex === 2 && (
              <Keycap
                label="Backspace"
                isPressed={activeKeys.has("BACKSPACE")}
                onClick={() => handleVirtualKeyPress("BACKSPACE")}
                isWide
              />
            )}
          </div>
        ))}

        {/* Spacebar Row */}
        <div className="grid grid-cols-10 gap-1.5 md:gap-2">
          <Keycap
            label="Space"
            isPressed={activeKeys.has("SPACE")}
            onClick={() => handleVirtualKeyPress("SPACE")}
            isExtraWide
          />
          <Keycap
            label="Enter"
            isPressed={activeKeys.has("ENTER")}
            onClick={() => handleVirtualKeyPress("ENTER")}
            isWide
          />
          <Keycap
            label="Clear"
            isPressed={activeKeys.has("CLEAR")}
            onClick={() => handleVirtualKeyPress("CLEAR")}
            isWide
          />
        </div>
      </div>
    </section>
  );
}
