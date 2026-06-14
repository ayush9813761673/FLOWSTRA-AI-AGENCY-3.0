import React, { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, stagger } from "../constants";
import { GlowCard } from "./ui/spotlight-card";
import { WebGLShader } from "./ui/web-gl-shader";

export function Calculator() {

  const [leads, setLeads] = useState<number>(200);
  const [dealValue, setDealValue] = useState<number>(5000);
  const [closeRate, setCloseRate] = useState<number>(8); // percentage

  // Internal calculations based on Flowstra's value proposition
  // Assuming Flowstra improves close rate by ~2.5x (from user's text)
  const improvedCloseRate = closeRate * 2.5;

  const currentRevenue = Math.round(leads * (closeRate / 100) * dealValue);
  const projectedRevenue = Math.round(
    leads * (improvedCloseRate / 100) * dealValue,
  );
  const leakingRevenue = projectedRevenue - currentRevenue;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="relative py-24 px-6 overflow-hidden border-y border-[var(--card-border)] bg-[#030612]/30 mt-16 pb-32">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
        <div className="flex flex-col gap-4 max-w-3xl items-center text-center mx-auto">
          <motion.p
            variants={fadeUp}
            className="text-[12px] font-semibold tracking-widest text-[var(--accent-blue)] uppercase"
          >
            Interactive Calculator
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Revenue Leak & ROI Calculator
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-[var(--text-secondary)]"
          >
            See how much revenue you're leaving on the table — and what Flowstra
            AI can recover.
          </motion.p>
        </div>

        <motion.div variants={fadeUp}>
          <GlowCard
            customSize
            className="w-full flex flex-col rounded-2xl overflow-hidden border border-[var(--card-border)] relative z-0 bg-[#030612]/50 backdrop-blur-md"
          >
            <WebGLShader />
            <div className="flex flex-col lg:flex-row w-full relative z-10 bg-transparent">
              {/* Input Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[var(--card-border)] bg-black/40 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-8">
                  Your Current Numbers
                </h3>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">
                        Leads per Month
                      </label>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {leads}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={leads}
                      onChange={(e) => setLeads(Number(e.target.value))}
                      className="w-full h-2 bg-[var(--card-border)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)] relative z-50 pointer-events-auto"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">
                        Avg Deal Value
                      </label>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        ${dealValue.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="25000"
                      step="100"
                      value={dealValue}
                      onChange={(e) => setDealValue(Number(e.target.value))}
                      className="w-full h-2 bg-[var(--card-border)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)] relative z-50 pointer-events-auto"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-[var(--text-secondary)]">
                        Current Close Rate
                      </label>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {closeRate}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      step="1"
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full h-2 bg-[var(--card-border)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-blue)] relative z-50 pointer-events-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-black/40 backdrop-blur-sm relative overflow-hidden z-0">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-blue)] rounded-full blur-[100px] opacity-10 pointer-events-none z-0"></div>

                <div className="flex flex-col gap-8 relative z-10 pointer-events-none">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      Current Revenue
                    </p>
                    <p className="text-2xl font-semibold text-[var(--text-primary)]">
                      {formatCurrency(currentRevenue)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 border-l-2 border-[var(--text-muted)] pl-4">
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      Revenue Leaking
                    </p>
                    <p className="text-3xl font-semibold text-red-400">
                      {formatCurrency(leakingRevenue)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-[var(--card-border)]">
                    <p className="text-sm font-medium text-[var(--accent-blue)] uppercase tracking-wider">
                      Projected with Flowstra
                    </p>
                    <div className="flex items-end gap-3 flex-wrap">
                      <p className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--text-secondary)]">
                        {formatCurrency(projectedRevenue)}
                      </p>
                      <span className="inline-block px-3 py-1 bg-[var(--accent-blue-dim)] text-[var(--accent-blue)] text-sm font-bold rounded-full mb-1">
                        2.5x ROI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full border-t border-[var(--card-border)] p-8 lg:p-12 flex flex-col items-center justify-center text-center relative z-10">
              <a
                href="https://cal.com/flowstra/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.5)] hover:shadow-[0_0_35px_12px_rgba(255,255,255,0.6)] hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 pointer-events-auto cursor-pointer"
              >
                Stop the Bleeding — Book Free Audit
              </a>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mt-6">
                ⚡ 20-min revenue audit • Zero pressure • Immediate insights
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
