"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
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
        {/* Search & Category Filter Section */}
        <div className="grid gap-6 md:grid-cols-[1fr_2.5fr] items-center mb-12">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-subtle-border bg-white px-4 py-2.5 pr-10 text-xs sm:text-sm text-heading focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-dimmed">
              <Icon name="search" size={16} />
            </span>
          </div>

          {/* Categories Tab buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-accent text-white shadow-sm"
                  : "bg-slate-100 text-muted hover:bg-slate-200"
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
                    ? "bg-accent text-white shadow-sm"
                    : "bg-slate-100 text-muted hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md hover:border-accent/30 transition-all glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <Link
                      href={`/blog/category/${post.category}`}
                      className="rounded-full bg-accent-subtle px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-accent-dark hover:bg-accent-light/10"
                    >
                      {post.categoryLabel}
                    </Link>
                    <span className="text-[10px] font-bold text-dimmed">{post.publishedAt}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="mt-4 text-lg font-extrabold text-heading group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-subtle-border/50 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-dark text-white font-bold text-[10px]">
                      {post.author.avatar}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-heading leading-none">{post.author.name}</p>
                      <p className="text-[9px] text-dimmed mt-0.5 leading-none">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-dimmed flex items-center gap-1">
                    <Icon name="clock" size={11} />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-subtle-border rounded-2xl bg-slate-50/50">
            <Icon name="search" size={32} className="mx-auto text-dimmed" />
            <h3 className="mt-4 text-base font-extrabold text-heading">No articles found</h3>
            <p className="mt-2 text-xs text-muted">Try refining your keywords or changing category filters.</p>
          </div>
        )}
      </section>
    </PageShell>
  );
}
