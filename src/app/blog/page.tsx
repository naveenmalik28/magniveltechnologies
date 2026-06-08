"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { blogPosts, blogCategories } from "@/lib/blog";

export default function BlogListPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Blog & Insights"
        title="Engineering discipline, AI capabilities, & digital growth."
        description="Explore technical tutorials, architectural guides, SaaS lessons, and AI automation checklists created by the Magnivel team."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid items-center gap-6 md:grid-cols-[1fr_2.5fr]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input pr-10"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-dimmed">
              <Icon name="search" size={16} />
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-white/10 bg-surface text-muted hover:border-accent/30 hover:text-heading"
              }`}
            >
              All Articles
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "border border-white/10 bg-surface text-muted hover:border-accent/30 hover:text-heading"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-card group flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={`/blog/category/${post.category}`}
                      className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-accent-dark transition hover:border-accent/40"
                    >
                      {post.categoryLabel}
                    </Link>
                    <span className="text-[10px] font-bold text-dimmed">{post.publishedAt}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="mt-4 text-lg font-extrabold text-heading transition group-hover:text-accent-dark leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-subtle-border pt-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-[10px] font-bold text-white">
                      {post.author.avatar}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-heading leading-none">{post.author.name}</p>
                      <p className="mt-0.5 text-[10px] text-dimmed leading-none">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-semibold text-dimmed">
                    <Icon name="clock" size={11} />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-surface/50 py-20 text-center">
            <Icon name="search" size={32} className="mx-auto text-dimmed" />
            <h3 className="mt-4 text-base font-extrabold text-heading">No articles found</h3>
            <p className="mt-2 text-sm text-muted">Try refining your keywords or changing category filters.</p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
