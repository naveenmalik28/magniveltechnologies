import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { blogPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://magnivel.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://magnivel.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Magnivel Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://magnivel.com/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://magnivel.com/blog/${post.slug}`,
    },
  };

  return (
    <PageShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-dark transition-colors mb-6">
          <Icon name="arrow-right" size={12} className="rotate-180" />
          Back to Blog
        </Link>

        {/* Header Block */}
        <header className="border-b border-subtle-border pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-subtle px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-accent-dark">
              {post.categoryLabel}
            </span>
            <span className="text-[10px] font-bold text-dimmed">{post.publishedAt}</span>
            <span className="text-[10px] font-bold text-dimmed flex items-center gap-1">
              <Icon name="clock" size={11} />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-heading sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white font-bold text-xs">
              {post.author.avatar}
            </span>
            <div>
              <p className="text-xs font-bold text-heading leading-none">{post.author.name}</p>
              <p className="text-[10px] text-dimmed mt-1 leading-none">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div
          className="prose prose-slate max-w-none mt-8 text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags Block */}
        <div className="mt-10 border-t border-subtle-border pt-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-dimmed mb-3">Article Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-subtle-border bg-slate-50 px-2.5 py-1 text-xs font-medium text-muted">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-subtle-border pt-10">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-heading">Related Articles</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((rel) => (
                <div key={rel.slug} className="rounded-xl border border-subtle-border bg-surface p-5 glow-card">
                  <span className="text-[9px] font-extrabold text-dimmed uppercase">{rel.publishedAt}</span>
                  <Link href={`/blog/${rel.slug}`}>
                    <h4 className="mt-2 text-sm font-bold text-heading hover:text-accent transition-colors leading-snug line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                  <p className="mt-2 text-xs leading-normal text-muted line-clamp-2">{rel.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageShell>
  );
}
