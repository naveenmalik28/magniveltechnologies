"use client";

import { useState } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export function PromptGeneratorClient() {
  const [role, setRole] = useState("System Analyst");
  const [task, setTask] = useState("");
  const [tone, setTone] = useState("Professional & Direct");
  const [format, setFormat] = useState("Markdown Headers");
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
          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>1. Choose Persona / Role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
              >
                <option value="System Analyst">System Analyst</option>
                <option value="Senior Code Engineer">Senior Code Engineer</option>
                <option value="Conversion Copywriter">Conversion Copywriter</option>
                <option value="Support Bot assistant">Support Bot assistant</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>2. Style &amp; Tone</span>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
              >
                <option value="Professional & Direct">Professional &amp; Direct</option>
                <option value="Conversational & Warm">Conversational &amp; Warm</option>
                <option value="Highly Technical & Structured">Highly Technical &amp; Structured</option>
                <option value="Academic & Explanatory">Academic &amp; Explanatory</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>3. Output Format</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full rounded-lg border border-subtle-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
              >
                <option value="Markdown Headers">Markdown Headers</option>
                <option value="Structured JSON object">Structured JSON object</option>
                <option value="Bullet lists">Bullet lists</option>
                <option value="Bespoke Code code-blocks">Bespoke Code code-blocks</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>4. Describe Task Context</span>
              <textarea
                rows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="e.g. Write an API routing checklist for a multi-tenant node server..."
                className="w-full rounded-lg border border-subtle-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent resize-y"
              />
            </label>
          </div>

          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Generated Prompt Output</span>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!task.trim()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-subtle-border bg-background px-3 py-1.5 text-xs font-bold text-heading hover:border-accent cursor-pointer disabled:opacity-50 transition-colors"
              >
                <Icon name={copied ? "check" : "code"} size={14} />
                {copied ? "Copied!" : "Copy Prompt"}
              </button>
            </div>

            <pre className="rounded-xl border border-subtle-border bg-background p-4 text-xs font-mono leading-relaxed text-foreground overflow-x-auto whitespace-pre-wrap min-h-[220px]">
              {generatePrompt()}
            </pre>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
