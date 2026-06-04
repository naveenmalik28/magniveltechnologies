"use client";

import { useState } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export default function AIPromptGenerator() {
  const [role, setRole] = useState("System Analyst");
  const [task, setTask] = useState("");
  const [tone, setTone] = useState("Professional");
  const [format, setFormat] = useState("Markdown");
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    if (!task.trim()) {
      return "Please input your task context on the left to generate a formatted prompt template.";
    }

    return `You are acting as an expert ${role}.

TASK INSTRUCTION:
${task}

OUTPUT GUIDELINES:
- Output style must be strictly ${tone}.
- Format the response as ${format}.
- Ensure high detail and accuracy. Do not use generic placeholders.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="AI Prompt Engineering Generator"
        description="Write high-quality LLM prompts instantly. Select a role, specify constraints, and input your task to compile clean system prompts."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1.8fr] items-start">
          {/* Controls Form */}
          <div className="rounded-2xl border border-subtle-border bg-white p-6 shadow-md grid gap-5">
            {/* Persona Role */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>1. Choose Persona / Role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-white px-3 py-2 text-xs text-heading focus:outline-none focus:border-accent"
              >
                <option value="System Analyst">System Analyst</option>
                <option value="Senior Code Engineer">Senior Code Engineer</option>
                <option value="Conversion Copywriter">Conversion Copywriter</option>
                <option value="Support Bot assistant">Support Bot assistant</option>
              </select>
            </label>

            {/* Tone Selector */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>2. Style & Tone</span>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-white px-3 py-2 text-xs text-heading focus:outline-none focus:border-accent"
              >
                <option value="Professional & Direct">Professional & Direct</option>
                <option value="Conversational & Warm">Conversational & Warm</option>
                <option value="Highly Technical & Structured">Highly Technical & Structured</option>
                <option value="Academic & Explanatory">Academic & Explanatory</option>
              </select>
            </label>

            {/* Output Schema */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>3. Output Format</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-white px-3 py-2 text-xs text-heading focus:outline-none focus:border-accent"
              >
                <option value="Markdown Headers">Markdown Headers</option>
                <option value="Structured JSON object">Structured JSON object</option>
                <option value="Bullet lists">Bullet lists</option>
                <option value="Bespoke Code code-blocks">Bespoke Code code-blocks</option>
              </select>
            </label>

            {/* Task Description */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>4. Describe Task Context</span>
              <textarea
                rows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="e.g. Write an API routing checklist for a multi-tenant node server..."
                className="w-full rounded-lg border border-subtle-border bg-white px-3.5 py-2.5 text-xs sm:text-sm text-heading focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 resize-none"
              />
            </label>
          </div>

          {/* Prompt Preview Codebox */}
          <div className="rounded-2xl border border-subtle-border bg-slate-900 p-6 shadow-2xl flex flex-col justify-between h-[360px] text-white">
            <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
              <span className="font-mono text-[10px] uppercase text-cyan-200 tracking-wider font-bold">System Prompt Blueprint</span>
              {task.trim() && (
                <button
                  onClick={handleCopy}
                  className="text-xs font-bold text-slate-300 hover:text-white cursor-pointer inline-flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Icon name="check" size={13} className="text-emerald-400 font-bold" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Icon name="layers" size={13} />
                      Copy Prompt
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto pr-1">
              <pre className="font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                {generatePrompt()}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
