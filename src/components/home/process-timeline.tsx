"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { Icon } from "@/components/icon";

type Step = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Our Process</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            From Idea to Launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            A proven seven-step methodology that delivers exceptional software on time and on budget.
          </p>
        </ScrollReveal>

        <StaggerContainer className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent-secondary to-accent-light lg:block" />
          <div className="grid gap-6 lg:gap-0">
            {steps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div
                  className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <div className={`glass-card p-6 ${index % 2 === 0 ? "lg:ml-auto lg:max-w-md" : "lg:mr-auto lg:max-w-md"}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                        Step {String(step.step).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-lg font-extrabold text-heading">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-surface-elevated shadow-lg shadow-accent/20">
                    <Icon name={step.icon} size={22} className="text-accent-dark" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
